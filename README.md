# Book Games

> Platform pembelajaran interaktif berbasis gamifikasi dan buku nilai guru dengan 30 level mini-game refleksi psikologis anak.

[![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![React 18](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![SQLite](https://img.shields.io/badge/Database-SQLite_3-003B57?style=flat-square&logo=sqlite&logoColor=white)](https://sqlite.org/)
[![NextAuth.js](https://img.shields.io/badge/Auth-NextAuth.js_v4-blueviolet?style=flat-square)](https://next-auth.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3.3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Live Demo](https://img.shields.io/badge/Demo-book--games.widifirmaan.web.id-10B981?style=flat-square)](https://book-games.widifirmaan.web.id)

---

## Live URL

- **Production URL**: [https://book-games.widifirmaan.web.id](https://book-games.widifirmaan.web.id)

---

## Screenshot

| Desktop | Mobile |
| :---: | :---: |
| **Portal Beranda Utama**<br>![Beranda](screenshots/Beranda%20Desktop.png) | **Portal Beranda Utama**<br>![Beranda](screenshots/Beranda%20Mobile.png) |
| **Autentikasi Login Peran Terpadu**<br>![Login](screenshots/Login%20Desktop.png) | **Autentikasi Login Peran Terpadu**<br>![Login](screenshots/Login%20Mobile.png) |
| **Peta Petualangan Siswa (Adventure Map)**<br>![Petualangan Siswa](screenshots/Petualangan%20Siswa%20Desktop.png) | **Peta Petualangan Siswa (Adventure Map)**<br>![Petualangan Siswa](screenshots/Petualangan%20Siswa%20Mobile.png) |
| **Buku Nilai Guru & Rekapitulasi Kelas**<br>![Dashboard Guru](screenshots/Dashboard%20Guru%20Desktop.png) | **Buku Nilai Guru & Rekapitulasi Kelas**<br>![Dashboard Guru](screenshots/Dashboard%20Guru%20Mobile.png) |
| **Level 1: Matriks Word Search**<br>![Level 1 Word Search](screenshots/Level%201%20Word%20Search%20Desktop.png) | **Level 1: Matriks Word Search**<br>![Level 1 Word Search](screenshots/Level%201%20Word%20Search%20Mobile.png) |
| **Level 2: Sketsa Wajah Ekspresi**<br>![Level 2 Gambar](screenshots/Level%202%20Gambar%20Desktop.png) | **Level 2: Sketsa Wajah Ekspresi**<br>![Level 2 Gambar](screenshots/Level%202%20Gambar%20Mobile.png) |
| **Level 3: Balon Harapan Interaktif**<br>![Level 3 Balon Harapan](screenshots/Level%203%20Balon%20Harapan%20Desktop.png) | **Level 3: Balon Harapan Interaktif**<br>![Level 3 Balon Harapan](screenshots/Level%203%20Balon%20Harapan%20Mobile.png) |
| **Level 8: Ramuan Anxiety Elixir**<br>![Level 8 Anxiety Elixir](screenshots/Level%208%20Anxiety%20Elixir%20Desktop.png) | **Level 8: Ramuan Anxiety Elixir**<br>![Level 8 Anxiety Elixir](screenshots/Level%208%20Anxiety%20Elixir%20Mobile.png) |
| **Level 10: Kanvas Gambar Ekspresi Bebas**<br>![Level 10 Canvas](screenshots/Level%2010%20Canvas%20Desktop.png) | **Level 10: Kanvas Gambar Ekspresi Bebas**<br>![Level 10 Canvas](screenshots/Level%2010%20Canvas%20Mobile.png) |
| **Level 13: Daun Pohon Harapan**<br>![Level 13 Pohon Harapan](screenshots/Level%2013%20Pohon%20Harapan%20Desktop.png) | **Level 13: Daun Pohon Harapan**<br>![Level 13 Pohon Harapan](screenshots/Level%2013%20Pohon%20Harapan%20Mobile.png) |
| **Level 25: Eksplorasi Minat & Bakat Diri**<br>![Level 25 Eksplorasi Diri](screenshots/Level%2025%20Eksplorasi%20Diri%20Desktop.png) | **Level 25: Eksplorasi Minat & Bakat Diri**<br>![Level 25 Eksplorasi Diri](screenshots/Level%2025%20Eksplorasi%20Diri%20Mobile.png) |
| **Level 30: Es Krim Scoop of Hope**<br>![Level 30 Scoop of Hope](screenshots/Level%2030%20Scoop%20of%20Hope%20Desktop.png) | **Level 30: Es Krim Scoop of Hope**<br>![Level 30 Scoop of Hope](screenshots/Level%2030%20Scoop%20of%20Hope%20Mobile.png) |
| **Portofolio Ringkasan Kurikulum**<br>![Portofolio Kurikulum](screenshots/Portofolio%20Kurikulum%20Desktop.png) | **Portofolio Ringkasan Kurikulum**<br>![Portofolio Kurikulum](screenshots/Portofolio%20Kurikulum%20Mobile.png) |

---

## Fitur

- **30 Level Aktivitas Refleksi Gamifikasi (`app/level/[id]/page.tsx`)**: Aktivitas pembelajaran yang terbagi ke dalam 5 dimensi *Psychological Well-Being* (PWB):
  - **Dimensi 1: Self Acceptance (Level 1–7)**: Pencarian kata karakter diri (`Level1WordSearch.tsx`), kanvas gambar ekspresi emosi (`Level2Drawing.tsx`), pelepasan balon harapan (`Level3Games.tsx`), cermin refleksi, dan kotak penerimaan diri.
  - **Dimensi 2: Environmental Mastery (Level 8–12)**: Peracikan ramuan penenang kecemasan (`Level8Games.tsx`), lingkaran pengaruh, kanvas gambar bebas (`Level10Drawing.tsx`), pemutar musik relaksasi, dan penilaian kondisi emosi harian.
  - **Dimensi 3: Personal Growth (Level 13–24)**: Penanaman daun harapan pada pohon cita-cita (`Level13Games.tsx`), penulisan impian terbesar, imajinasi awan, catatan tempel resolusi, dan 7 tangga tahapan perubahan bertahap (`Level18Games.tsx` s/d `Level24Games.tsx`).
  - **Dimensi 4: Purpose in Life (Level 25–29)**: Kuisioner eksplorasi potensi diri, roda waktu 3 era (Dahulu, Sekarang, Esok), peta harta karun rasa syukur, kompas penentu arah tujuan hidup, dan surat untuk diri di masa depan.
  - **Dimensi 5: Positive Relations (Level 30)**: Penyusunan sendok es krim harapan multi-rasa (`Level30IceCream.tsx`) yang mewakili doa untuk orang tua, sahabat, dan lingkungan sekitar.
- **Peta Petualangan Siswa (`app/dashboard/siswa/page.tsx`)**: Dashboard visual bertahap dengan penanda level aktif, penggembokan level berikutnya sebelum level prasyarat terselesaikan, serta pembagian lencana pencapaian (*achievement badges*).
- **Buku Nilai Guru & Ekspor Excel (`app/dashboard/guru/page.tsx`)**: Portal pemantauan bagi pendidik dengan filter berdasarkan sekolah dan rombongan belajar (kelas), matriks centang penyelesaian tugas siswa pada 30 level, inspeksi jawaban refleksi, dan tombol ekspor langsung ke spreadsheet Excel (`.xlsx`) via SheetJS.
- **Autentikasi Multi-Peran Terpadu (`app/login/page.tsx`)**: Manajemen sesi login berbasis NextAuth.js yang memisahkan akses Guru (`GURU`) dan Siswa (`SISWA`).
- **Basis Data Relasional SQLite (`schema.sql`)**: Penyimpanan progres siswa, status submission jawaban, durasi pengerjaan, dan riwayat perolehan badge menggunakan format JSON terstruktur di dalam tabel `users`.
- **Kanvas Gambar HTML5 Interaktif**: Fitur melukis bebas dengan pengaturan palet warna, ukuran kuas, tombol undo, dan ekspor data URL base64 ke penyimpanan database.

---

## Tech Stack

| Kategori | Teknologi | Deskripsi / Peran |
| :--- | :--- | :--- |
| **Framework Utama** | Next.js `14.2.35` (App Router), React `18.2.0` | Server Components, routing modular, dan API Routes backend |
| **Basis Data** | SQLite 3 | Relasional database lokal untuk akun, status level, dan jawaban refleksi |
| **Autentikasi** | NextAuth.js `4.24.5` | Manajemen sesi login berbasis kredensial role GURU / SISWA |
| **Ekspor Data** | SheetJS (xlsx) `0.18.5` | Kompilasi data tabel buku nilai ke file spreadsheet binary `.xlsx` |
| **Styling** | Tailwind CSS `3.3.0` | Desain antarmuka ceria ramah anak dengan palet warna cerah |
| **Type System** | TypeScript `5.0` | Pengetikan statis komponen level dan payload response |

---

## Database Architecture

Book Games menyimpan profil, progres permainan, dan rekap nilai dalam tabel relasional SQLite (`schema.sql`):

```sql
CREATE TABLE users (
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
    levels TEXT DEFAULT '{}',               -- JSON peta penyelesaian level
    indukStartTimes TEXT DEFAULT '{}',      -- Waktu mulai sesi
    indukEndTimes TEXT DEFAULT '{}',        -- Waktu selesai sesi
    dailySubmissions TEXT DEFAULT '{}',     -- Catatan tugas harian
    awards TEXT DEFAULT '[]',               -- Daftar ID lencana pencapaian
    newAwardsToNotify TEXT DEFAULT '[]',    -- Antrean notifikasi badge baru
    createdAt TEXT DEFAULT (datetime('now')),
    updatedAt TEXT DEFAULT (datetime('now'))
);

CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_username ON users(username);
```

---

## Panduan Setup & Menjalankan Lokal

### 1. Prasyarat Sistem

- **Node.js**: Versi `18.17.0` atau lebih tinggi (`20.x` direkomendasikan)
- **npm** atau **pnpm**
- **SQLite 3**: Native CLI (`sqlite3`)

### 2. Environment Variables

Buat file `.env.local` pada direktori root proyek:

```env
NEXTAUTH_SECRET=super_secret_local_dev_key_12345
NEXTAUTH_URL=http://localhost:3000
```

### 3. Instalasi Dependensi

```bash
# Clone repository
git clone https://github.com/widifirmaan/nextjs-book-games.git
cd nextjs-book-games

# Install package
npm install
```

### 4. Setup Database & Seeder Lokal

Inisialisasi tabel dan akun demo seeder ke database SQLite lokal:

```bash
# Inisialisasi skema dan data awal
sqlite3 local.db < schema.sql

# Atau via npm script
npm run db:setup
```

#### Akun Pengguna Bawaan (Seeder):
- **Akun Guru**: Username `guru` / Password `password` (Akses buku nilai, tabel rekap, dan unduh Excel)
- **Akun Siswa**: Username `siswa` / Password `password` (Akses peta petualangan 30 level mini-game)

### 5. Menjalankan Server Lokal

```bash
# Jalankan server Next.js lokal
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### 6. Panduan Uji Manual (Testing Checklist)

| No | Fitur | Langkah Pengujian | Hasil yang Diharapkan |
| :---: | :--- | :--- | :--- |
| 1 | **Login Guru** | Buka `/login`, login dengan akun `guru` / `password` | Masuk ke dashboard guru (`/dashboard/guru`) |
| 2 | **Unduh Excel** | Di dashboard guru, klik tombol *Export Excel* | File spreadsheet rekap nilai `.xlsx` berhasil diunduh via SheetJS |
| 3 | **Login Siswa** | Logout, login dengan `siswa` / `password` | Masuk ke peta petualangan siswa (`/dashboard/siswa`) |
| 4 | **Game Level 1** | Buka `/level/1` | Permainan Word Search termuat interaktif, huruf dapat di-drag dan kata tersorot |
| 5 | **Kanvas Gambar Level 2** | Buka `/level/2` | Kanvas HTML5 dapat dicoret menggunakan mouse/touch, palet warna berganti, dan tombol submit berfungsi |
| 6 | **Portofolio** | Buka `/portfolio` | Halaman etalase kurikulum 30 modul aktivitas refleksi tampil lengkap |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
