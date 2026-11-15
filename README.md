# BukuMedia — School Games

> Interactive gamified educational platform and teacher gradebook built with Next.js 14, React 18, and MongoDB.

BukuMedia School Games is a full-stack educational web application designed for interactive classroom learning. Migrated and upgraded from a legacy Java desktop app to modern Next.js 14 (App Router) and MongoDB, it provides 30 distinct interactive mini-game levels (Word Search, Canvas Drawing, Memory Cards, Pattern Matching, Logic Puzzles), a student adventure map with level unlocks, and a dedicated teacher administration portal for student score tracking and XLSX grade exports.

[![Live Demo](https://img.shields.io/badge/Demo-bukudigitalamal.vercel.app-10B981?style=flat-square&logo=vercel&logoColor=white)](https://bukudigitalamal.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![React 18](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB_Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![NextAuth.js](https://img.shields.io/badge/Auth-NextAuth.js_v4-blueviolet?style=flat-square)](https://next-auth.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3.3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

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

## Core Features

- **30 Progressive Game Levels (`/level/[id]`)**: Interactive educational puzzles including Word Search grids, Canvas coloring & sketching, Memory matching, and Math logic challenges.
- **Student Progress Map (`/dashboard/siswa`)**: Sequential level-unlock progression tree where students earn stars and unlock higher tiers as they complete challenges.
- **Teacher Analytics & Gradebook (`/dashboard/guru`)**: Comprehensive dashboard for educators to monitor student scores, level completion times, and export report cards to Microsoft Excel (`.xlsx`).
- **Role-Based Authentication (`/login`)**: NextAuth.js credential provider distinguishing between Teacher (`GURU`) and Student (`SISWA`) roles with session management.
- **Full-Stack Next.js 14 Architecture**: API Routes (`/api/levels`, `/api/users`, `/api/awards`) backed by Mongoose schemas with atomic score updating.
- **Legacy Java Modernization**: Preserves the curriculum and gameplay mechanics of the original Java Swing desktop client (`legacy-java/`) rebuilt as a web application.

---

## Tech Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | Next.js `14.2.35` | App Router, Server Actions, and API Route endpoints |
| **UI Library** | React `18` | Functional components with stateful interactive mini-games |
| **Database** | MongoDB `7.0` | Cloud document database for user profiles and level scores |
| **ORM** | Mongoose `8.0` | Schema models for Users, Levels, Awards, and Transactions |
| **Authentication** | NextAuth.js `4.24.5` | Role-based JWT session authentication |
| **Export Engine** | SheetJS (xlsx) `0.18.5` | Client and server-side grade report generation |
| **Styling** | Tailwind CSS `3.3.0` | Vibrant, kid-friendly palette and responsive grid layouts |

---

## Project Structure

```text
nextjs-school-games/
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
├── raw_screenshots/         # High-resolution production screen captures
└── screenshots/             # MacBook Pro M4 & iPhone 16 Pro showcase mockups
```

---

## Getting Started & Local Development

### Prerequisites

- **Node.js**: Version 18.17.0 or higher
- **MongoDB**: Local MongoDB instance or MongoDB Atlas connection URI

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/widifirmaan/nextjs-school-games.git
   cd nextjs-school-games
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local` and set your MongoDB URI and NextAuth Secret:
   ```env
   MONGODB_URI=mongodb://localhost:27017/school_games
   NEXTAUTH_SECRET=your-random-secret-key
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run local dev server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## License

This project is licensed under the [MIT License](LICENSE).
