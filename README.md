# BukuMedia — School Games

> Interactive gamified educational platform and teacher gradebook built with Next.js 14, React 18, and MongoDB.

BukuMedia School Games is an educational web application built with Next.js 14 (App Router) and MongoDB, migrated from a legacy Java desktop client. Deployed on Cloudflare Workers with OpenNext, it features 30 interactive mini-game levels across 5 psychological well-being dimensions, a student adventure progress map with achievement badges, and a teacher portal for student gradebook tracking and Excel export.

[![Live Demo](https://img.shields.io/badge/Demo-book--games.widifirmaan.web.id-10B981?style=flat-square&logo=cloudflare&logoColor=white)](https://book-games.widifirmaan.web.id)
[![Deployment](https://img.shields.io/badge/Deployment-Cloudflare_Workers-F38020?style=flat-square&logo=cloudflare)](https://book-games.widifirmaan.web.id)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![React 18](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB_Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![NextAuth.js](https://img.shields.io/badge/Auth-NextAuth.js_v4-blueviolet?style=flat-square)](https://next-auth.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3.3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## Live Production

- **URL:** [https://book-games.widifirmaan.web.id](https://book-games.widifirmaan.web.id)
- **Deployment:** Cloudflare Workers with OpenNext (`@opennextjs/cloudflare`) & Edge Asset Routing
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

- **30 Gamified Reflection Levels (`/level/[id]`)**: Educational activities across 5 psychological dimensions—Self Acceptance, Environmental, Personal Growth, Purpose in Life, and Positive Relations—including Word Search grids, HTML5 Canvas freehand sketching, emotion face drawing, anxiety elixir mixing, and goal compasses.
- **Student Adventure Progression Map (`/dashboard/siswa`)**: Sequential level unlock journey dynamically displaying completed chapters, active levels, and unlocked achievement badges (`CHAPTER_1_COMPLETE` through `CHAPTER_5_COMPLETE`, and `CONSISTENT_WORKER` 7-day streaks).
- **Teacher Gradebook & Analytics (`/dashboard/guru`)**: Central educator management portal with school and class filtering, student progress tables, detailed level submission inspection, and 1-click Excel spreadsheet export via SheetJS (`.xlsx`).
- **Unified Role-Based Authentication (`/login`)**: Secure credential authentication via NextAuth.js separating Teacher (`GURU`) administrative rights from Student (`SISWA`) gameplay sessions.
- **Full-Stack REST Architecture**: Modular endpoints (`/api/levels/submit`, `/api/levels/[id]`, `/api/users`, `/api/users/[id]`, `/api/seed`, `/api/awards/clear`) backed by Mongoose with serialized level response maps.
- **Automated Database Seeder (`/api/seed`)**: Bootstrap endpoint initializing demo teacher (`guru` / `password`) and student (`siswa` / `password`) accounts with default school profiles.
- **Legacy Desktop to Web Modernization**: Faithful web reimplementation preserving the curriculum, game logic, and asset structure of the legacy Java Swing desktop client (`legacy-java/`).

---

## Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | Next.js `14.2.35`, React `18.2.0` | App Router, Server Components, and API Route backend endpoints |
| **Database & ORM** | MongoDB `7.0`, Mongoose `8.0` | Document database with User schema definition and dynamic level progress mappings |
| **Authentication** | NextAuth.js `4.24.5` | Role-based credential session handling and route protection |
| **Spreadsheet Engine** | SheetJS (xlsx) `0.18.5` | Client-side grade report compilation and XLSX binary export |
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
│   ├── api/                 # NextAuth, level scoring, user management, and seed endpoints
│   ├── components/          # 30 individual LevelGame React components
│   └── page.tsx             # Public landing portal
├── lib/                     # Database connection, Mongoose models, and game curriculum data
├── legacy-java/             # Original Java Swing desktop application source
├── open-next.config.ts      # OpenNext Cloudflare adapter build configuration
├── wrangler.jsonc           # Cloudflare Workers configuration with custom domain routing
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

# 5. Build for Cloudflare Workers (optional)
npm run build:worker
```

Open [http://localhost:3000](http://localhost:3000) in your web browser. A seed endpoint is available at `/api/seed` to populate default accounts:

| Role | Username | Password |
| :--- | :--- | :--- |
| **Teacher (`GURU`)** | `guru` | `password` |
| **Student (`SISWA`)** | `siswa` | `password` |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
