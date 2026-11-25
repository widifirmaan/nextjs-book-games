-- SQLite Database Schema for Book Games

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

-- Default Demo Seeder Data
INSERT OR IGNORE INTO users (id, username, password, role, fullName, email, schoolName, photoUrl)
VALUES ('guru-1', 'guru', '$2a$10$xz4xlJZX/iBvXYQbo9ouC.cM5Odxl.GdPAZgETRYCewnpJunPOGYW', 'GURU', 'Budi Guru', 'guru@sekolah.id', 'SMA Negeri 1', 'https://i.pravatar.cc/150?u=guru');

INSERT OR IGNORE INTO users (id, username, password, role, fullName, email, kelas, schoolName, photoUrl, levels)
VALUES ('siswa-1', 'siswa', '$2a$10$xz4xlJZX/iBvXYQbo9ouC.cM5Odxl.GdPAZgETRYCewnpJunPOGYW', 'SISWA', 'Ani Siswa', 'siswa@sekolah.id', 'XII-A', 'SMA Negeri 1', 'https://i.pravatar.cc/150?u=siswa', '{"level1":"{\"Siapakah_presiden_pertama_Indonesia?\":\"Soekarno\",\"Apa_warna_bendera_Indonesia?\":\"Merah Putih\",\"status\":\"completed\",\"stars\":3}"}');
