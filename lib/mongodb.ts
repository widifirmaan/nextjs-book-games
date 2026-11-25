import { getLocalD1 } from '@/lib/db-adapter.mjs';

export function getD1(): any {
  const ctx = (globalThis as any)[Symbol.for('__cloudflare-context__')];
  if (ctx?.env?.DB) return ctx.env.DB;
  if ((globalThis as any).DB) return (globalThis as any).DB;
  return null;
}

export default async function dbConnect() {
  if (getD1()) return true;
  if (typeof process !== 'undefined' && process.env.CLOUDFLARE_WORKER !== '1') {
    await getLocalD1();
  }
  return true;
}
