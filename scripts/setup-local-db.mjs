import fs from 'node:fs';
import path from 'node:path';
import { createClient } from '@libsql/client';
import { initializeDatabase } from '../lib/db-adapter.mjs';

const args = process.argv.slice(2);
const reset = args.includes('--reset');

const dbUrl = process.env.TURSO_DATABASE_URL || `file:${path.resolve(process.cwd(), 'local.db')}`;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (reset && dbUrl.startsWith('file:')) {
  const filePath = dbUrl.slice('file:'.length);
  for (const suffix of ['', '-wal', '-shm']) {
    if (fs.existsSync(`${filePath}${suffix}`)) {
      fs.unlinkSync(`${filePath}${suffix}`);
    }
  }
  console.log(`Removed existing SQLite file: ${filePath}`);
}

const client = createClient({ url: dbUrl, authToken });
const result = await initializeDatabase(client, { forceSeed: !reset });
const users = await client.execute('SELECT username, role FROM users ORDER BY role, username');

console.log(`Database ready (${dbUrl}) | initialized=${result.initialized} seeded=${result.seeded}`);
console.log('Users ->', users.rows.map((r) => `${r.username} (${r.role})`).join(', '));

client.close();
