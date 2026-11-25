import { getD1 } from '@/lib/mongodb';
import { getLocalD1 } from '@/lib/db-adapter.mjs';

export interface UserRow {
    id: string;
    username: string;
    password?: string;
    role: 'GURU' | 'SISWA';
    fullName?: string;
    name?: string;
    email?: string;
    kelas?: string;
    schoolName?: string;
    photoUrl?: string;
    level?: number;
    levels?: string;
    indukStartTimes?: string;
    indukEndTimes?: string;
    dailySubmissions?: string;
    awards?: string;
    newAwardsToNotify?: string;
    createdAt?: string;
    updatedAt?: string;
}

async function resolveDb(): Promise<any> {
    const d1 = getD1();
    if (d1) return d1;
    if (typeof process !== 'undefined' && process.env.CLOUDFLARE_WORKER !== '1') {
        const localDb = await getLocalD1();
        if (localDb) return localDb;
    }
    throw new Error('Database binding unavailable');
}

function serializeMap(m: Map<string, any> | undefined): string {
    if (!m) return '{}';
    const obj: Record<string, any> = {};
    for (const [k, v] of m.entries()) {
        obj[k] = v instanceof Date ? v.toISOString() : v;
    }
    return JSON.stringify(obj);
}

export class User {
    id: string;
    _id: string;
    username: string;
    password: string;
    role: 'GURU' | 'SISWA';
    fullName?: string;
    name?: string;
    email?: string;
    kelas?: string;
    schoolName?: string;
    photoUrl?: string;
    level: number;
    levels: Map<string, string>;
    indukStartTimes: Map<string, any>;
    indukEndTimes: Map<string, any>;
    dailySubmissions: Map<string, number>;
    awards: string[];
    newAwardsToNotify: string[];
    createdAt?: string;
    updatedAt?: string;

    constructor(data: any) {
        this.id = data.id || data._id || `user-${Date.now()}`;
        this._id = this.id;
        this.username = data.username || '';
        this.password = data.password || '';
        this.role = data.role || 'SISWA';
        this.fullName = data.fullName || '';
        this.name = data.name || this.fullName || this.username;
        this.email = data.email || '';
        this.kelas = data.kelas || '';
        this.schoolName = data.schoolName || '';
        this.photoUrl = data.photoUrl || '';
        this.level = data.level || 1;
        this.awards = Array.isArray(data.awards) ? data.awards : (typeof data.awards === 'string' ? JSON.parse(data.awards || '[]') : []);
        this.newAwardsToNotify = Array.isArray(data.newAwardsToNotify) ? data.newAwardsToNotify : (typeof data.newAwardsToNotify === 'string' ? JSON.parse(data.newAwardsToNotify || '[]') : []);

        const rawLevels = typeof data.levels === 'string' ? JSON.parse(data.levels || '{}') : (data.levels || {});
        this.levels = rawLevels instanceof Map ? rawLevels : new Map(Object.entries(rawLevels));

        const rawStart = typeof data.indukStartTimes === 'string' ? JSON.parse(data.indukStartTimes || '{}') : (data.indukStartTimes || {});
        this.indukStartTimes = rawStart instanceof Map ? rawStart : new Map(Object.entries(rawStart));

        const rawEnd = typeof data.indukEndTimes === 'string' ? JSON.parse(data.indukEndTimes || '{}') : (data.indukEndTimes || {});
        this.indukEndTimes = rawEnd instanceof Map ? rawEnd : new Map(Object.entries(rawEnd));

        const rawSubmissions = typeof data.dailySubmissions === 'string' ? JSON.parse(data.dailySubmissions || '{}') : (data.dailySubmissions || {});
        this.dailySubmissions = rawSubmissions instanceof Map ? rawSubmissions : new Map(Object.entries(rawSubmissions));

        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    toJSON() {
        const levelsObj: Record<string, string> = {};
        for (const [k, v] of this.levels.entries()) {
            levelsObj[k] = v;
        }
        return {
            id: this.id,
            _id: this.id,
            username: this.username,
            role: this.role,
            fullName: this.fullName,
            email: this.email,
            kelas: this.kelas,
            schoolName: this.schoolName,
            photoUrl: this.photoUrl,
            level: this.level,
            levels: levelsObj,
            awards: this.awards,
            newAwardsToNotify: this.newAwardsToNotify,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    async save(): Promise<this> {
        const db = await resolveDb();
        const levelsJson = serializeMap(this.levels);
        const startJson = serializeMap(this.indukStartTimes);
        const endJson = serializeMap(this.indukEndTimes);
        const subsJson = serializeMap(this.dailySubmissions);
        const awardsJson = JSON.stringify(this.awards || []);
        const newAwardsJson = JSON.stringify(this.newAwardsToNotify || []);

        await db.prepare(`
            UPDATE users SET
                username = ?, password = ?, role = ?, fullName = ?, email = ?, kelas = ?,
                schoolName = ?, photoUrl = ?, level = ?, levels = ?, indukStartTimes = ?,
                indukEndTimes = ?, dailySubmissions = ?, awards = ?, newAwardsToNotify = ?,
                updatedAt = datetime('now')
            WHERE id = ?
        `).bind(
            this.username, this.password, this.role, this.fullName || '', this.email || '', this.kelas || '',
            this.schoolName || '', this.photoUrl || '', this.level || 1, levelsJson, startJson,
            endJson, subsJson, awardsJson, newAwardsJson, this.id
        ).run();

        return this;
    }

    static async findOne(query: { id?: string; username?: string; role?: string; email?: string }): Promise<User | null> {
        const db = await resolveDb();
        const clauses: string[] = [];
        const params: any[] = [];
        if (query.id) { clauses.push('id = ?'); params.push(query.id); }
        if (query.username) { clauses.push('username = ?'); params.push(query.username); }
        if (query.role) { clauses.push('role = ?'); params.push(query.role); }
        if (query.email) { clauses.push('email = ?'); params.push(query.email); }
        if (clauses.length === 0) return null;

        const row = await db.prepare(`SELECT * FROM users WHERE ${clauses.join(' AND ')} LIMIT 1`).bind(...params).first();
        return row ? new User(row) : null;
    }

    static async findById(id: string): Promise<User | null> {
        const db = await resolveDb();
        const row = await db.prepare('SELECT * FROM users WHERE id = ?').bind(id).first();
        return row ? new User(row) : null;
    }

    static find(query: { role?: string } = {}): any {
        let selectFields = '';
        const run = async () => {
            const db = await resolveDb();
            let rows: any[] = [];
            if (query.role) {
                const res = await db.prepare('SELECT * FROM users WHERE role = ? ORDER BY createdAt DESC').bind(query.role).all();
                rows = res.results || [];
            } else {
                const res = await db.prepare('SELECT * FROM users ORDER BY createdAt DESC').all();
                rows = res.results || [];
            }

            const users = rows.map(r => new User(r));
            if (selectFields) {
                return users.map(u => {
                    const obj = u.toJSON();
                    if (selectFields.includes('-password')) {
                        delete (obj as any).password;
                    }
                    return obj;
                });
            }
            return users;
        };

        const queryObj = {
            select(fields: string) {
                selectFields = fields;
                return queryObj;
            },
            then(onfulfilled?: (value: any) => any, onrejected?: (reason: any) => any) {
                return run().then(onfulfilled, onrejected);
            },
            catch(onrejected?: (reason: any) => any) {
                return run().catch(onrejected);
            }
        };

        return queryObj;
    }

    static async create(data: any): Promise<User> {
        const db = await resolveDb();
        const id = data.id || `user-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
        const user = new User({ ...data, id });

        const levelsJson = serializeMap(user.levels);
        const startJson = serializeMap(user.indukStartTimes);
        const endJson = serializeMap(user.indukEndTimes);
        const subsJson = serializeMap(user.dailySubmissions);
        const awardsJson = JSON.stringify(user.awards || []);
        const newAwardsJson = JSON.stringify(user.newAwardsToNotify || []);

        await db.prepare(`
            INSERT INTO users (id, username, password, role, fullName, email, kelas, schoolName, photoUrl, level, levels, indukStartTimes, indukEndTimes, dailySubmissions, awards, newAwardsToNotify)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
            id, user.username, user.password, user.role, user.fullName || '', user.email || '',
            user.kelas || '', user.schoolName || '', user.photoUrl || '', user.level || 1,
            levelsJson, startJson, endJson, subsJson, awardsJson, newAwardsJson
        ).run();

        return user;
    }

    static async createMany(items: any[]): Promise<User[]> {
        if (!Array.isArray(items) || items.length === 0) return [];
        const db = await resolveDb();
        const users: User[] = [];
        const stmts = [];
        for (const data of items) {
            const id = data.id || `user-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
            const user = new User({ ...data, id });
            users.push(user);
            stmts.push(
                db.prepare(`
                    INSERT INTO users (id, username, password, role, fullName, email, kelas, schoolName, photoUrl, level, levels, indukStartTimes, indukEndTimes, dailySubmissions, awards, newAwardsToNotify)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `).bind(
                    id, user.username, user.password, user.role, user.fullName || '', user.email || '',
                    user.kelas || '', user.schoolName || '', user.photoUrl || '', user.level || 1,
                    serializeMap(user.levels), serializeMap(user.indukStartTimes),
                    serializeMap(user.indukEndTimes), serializeMap(user.dailySubmissions),
                    JSON.stringify(user.awards || []), JSON.stringify(user.newAwardsToNotify || [])
                )
            );
        }
        if (typeof db.batch === 'function') {
            await db.batch(stmts);
        } else {
            for (const s of stmts) await s.run();
        }
        return users;
    }

    static findByIdAndUpdate(id: string, updateData: any, _options?: any): any {
        let selectFields = '';
        const run = async () => {
            const user = await User.findById(id);
            if (!user) return null;

            if (updateData.username !== undefined) user.username = updateData.username;
            if (updateData.password !== undefined) user.password = updateData.password;
            if (updateData.role !== undefined) user.role = updateData.role;
            if (updateData.fullName !== undefined) user.fullName = updateData.fullName;
            if (updateData.email !== undefined) user.email = updateData.email;
            if (updateData.kelas !== undefined) user.kelas = updateData.kelas;
            if (updateData.schoolName !== undefined) user.schoolName = updateData.schoolName;
            if (updateData.photoUrl !== undefined) user.photoUrl = updateData.photoUrl;
            if (updateData.level !== undefined) user.level = updateData.level;
            if (updateData.awards !== undefined) user.awards = updateData.awards;
            if (updateData.newAwardsToNotify !== undefined) user.newAwardsToNotify = updateData.newAwardsToNotify;
            if (updateData.levels !== undefined) {
                const raw = updateData.levels;
                user.levels = raw instanceof Map ? raw : new Map(Object.entries(raw || {}));
            }
            if (updateData.indukStartTimes !== undefined) {
                const raw = updateData.indukStartTimes;
                user.indukStartTimes = raw instanceof Map ? raw : new Map(Object.entries(raw || {}));
            }
            if (updateData.indukEndTimes !== undefined) {
                const raw = updateData.indukEndTimes;
                user.indukEndTimes = raw instanceof Map ? raw : new Map(Object.entries(raw || {}));
            }
            if (updateData.dailySubmissions !== undefined) {
                const raw = updateData.dailySubmissions;
                user.dailySubmissions = raw instanceof Map ? raw : new Map(Object.entries(raw || {}));
            }

            await user.save();

            const obj = user.toJSON();
            if (selectFields.includes('-password')) {
                delete (obj as any).password;
            }
            return obj;
        };

        const queryObj = {
            select(fields: string) {
                selectFields = fields;
                return queryObj;
            },
            then(onfulfilled?: (value: any) => any, onrejected?: (reason: any) => any) {
                return run().then(onfulfilled, onrejected);
            },
            catch(onrejected?: (reason: any) => any) {
                return run().catch(onrejected);
            }
        };

        return queryObj;
    }

    static async findByIdAndDelete(id: string): Promise<boolean> {
        const db = await resolveDb();
        const existing = await User.findById(id);
        if (!existing) return false;
        await db.prepare('DELETE FROM users WHERE id = ?').bind(id).run();
        return true;
    }
}

export default User;
