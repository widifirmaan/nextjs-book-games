# BukuMedia — School Games

> Interactive gamified educational platform and teacher gradebook built with Next.js 14, React 18, and MongoDB.

BukuMedia School Games is an educational web application built with Next.js 14 (App Router) and MongoDB, migrated from a legacy Java desktop client. It includes 30 interactive mini-game levels (word search, canvas drawing, memory card matching, color association), a gamified student progress map, and a teacher portal for student gradebook tracking and Excel export.

[![Live Demo](https://img.shields.io/badge/Demo-bukudigitalamal.vercel.app-10B981?style=flat-square&logo=vercel&logoColor=white)](https://bukudigitalamal.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![React 18](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB_Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![NextAuth.js](https://img.shields.io/badge/Auth-NextAuth.js_v4-blueviolet?style=flat-square)](https://next-auth.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3.3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## Live Production

- **URL:** [https://bukudigitalamal.vercel.app/](https://bukudigitalamal.vercel.app/)
- **Deployment:** Vercel Edge Platform
- **Database:** MongoDB Atlas via Mongoose ORM

---

## Showcase

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **School Games Portal Home Desktop**<br>![School Games Portal Desktop](screenshots/School%20Games%20Portal%20Desktop.png) | **School Games Portal Home Mobile**<br>![School Games Portal Mobile](screenshots/School%20Games%20Portal%20Mobile.png) |
| **Interactive Word Search Arena Desktop**<br>![Word Search Arena Desktop](screenshots/Word%20Search%20Game%20Arena%20Desktop.png) | **Interactive Word Search Arena Mobile**<br>![Word Search Arena Mobile](screenshots/Word%20Search%20Game%20Arena%20Mobile.png) |
| **Drawing & Sketching Activity Desktop**<br>![Drawing Activity Desktop](screenshots/Drawing%20Canvas%20Activity%20Desktop.png) | **Drawing & Sketching Activity Mobile**<br>![Drawing Activity Mobile](screenshots/Drawing%20Canvas%20Activity%20Mobile.png) |
| **Unified Role Auth Portal Desktop**<br>![Auth Portal Desktop](screenshots/Unified%20Role%20Auth%20Portal%20Desktop.png) | **Unified Role Auth Portal Mobile**<br>![Auth Portal Mobile](screenshots/Unified%20Role%20Auth%20Portal%20Mobile.png) |
| **Interactive Project Showcase Desktop**<br>![Project Showcase Desktop](screenshots/Interactive%20Project%20Showcase%20Desktop.png) | **Interactive Project Showcase Mobile**<br>![Project Showcase Mobile](screenshots/Interactive%20Project%20Showcase%20Mobile.png) |

---

## Features

- **30 Modular Mini-Game Levels (`/level/[id]`)**: Educational activities across 30 levels including Word Search matrices, HTML5 Canvas drawing, Memory Card matching, Ice Cream color/object pairing, and logic questions.
- **Student Adventure Progression Map (`/dashboard/siswa`)**: Level-by-level progression map with task completion tracking, star ratings, and badge rewards.
- **Teacher Gradebook & Analytics (`/dashboard/guru`)**: Educator dashboard displaying student engagement, completion times, class scores, and 1-click Excel export via SheetJS (`.xlsx`).
- **Unified Role-Based Authentication (`/login`)**: Credential authentication via NextAuth.js separating Teacher (`GURU`) administrative rights from Student (`SISWA`) gameplay sessions.
- **Full-Stack REST Architecture**: Modular endpoints (`/api/levels/submit`, `/api/users`, `/api/seed`, `/api/awards/clear`) backed by Mongoose schemas with atomic score updates.
- **Automated Database Seeder (`/api/seed`)**: Pre-configured bootstrap endpoint seeding demo teacher (`guru` / `password`) and student (`siswa` / `password`) test accounts.
- **Legacy Desktop to Web Modernization**: Web implementation preserving the curriculum and gameplay mechanics of the original Java Swing desktop client (`legacy-java/`).

---

## Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | Next.js `14.2.35`, React `18` | App Router, Server Components, and API Route backend endpoints |
| **Database & ORM** | MongoDB `7.0`, Mongoose `8.0` | Cloud document database and typed schema definitions for Users and Levels |
| **Authentication** | NextAuth.js `4.24.5` | Role-based credential session handling and route middleware protection |
| **Spreadsheet Engine** | SheetJS (xlsx) `0.18.5` | Client and server-side grade report compilation and XLSX binary export |
| **Styling & UI** | Tailwind CSS `3.3.0` | Accessible kid-friendly color palettes and responsive grid layouts |

---

## Project Structure

```bash
/
├── app/
│   ├── level/[id]/          # Dynamic educational game routes (Levels 1-30)
│   ├── dashboard/
│   │   ├── guru/            # Teacher analytics and student score tracking
│   │   └── siswa/           # Student level progression adventure map
│   ├── login/               # Unified role authentication portal
│   ├── portfolio/           # Interactive showcase and curriculum overview
│   ├── api/                 # NextAuth, level scoring, and seed endpoints
│   ├── components/          # 30 individual LevelGame React components
│   └── page.tsx             # Public landing portal
├── lib/                     # Database connection and Mongoose models
├── legacy-java/             # Original Java Swing desktop application source
├── screenshots/             # MacBook Pro M4 & iPhone 16 Pro showcase mockups
└── README.md
```

---

## Getting Started & Local Development

### Prerequisites

- **Node.js**: Version 18.17.0 or higher
- **MongoDB**: Local MongoDB instance or MongoDB Atlas connection URI

### Installation & Setup

> **Environment Variables:** Configure `MONGODB_URI` in `.env.local` before launching the application. Copy `.env.example` as a template:
> ```env
> MONGODB_URI=your_mongodb_connection_string
> NEXTAUTH_SECRET=your_nextauth_secret_key
> NEXTAUTH_URL=http://localhost:3000
> ```

```bash
# 1. Clone the repository
git clone https://github.com/widifirmaan/nextjs-school-games.git
cd nextjs-school-games

# 2. Install project dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local

# 4. Start local Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser. A seed endpoint is available at `/api/seed` to populate default accounts:

| Role | Username | Password |
| :--- | :--- | :--- |
| **Teacher (`GURU`)** | `guru` | `password` |
| **Student (`SISWA`)** | `siswa` | `password` |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
