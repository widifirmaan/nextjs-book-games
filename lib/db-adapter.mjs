import fs from 'node:fs';
import path from 'node:path';
import { createClient } from '@libsql/client';

function resolveDbConfig() {
  if (process.env.TURSO_DATABASE_URL) {
    return {
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    };
  }
  if (process.env.VERCEL) {
    return { url: 'file:/tmp/bookgames.db' };
  }
  return { url: `file:${path.resolve(process.cwd(), 'local.db')}` };
}

function createD1Wrapper(client) {
  const wrapStmt = (sql, boundArgs = []) => ({
    _sql: sql,
    _args: boundArgs,
    bind(...args) {
      return wrapStmt(sql, args.map((v) => (v === undefined ? null : v)));
    },
    async first(colName) {
      const res = await client.execute({ sql, args: boundArgs });
      const row = res.rows?.[0];
      if (!row) return null;
      const obj = { ...row };
      return colName ? obj[colName] : obj;
    },
    async all() {
      const res = await client.execute({ sql, args: boundArgs });
      return { results: (res.rows || []).map((r) => ({ ...r })) };
    },
    async run() {
      const res = await client.execute({ sql, args: boundArgs });
      return {
        success: true,
        meta: {
          changes: res.rowsAffected ?? 0,
          last_row_id: res.lastInsertRowid ? Number(res.lastInsertRowid) : 0,
        },
      };
    },
  });

  return {
    prepare(sql) {
      return wrapStmt(sql);
    },
    async batch(statements) {
      if (!Array.isArray(statements) || statements.length === 0) return [];
      const tx = await client.transaction('write');
      const results = [];
      try {
        for (const stmt of statements) {
          const res = await tx.execute({
            sql: stmt._sql,
            args: stmt._args || [],
          });
          results.push({
            success: true,
            results: (res.rows || []).map((r) => ({ ...r })),
            meta: {
              changes: res.rowsAffected ?? 0,
              last_row_id: res.lastInsertRowid ? Number(res.lastInsertRowid) : 0,
            },
          });
        }
        await tx.commit();
        return results;
      } catch (err) {
        try {
          await tx.rollback();
        } catch {}
        throw err;
      }
    },
    async executeMultiple(sql) {
      await client.executeMultiple(sql);
    },
  };
}

let cachedD1 = null;
let initPromise = null;

export async function initializeDatabase(client, { forceSeed = false } = {}) {
  const check = await client.execute(
    "SELECT name FROM sqlite_master WHERE type='table' AND name='users'"
  );
  if (check.rows.length === 0 || forceSeed) {
    const schemaSql = fs.readFileSync(path.resolve(process.cwd(), 'schema.sql'), 'utf8');
    await client.executeMultiple(schemaSql);
    return { initialized: check.rows.length === 0, seeded: true };
  }
  return { initialized: false, seeded: false };
}

export async function getLocalD1() {
  if (!initPromise) {
    initPromise = (async () => {
      const cfg = resolveDbConfig();
      const client = createClient({ url: cfg.url, authToken: cfg.authToken });
      await client.execute('PRAGMA foreign_keys = ON');
      await initializeDatabase(client);
      cachedD1 = createD1Wrapper(client);
      return cachedD1;
    })().catch((err) => {
      initPromise = null;
      throw err;
    });
  }
  return initPromise;
}
