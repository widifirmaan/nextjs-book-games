# Book Games

> Interactive gamified educational platform and teacher gradebook built with Next.js 14 and React 18.

Book Games is an educational web application built with Next.js 14 (App Router) and Cloudflare D1 (Serverless SQLite), migrated from a legacy Java desktop client. Deployed on Cloudflare Workers with OpenNext, it features 30 interactive mini-game levels across 5 psychological well-being dimensions, a student adventure progress map with achievement badges, and a teacher portal for student gradebook tracking and Excel export.

[![Live Demo](https://img.shields.io/badge/Demo-book--games.widifirmaan.web.id-10B981?style=flat-square&logo=cloudflare&logoColor=white)](https://book-games.widifirmaan.web.id)
[![Deployment](https://img.shields.io/badge/Deployment-Cloudflare_Workers-F38020?style=flat-square&logo=cloudflare)](https://book-games.widifirmaan.web.id)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![React 18](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Cloudflare D1](https://img.shields.io/badge/Database-Cloudflare_D1-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://developers.cloudflare.com/d1/)
[![NextAuth.js](https://img.shields.io/badge/Auth-NextAuth.js_v4-blueviolet?style=flat-square)](https://next-auth.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3.3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## Live Production

- **URL:** [https://book-games.widifirmaan.web.id](https://book-games.widifirmaan.web.id)
- **Platform:** Cloudflare Workers with OpenNext (`@opennextjs/cloudflare`)
- **Database:** Cloudflare D1 Serverless SQL (`school-games-db`)

---

## Showcase

### Core Platform & Portals

| Desktop (MacBook Pro M4) | Mobile (iPhone 16 Pro) |
| :---: | :---: |
| **Book Games Portal Home Desktop**<br>![Book Games Portal Home Desktop](screenshots/Book%20Games%20Portal%20Home%20Desktop.png) | **Book Games Portal Home Mobile**<br>![Book Games Portal Home Mobile](screenshots/Book%20Games%20Portal%20Home%20Mobile.png) |
| **Unified Role Auth Portal Desktop**<br>![Unified Role Auth Portal Desktop](screenshots/Unified%20Role%20Auth%20Portal%20Desktop.png) | **Unified Role Auth Portal Mobile**<br>![Unified Role Auth Portal Mobile](screenshots/Unified%20Role%20Auth%20Portal%20Mobile.png) |
| **Student Adventure Map Desktop**<br>![Student Adventure Map Desktop](screenshots/Student%20Adventure%20Map%20Desktop.png) | **Student Adventure Map Mobile**<br>![Student Adventure Map Mobile](screenshots/Student%20Adventure%20Map%20Mobile.png) |
| **Teacher Gradebook Analytics Desktop**<br>![Teacher Gradebook Analytics Desktop](screenshots/Teacher%20Gradebook%20Analytics%20Desktop.png) | **Teacher Gradebook Analytics Mobile**<br>![Teacher Gradebook Analytics Mobile](screenshots/Teacher%20Gradebook%20Analytics%20Mobile.png) |

### Dimension 1: Self Acceptance (Levels 1 – 7)

| Desktop (MacBook Pro M4) | Mobile (iPhone 16 Pro) |
| :---: | :---: |
| **Level 1: Word Search Arena Desktop**<br>![Level 1 Word Search Arena Desktop](screenshots/Level%201%20Word%20Search%20Arena%20Desktop.png) | **Level 1: Word Search Arena Mobile**<br>![Level 1 Word Search Arena Mobile](screenshots/Level%201%20Word%20Search%20Arena%20Mobile.png) |
| **Level 2: Gambar Ekspresi Desktop**<br>![Level 2 Gambar Ekspresi Desktop](screenshots/Level%202%20Gambar%20Ekspresi%20Desktop.png) | **Level 2: Gambar Ekspresi Mobile**<br>![Level 2 Gambar Ekspresi Mobile](screenshots/Level%202%20Gambar%20Ekspresi%20Mobile.png) |
| **Level 3: Balon Harapan Desktop**<br>![Level 3 Balon Harapan Desktop](screenshots/Level%203%20Balon%20Harapan%20Desktop.png) | **Level 3: Balon Harapan Mobile**<br>![Level 3 Balon Harapan Mobile](screenshots/Level%203%20Balon%20Harapan%20Mobile.png) |
| **Level 4: Refleksi Diri Desktop**<br>![Level 4 Refleksi Diri Desktop](screenshots/Level%204%20Refleksi%20Diri%20Desktop.png) | **Level 4: Refleksi Diri Mobile**<br>![Level 4 Refleksi Diri Mobile](screenshots/Level%204%20Refleksi%20Diri%20Mobile.png) |
| **Level 5: Rings Desktop**<br>![Level 5 Rings Desktop](screenshots/Level%205%20Rings%20Desktop.png) | **Level 5: Rings Mobile**<br>![Level 5 Rings Mobile](screenshots/Level%205%20Rings%20Mobile.png) |
| **Level 6: Refleksi Cermin Desktop**<br>![Level 6 Refleksi Cermin Desktop](screenshots/Level%206%20Refleksi%20Cermin%20Desktop.png) | **Level 6: Refleksi Cermin Mobile**<br>![Level 6 Refleksi Cermin Mobile](screenshots/Level%206%20Refleksi%20Cermin%20Mobile.png) |
| **Level 7: Refleksi Kotak Desktop**<br>![Level 7 Refleksi Kotak Desktop](screenshots/Level%207%20Refleksi%20Kotak%20Desktop.png) | **Level 7: Refleksi Kotak Mobile**<br>![Level 7 Refleksi Kotak Mobile](screenshots/Level%207%20Refleksi%20Kotak%20Mobile.png) |

### Dimension 2: Environmental (Levels 8 – 12)

| Desktop (MacBook Pro M4) | Mobile (iPhone 16 Pro) |
| :---: | :---: |
| **Level 8: Anxiety Elixir Desktop**<br>![Level 8 Anxiety Elixir Desktop](screenshots/Level%208%20Anxiety%20Elixir%20Desktop.png) | **Level 8: Anxiety Elixir Mobile**<br>![Level 8 Anxiety Elixir Mobile](screenshots/Level%208%20Anxiety%20Elixir%20Mobile.png) |
| **Level 9: Refleksi Lingkaran Desktop**<br>![Level 9 Refleksi Lingkaran Desktop](screenshots/Level%209%20Refleksi%20Lingkaran%20Desktop.png) | **Level 9: Refleksi Lingkaran Mobile**<br>![Level 9 Refleksi Lingkaran Mobile](screenshots/Level%209%20Refleksi%20Lingkaran%20Mobile.png) |
| **Level 10: Ekspresi Bebas Canvas Desktop**<br>![Level 10 Ekspresi Bebas Canvas Desktop](screenshots/Level%2010%20Ekspresi%20Bebas%20Canvas%20Desktop.png) | **Level 10: Ekspresi Bebas Canvas Mobile**<br>![Level 10 Ekspresi Bebas Canvas Mobile](screenshots/Level%2010%20Ekspresi%20Bebas%20Canvas%20Mobile.png) |
| **Level 11: Soundtrack Musik Desktop**<br>![Level 11 Soundtrack Musik Desktop](screenshots/Level%2011%20Soundtrack%20Musik%20Desktop.png) | **Level 11: Soundtrack Musik Mobile**<br>![Level 11 Soundtrack Musik Mobile](screenshots/Level%2011%20Soundtrack%20Musik%20Mobile.png) |
| **Level 12: Are You Okay Desktop**<br>![Level 12 Are You Okay Desktop](screenshots/Level%2012%20Are%20You%20Okay%20Desktop.png) | **Level 12: Are You Okay Mobile**<br>![Level 12 Are You Okay Mobile](screenshots/Level%2012%20Are%20You%20Okay%20Mobile.png) |

### Dimension 3: Personal Growth (Levels 13 – 24)

| Desktop (MacBook Pro M4) | Mobile (iPhone 16 Pro) |
| :---: | :---: |
| **Level 13: Pohon Harapan Desktop**<br>![Level 13 Pohon Harapan Desktop](screenshots/Level%2013%20Pohon%20Harapan%20Desktop.png) | **Level 13: Pohon Harapan Mobile**<br>![Level 13 Pohon Harapan Mobile](screenshots/Level%2013%20Pohon%20Harapan%20Mobile.png) |
| **Level 14: Mimpi Terbesar Desktop**<br>![Level 14 Mimpi Terbesar Desktop](screenshots/Level%2014%20Mimpi%20Terbesar%20Desktop.png) | **Level 14: Mimpi Terbesar Mobile**<br>![Level 14 Mimpi Terbesar Mobile](screenshots/Level%2014%20Mimpi%20Terbesar%20Mobile.png) |
| **Level 15: Refleksi Diri Desktop**<br>![Level 15 Refleksi Diri Desktop](screenshots/Level%2015%20Refleksi%20Diri%20Desktop.png) | **Level 15: Refleksi Diri Mobile**<br>![Level 15 Refleksi Diri Mobile](screenshots/Level%2015%20Refleksi%20Diri%20Mobile.png) |
| **Level 16: Imajinasi Awan Desktop**<br>![Level 16 Imajinasi Awan Desktop](screenshots/Level%2016%20Imajinasi%20Awan%20Desktop.png) | **Level 16: Imajinasi Awan Mobile**<br>![Level 16 Imajinasi Awan Mobile](screenshots/Level%2016%20Imajinasi%20Awan%20Mobile.png) |
| **Level 17: Rencana Sticky Notes Desktop**<br>![Level 17 Rencana Sticky Notes Desktop](screenshots/Level%2017%20Rencana%20Sticky%20Notes%20Desktop.png) | **Level 17: Rencana Sticky Notes Mobile**<br>![Level 17 Rencana Sticky Notes Mobile](screenshots/Level%2017%20Rencana%20Sticky%20Notes%20Mobile.png) |
| **Level 18: Tangga Perubahan 1 Desktop**<br>![Level 18 Tangga Perubahan 1 Desktop](screenshots/Level%2018%20Tangga%20Perubahan%201%20Desktop.png) | **Level 18: Tangga Perubahan 1 Mobile**<br>![Level 18 Tangga Perubahan 1 Mobile](screenshots/Level%2018%20Tangga%20Perubahan%201%20Mobile.png) |
| **Level 19: Tangga Perubahan 2 Desktop**<br>![Level 19 Tangga Perubahan 2 Desktop](screenshots/Level%2019%20Tangga%20Perubahan%202%20Desktop.png) | **Level 19: Tangga Perubahan 2 Mobile**<br>![Level 19 Tangga Perubahan 2 Mobile](screenshots/Level%2019%20Tangga%20Perubahan%202%20Mobile.png) |
| **Level 20: Tangga Perubahan 3 Desktop**<br>![Level 20 Tangga Perubahan 3 Desktop](screenshots/Level%2020%20Tangga%20Perubahan%203%20Desktop.png) | **Level 20: Tangga Perubahan 3 Mobile**<br>![Level 20 Tangga Perubahan 3 Mobile](screenshots/Level%2020%20Tangga%20Perubahan%203%20Mobile.png) |
| **Level 21: Tangga Perubahan 4 Desktop**<br>![Level 21 Tangga Perubahan 4 Desktop](screenshots/Level%2021%20Tangga%20Perubahan%204%20Desktop.png) | **Level 21: Tangga Perubahan 4 Mobile**<br>![Level 21 Tangga Perubahan 4 Mobile](screenshots/Level%2021%20Tangga%20Perubahan%204%20Mobile.png) |
| **Level 22: Tangga Perubahan 5 Desktop**<br>![Level 22 Tangga Perubahan 5 Desktop](screenshots/Level%2022%20Tangga%20Perubahan%205%20Desktop.png) | **Level 22: Tangga Perubahan 5 Mobile**<br>![Level 22 Tangga Perubahan 5 Mobile](screenshots/Level%2022%20Tangga%20Perubahan%205%20Mobile.png) |
| **Level 23: Tangga Perubahan 6 Desktop**<br>![Level 23 Tangga Perubahan 6 Desktop](screenshots/Level%2023%20Tangga%20Perubahan%206%20Desktop.png) | **Level 23: Tangga Perubahan 6 Mobile**<br>![Level 23 Tangga Perubahan 6 Mobile](screenshots/Level%2023%20Tangga%20Perubahan%206%20Mobile.png) |
| **Level 24: Tangga Perubahan 7 Desktop**<br>![Level 24 Tangga Perubahan 7 Desktop](screenshots/Level%2024%20Tangga%20Perubahan%207%20Desktop.png) | **Level 24: Tangga Perubahan 7 Mobile**<br>![Level 24 Tangga Perubahan 7 Mobile](screenshots/Level%2024%20Tangga%20Perubahan%207%20Mobile.png) |

### Dimension 4: Purpose in Life (Levels 25 – 29)

| Desktop (MacBook Pro M4) | Mobile (iPhone 16 Pro) |
| :---: | :---: |
| **Level 25: Eksplorasi Diri Desktop**<br>![Level 25 Eksplorasi Diri Desktop](screenshots/Level%2025%20Eksplorasi%20Diri%20Desktop.png) | **Level 25: Eksplorasi Diri Mobile**<br>![Level 25 Eksplorasi Diri Mobile](screenshots/Level%2025%20Eksplorasi%20Diri%20Mobile.png) |
| **Level 26: Lingkar Waktu Desktop**<br>![Level 26 Lingkar Waktu Desktop](screenshots/Level%2026%20Lingkar%20Waktu%20Desktop.png) | **Level 26: Lingkar Waktu Mobile**<br>![Level 26 Lingkar Waktu Mobile](screenshots/Level%2026%20Lingkar%20Waktu%20Mobile.png) |
| **Level 27: Peta Bersyukur Desktop**<br>![Level 27 Peta Bersyukur Desktop](screenshots/Level%2027%20Peta%20Bersyukur%20Desktop.png) | **Level 27: Peta Bersyukur Mobile**<br>![Level 27 Peta Bersyukur Mobile](screenshots/Level%2027%20Peta%20Bersyukur%20Mobile.png) |
| **Level 28: Kompas Tujuan Desktop**<br>![Level 28 Kompas Tujuan Desktop](screenshots/Level%2028%20Kompas%20Tujuan%20Desktop.png) | **Level 28: Kompas Tujuan Mobile**<br>![Level 28 Kompas Tujuan Mobile](screenshots/Level%2028%20Kompas%20Tujuan%20Mobile.png) |
| **Level 29: Surat Masa Depan Desktop**<br>![Level 29 Surat Masa Depan Desktop](screenshots/Level%2029%20Surat%20Masa%20Depan%20Desktop.png) | **Level 29: Surat Masa Depan Mobile**<br>![Level 29 Surat Masa Depan Mobile](screenshots/Level%2029%20Surat%20Masa%20Depan%20Mobile.png) |

### Dimension 5: Positive Relations (Level 30)

| Desktop (MacBook Pro M4) | Mobile (iPhone 16 Pro) |
| :---: | :---: |
| **Level 30: Scoop of Hope Desktop**<br>![Level 30 Scoop of Hope Desktop](screenshots/Level%2030%20Scoop%20of%20Hope%20Desktop.png) | **Level 30: Scoop of Hope Mobile**<br>![Level 30 Scoop of Hope Mobile](screenshots/Level%2030%20Scoop%20of%20Hope%20Mobile.png) |

---

## Features

- **30 Gamified Psychological Activities (`app/level/[id]/page.tsx`)**: Educational reflection exercises divided into 5 psychological well-being (PWB) dimensions:
  - **Self Acceptance (Levels 1–7)**: Word search grid (`Level1WordSearch.tsx`), multi-expression facial sketching (`Level2Drawing.tsx`), hope balloons (`Level3Games.tsx`), mirror reflection, and introspection boxes.
  - **Environmental Mastery (Levels 8–12)**: Anxiety elixir potion mixing (`Level8Games.tsx`), concentric circle reflection, freehand canvas drawing (`Level10Drawing.tsx`), calming soundtrack audio session, and emotional splash checkpoint.
  - **Personal Growth (Levels 13–24)**: Tree of hope (`Level13Games.tsx`), biggest dream declaration, cloud imagination, sticky notes action planner, and 7 sequential stages of change stairways (`Level18Games.tsx` – `Level24Games.tsx`).
  - **Purpose in Life (Levels 25–29)**: Self-exploration questionnaire, three-era time wheel (Dahulu, Sekarang, Esok), gratitude treasure map, goal direction compass, and letter to future self.
  - **Positive Relations (Level 30)**: Multi-layered ice cream scoop of hope (`Level30IceCream.tsx`) capturing wishes for loved ones and social circles.
- **Sequential Adventure Progression Map (`app/dashboard/siswa/page.tsx`)**: Student dashboard displaying dynamic level completion counts, category locks/unlocks based on completed prerequisite levels, and achievement badges (`CHAPTER_1_COMPLETE` through `CHAPTER_5_COMPLETE`, and `CONSISTENT_WORKER` 7-day streak awards).
- **Teacher Gradebook & Analytics (`app/dashboard/guru/page.tsx`)**: Central educator management portal with school and class filtering, student progress tables across all 30 levels with completion status checkmarks, detailed submission response inspection, and 1-click Excel spreadsheet export via SheetJS (`.xlsx`).
- **Unified Role-Based Authentication (`app/login/page.tsx` & `lib/authOptions.ts`)**: Credentials authentication powered by NextAuth.js separating Teacher (`GURU`) administrative rights from Student (`SISWA`) gameplay sessions.
- **Cloudflare D1 Serverless SQLite Storage (`lib/models/User.ts` & `schema.sql`)**: High-performance relational database binding (`env.DB`) executing zero-latency SQL queries with serialized level response maps, submission timestamps, and award notification queues.
- **HTML5 Canvas Sketching Engine (`Level2Drawing.tsx`, `Level10Drawing.tsx`)**: Responsive drawing canvas supporting freehand pen strokes, color selection, stroke thickness adjustments, undo history, and direct data-URL base64 export.
- **Interactive Word Search Arena (`Level1WordSearch.tsx`)**: 10x10 matrix word finder with real-time drag-to-select letter highlighting, horizontal/vertical word detection, and audio feedback.
- **Curriculum Portfolio Showcase (`app/portfolio/page.tsx`)**: Printable A4-landscape digital curriculum overview displaying comprehensive activity modules and visual documentation.
- **Legacy Desktop Modernization (`legacy-java/`)**: Complete web reimplementation preserving the curriculum, game logic, and asset structure of the original Java Swing desktop client.

---

## Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | Next.js `14.2.35`, React `18.2.0` | App Router, Server Components, and API Route backend endpoints |
| **Database** | Cloudflare D1 (Serverless SQLite) | Serverless relational SQL database storing user profiles and level progress |
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
├── lib/                     # Database connection, D1 User model, and game curriculum data
├── legacy-java/             # Original Java Swing desktop application source
├── open-next.config.ts      # OpenNext Cloudflare adapter build configuration
├── schema.sql               # Cloudflare D1 SQLite database schema and seed data
├── wrangler.jsonc           # Cloudflare Workers configuration with custom domain routing
├── screenshots/             # MacBook Pro M4 & iPhone 16 Pro showcase mockups
└── README.md
```

---

## Getting Started & Local Development

### Prerequisites

- **Node.js**: Version 18.17.0 or higher
- **Cloudflare Wrangler CLI**: Installed locally or run via `npx wrangler`

### Environment Variables Setup Tutorial

Create a `.env.local` file in the root directory by copying the provided `.env.example`:

```bash
cp .env.example .env.local
```

Configure the following variables in `.env.local`:

| Variable | Description | Example / Default |
| :--- | :--- | :--- |
| `NEXTAUTH_SECRET` | Secret key used to encrypt session tokens (generate using `openssl rand -base64 32`) | `your_secret_key_here` |
| `NEXTAUTH_URL` | Canonical root URL of the application | `http://localhost:3000` (Local) / `https://book-games.widifirmaan.web.id` (Production) |

### Installation & Step-by-Step Setup

```bash
# 1. Clone the repository
git clone https://github.com/widifirmaan/nextjs-school-games.git
cd nextjs-school-games

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local

# 4. Initialize Cloudflare D1 Database
# To seed local SQLite database (.wrangler/state):
npx wrangler d1 execute school-games-db --local --file=schema.sql

# To seed remote Cloudflare D1 database:
npx wrangler d1 execute school-games-db --remote --file=schema.sql

# 5. Start local Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser. Default accounts are pre-seeded in `schema.sql`:

| Role | Username | Password |
| :--- | :--- | :--- |
| **Teacher (`GURU`)** | `guru` | `password` |
| **Student (`SISWA`)** | `siswa` | `password` |

### Production Build & Deployment

```bash
# Build OpenNext Cloudflare bundle and deploy to Cloudflare Workers
npm run deploy
```

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
