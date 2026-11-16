-- Cloudflare D1 Database Schema for BukuMedia School Games

CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('GURU', 'SISWA')),
    fullName TEXT,
    email TEXT,
    kelas TEXT,
    schoolName TEXT,
    photoUrl TEXT,
    level INTEGER DEFAULT 1,
    levels TEXT DEFAULT '{}',
    indukStartTimes TEXT DEFAULT '{}',
    indukEndTimes TEXT DEFAULT '{}',
    dailySubmissions TEXT DEFAULT '{}',
    awards TEXT DEFAULT '[]',
    newAwardsToNotify TEXT DEFAULT '[]',
    createdAt TEXT DEFAULT (datetime('now')),
    updatedAt TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
