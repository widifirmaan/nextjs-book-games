# Book Games - Counseling Gamification Platform

Interactive student counseling web application and teacher management portal built with Next.js App Router, TypeScript, Tailwind CSS, NextAuth.js, and SQLite/LibSQL.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-LibSQL-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

Book Games organizes 30 reflection and self-development activities into sequential game levels across five psychological well-being dimensions for high school students (`SMA Negeri 1`). Teachers track student submissions, reset answers, manage accounts, and export reports to Excel, backed locally by SQLite (`local.db`) with optional remote LibSQL/Turso support.

## Live URL

- **URL:** [https://book-games.widifirmaan.web.id](https://book-games.widifirmaan.web.id)

## Features

- **Role-Based Authentication (`/login`, `/dashboard`):** Credential login using NextAuth.js JWT sessions and `bcryptjs` hashing, routing `GURU` accounts to `/dashboard/guru` (enforced server-side) and `SISWA` accounts to `/dashboard/siswa`.
- **30-Level Counseling Journey (`/level/[id]`):** Sequential level unlocking grouped across five chapters (`SELF ACCEPTANCE`, `ENVIRONMENTAL`, `PERSONAL GROWTH`, `PURPOSE IN LIFE`, and `POSITIVE RELATIONS`), including interactive word search (`Level 1`), scalable SVG `<path>` drawing pads (`Level 2` and `Level 10`), guided reflections, playlist prompts (`Level 11`), and goal-setting activities (`Level 30`).
- **Progress Tracking and Award Notifications (`/api/levels/submit`, `/api/awards/clear`):** Persists per-level JSON answers in SQLite, tracks chapter completion timing (`FAST_WORKER_INDUK_*` under 15 minutes) and 7-day submission streaks (`CONSISTENT_WORKER`), and delivers dismissable award notifications on the student dashboard.
- **Teacher Management Portal (`/dashboard/guru`, `/api/users`):** Full student CRUD operations, filtering by school, class (`kelas`), and student name, per-level response inspection and answer reset, plus `.xlsx` spreadsheet export via SheetJS (`xlsx`).
- **Idempotent Database Seeding (`npm run db:setup`, `/api/seed`):** Initializes the `users` schema and seeds demo `guru` and `siswa` accounts with starter Level 1 completion data.

## Tech Stack

- **Framework:** Next.js 14 (App Router), React 18, TypeScript 5
- **Styling:** Tailwind CSS 3 (`Nunito` and `Fredoka` typography)
- **Authentication:** NextAuth.js 4 (`CredentialsProvider`, JWT sessions), `bcryptjs`
- **Spreadsheet Export:** SheetJS (`xlsx`)
- **Database:** SQLite / LibSQL (`@libsql/client`)

## Screenshots

| Desktop | Mobile |
| :---: | :---: |
| ![Beranda Desktop](screenshots/Beranda%20Desktop.png) | ![Beranda Mobile](screenshots/Beranda%20Mobile.png) |
| ![Login Desktop](screenshots/Login%20Desktop.png) | ![Login Mobile](screenshots/Login%20Mobile.png) |
| ![Student Map Desktop](screenshots/Petualangan%20Siswa%20Desktop.png) | ![Student Map Mobile](screenshots/Petualangan%20Siswa%20Mobile.png) |
| ![Logout Modal Desktop](screenshots/Petualangan%20Siswa%20Modal%20Logout%20Desktop.png) | ![Logout Modal Mobile](screenshots/Petualangan%20Siswa%20Modal%20Logout%20Mobile.png) |
| ![Level 1 Word Search Desktop](screenshots/Level%201%20Word%20Search%20Desktop.png) | ![Level 1 Word Search Mobile](screenshots/Level%201%20Word%20Search%20Mobile.png) |
| ![Level 2 Drawing Desktop](screenshots/Level%202%20Gambar%20Desktop.png) | ![Level 2 Drawing Mobile](screenshots/Level%202%20Gambar%20Mobile.png) |
| ![Level 10 Drawing Desktop](screenshots/Level%2010%20Canvas%20Desktop.png) | ![Level 10 Drawing Mobile](screenshots/Level%2010%20Canvas%20Mobile.png) |
| ![Level 11 Soundtrack Desktop](screenshots/Level%2011%20Soundtrack%20Musik%20Desktop.png) | ![Level 11 Soundtrack Mobile](screenshots/Level%2011%20Soundtrack%20Musik%20Mobile.png) |
| ![Level 30 Scoop of Hope Desktop](screenshots/Level%2030%20Scoop%20of%20Hope%20Desktop.png) | ![Level 30 Scoop of Hope Mobile](screenshots/Level%2030%20Scoop%20of%20Hope%20Mobile.png) |
| ![Guru Dashboard Desktop](screenshots/Dashboard%20Guru%20Desktop.png) | ![Guru Dashboard Mobile](screenshots/Dashboard%20Guru%20Mobile.png) |
| ![Add Student Modal Desktop](screenshots/Dashboard%20Guru%20Modal%20Add%20Student%20Desktop.png) | ![Add Student Modal Mobile](screenshots/Dashboard%20Guru%20Modal%20Add%20Student%20Mobile.png) |
| ![Level Detail Modal Desktop](screenshots/Dashboard%20Guru%20Modal%20Level%20Detail%20Desktop.png) | ![Level Detail Modal Mobile](screenshots/Dashboard%20Guru%20Modal%20Level%20Detail%20Mobile.png) |

## Local Setup

### Prerequisites

- Node.js 18+ (tested with Node.js 26)
- npm

### Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update `NEXTAUTH_SECRET` in `.env.local` if desired. Leave `TURSO_DATABASE_URL` commented out to use `local.db`.

3. **Initialize and seed the local SQLite database**

   ```bash
   npm run db:setup
   ```

   To wipe and recreate `local.db` from `schema.sql`:

   ```bash
   npm run db:reset
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open the application**

   Visit `http://localhost:3000` (and sign in at `/login`).

### Demo Credentials

| Role | Username | Password |
| :--- | :--- | :--- |
| Teacher (`GURU`) | `guru` | `password` |
| Student (`SISWA`) | `siswa` | `password` |

## Author

**Widi Firmansyah** · [widifirmaan.web.id](https://widifirmaan.web.id)
