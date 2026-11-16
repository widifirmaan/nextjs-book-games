// Cloudflare D1 User Model and Data Access Layer for BukuMedia School Games

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

// In-memory fallback if D1 context is not yet loaded (e.g. static pre-render or local dev without binding)
const memoryStore = new Map<string, any>();

// Seed default guru and siswa accounts for fallback
memoryStore.set('guru', {
    id: 'guru-1',
    username: 'guru',
    password: '$2a$10$xz4xlJZX/iBvXYQbo9ouC.cM5Odxl.GdPAZgETRYCewnpJunPOGYW',
    role: 'GURU',
    fullName: 'Budi Guru',
    email: 'guru@sekolah.id',
    schoolName: 'SMA Negeri 1',
    photoUrl: 'https://i.pravatar.cc/150?u=guru',
    level: 1,
    levels: '{}',
    indukStartTimes: '{}',
    indukEndTimes: '{}',
    dailySubmissions: '{}',
    awards: '[]',
    newAwardsToNotify: '[]',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
});

memoryStore.set('siswa', {
    id: 'siswa-1',
    username: 'siswa',
    password: '$2a$10$xz4xlJZX/iBvXYQbo9ouC.cM5Odxl.GdPAZgETRYCewnpJunPOGYW',
    role: 'SISWA',
    fullName: 'Ani Siswa',
    email: 'siswa@sekolah.id',
    kelas: 'XII-A',
    schoolName: 'SMA Negeri 1',
    photoUrl: 'https://i.pravatar.cc/150?u=siswa',
    level: 1,
    levels: JSON.stringify({
        level1: JSON.stringify({
            "Siapakah_presiden_pertama_Indonesia?": "Soekarno",
            "Apa_warna_bendera_Indonesia?": "Merah Putih",
            "status": "completed",
            "stars": 3
        })
    }),
    indukStartTimes: '{}',
    indukEndTimes: '{}',
    dailySubmissions: '{}',
    awards: '[]',
    newAwardsToNotify: '[]',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
});

export function getD1(): any {
    const ctx = (globalThis as any)[Symbol.for('__cloudflare-context__')];
    if (ctx?.env?.DB) return ctx.env.DB;
    if ((globalThis as any).DB) return (globalThis as any).DB;
    return null;
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

        // Maps for legacy support
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
        const db = getD1();
        const levelsJson = JSON.stringify(Object.fromEntries(this.levels.entries()));
        const startJson = JSON.stringify(Object.fromEntries(this.indukStartTimes.entries()));
        const endJson = JSON.stringify(Object.fromEntries(this.indukEndTimes.entries()));
        const subsJson = JSON.stringify(Object.fromEntries(this.dailySubmissions.entries()));
        const awardsJson = JSON.stringify(this.awards || []);
        const newAwardsJson = JSON.stringify(this.newAwardsToNotify || []);

        if (db) {
            await db.prepare(`
                UPDATE users SET
                    username = ?, password = ?, role = ?, fullName = ?, email = ?, kelas = ?,
                    schoolName = ?, photoUrl = ?, level = ?, levels = ?, indukStartTimes = ?,
                    indukEndTimes = ?, dailySubmissions = ?, awards = ?, newAwardsToNotify = ?,
                    updatedAt = datetime('now')
                WHERE id = ?
            `).bind(
                this.username, this.password, this.role, this.fullName, this.email, this.kelas,
                this.schoolName, this.photoUrl, this.level, levelsJson, startJson,
                endJson, subsJson, awardsJson, newAwardsJson, this.id
            ).run();
        } else {
            memoryStore.set(this.username, {
                id: this.id,
                username: this.username,
                password: this.password,
                role: this.role,
                fullName: this.fullName,
                email: this.email,
                kelas: this.kelas,
                schoolName: this.schoolName,
                photoUrl: this.photoUrl,
                level: this.level,
                levels: levelsJson,
                indukStartTimes: startJson,
                indukEndTimes: endJson,
                dailySubmissions: subsJson,
                awards: awardsJson,
                newAwardsToNotify: newAwardsJson,
                updatedAt: new Date().toISOString()
            });
        }
        return this;
    }

    static async findOne(query: { username?: string; role?: string }): Promise<User | null> {
        const db = getD1();
        if (db && query.username) {
            const row = await db.prepare('SELECT * FROM users WHERE username = ?').bind(query.username).first();
            return row ? new User(row) : null;
        }
        if (query.username) {
            const row = memoryStore.get(query.username);
            return row ? new User(row) : null;
        }
        return null;
    }

    static async findById(id: string): Promise<User | null> {
        const db = getD1();
        if (db) {
            const row = await db.prepare('SELECT * FROM users WHERE id = ?').bind(id).first();
            return row ? new User(row) : null;
        }
        for (const u of memoryStore.values()) {
            if (u.id === id) return new User(u);
        }
        return null;
    }

    static find(query: { role?: string } = {}): any {
        let selectFields = '';
        const run = async () => {
            const db = getD1();
            let rows: any[] = [];
            if (db) {
                if (query.role) {
                    const res = await db.prepare('SELECT * FROM users WHERE role = ? ORDER BY createdAt DESC').bind(query.role).all();
                    rows = res.results || [];
                } else {
                    const res = await db.prepare('SELECT * FROM users ORDER BY createdAt DESC').all();
                    rows = res.results || [];
                }
            } else {
                rows = Array.from(memoryStore.values()).filter(u => !query.role || u.role === query.role);
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
        const db = getD1();
        const id = data.id || `user-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
        const user = new User({ ...data, id });

        const levelsJson = JSON.stringify(Object.fromEntries(user.levels.entries()));
        const startJson = JSON.stringify(Object.fromEntries(user.indukStartTimes.entries()));
        const endJson = JSON.stringify(Object.fromEntries(user.indukEndTimes.entries()));
        const subsJson = JSON.stringify(Object.fromEntries(user.dailySubmissions.entries()));
        const awardsJson = JSON.stringify(user.awards || []);
        const newAwardsJson = JSON.stringify(user.newAwardsToNotify || []);

        if (db) {
            await db.prepare(`
                INSERT INTO users (id, username, password, role, fullName, email, kelas, schoolName, photoUrl, level, levels, indukStartTimes, indukEndTimes, dailySubmissions, awards, newAwardsToNotify)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(
                id, user.username, user.password, user.role, user.fullName || '', user.email || '',
                user.kelas || '', user.schoolName || '', user.photoUrl || '', user.level || 1,
                levelsJson, startJson, endJson, subsJson, awardsJson, newAwardsJson
            ).run();
        }

        memoryStore.set(user.username, {
            ...data,
            id,
            levels: levelsJson,
            indukStartTimes: startJson,
            indukEndTimes: endJson,
            dailySubmissions: subsJson,
            awards: awardsJson,
            newAwardsToNotify: newAwardsJson
        });

        return user;
    }

    static findByIdAndUpdate(id: string, updateData: any, options?: any): any {
        let selectFields = '';
        const run = async () => {
            const user = await User.findById(id);
            if (!user) return null;

            if (updateData.username !== undefined) user.username = updateData.username;
            if (updateData.password !== undefined) user.password = updateData.password;
            if (updateData.fullName !== undefined) user.fullName = updateData.fullName;
            if (updateData.email !== undefined) user.email = updateData.email;
            if (updateData.kelas !== undefined) user.kelas = updateData.kelas;
            if (updateData.schoolName !== undefined) user.schoolName = updateData.schoolName;
            if (updateData.photoUrl !== undefined) user.photoUrl = updateData.photoUrl;
            if (updateData.levels !== undefined) {
                const raw = updateData.levels;
                user.levels = raw instanceof Map ? raw : new Map(Object.entries(raw || {}));
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
        const db = getD1();
        if (db) {
            await db.prepare('DELETE FROM users WHERE id = ?').bind(id).run();
        }
        for (const [k, v] of memoryStore.entries()) {
            if (v.id === id) {
                memoryStore.delete(k);
                break;
            }
        }
        return true;
    }
}

export default User;
