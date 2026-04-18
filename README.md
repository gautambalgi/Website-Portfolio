# Gautam Balgi — Portfolio

A bold, editorial-style personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Designed to be deployed on Vercel.

## ✦ Stack

- **Framework**: Next.js 14 (App Router) + React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Fraunces (display), Geist (sans), JetBrains Mono — all via `next/font/google`

## ✦ Pages

| Route        | Purpose                                                                 |
| ------------ | ----------------------------------------------------------------------- |
| `/`          | Homepage — hero, stats, featured projects, experience preview, CTA      |
| `/about`     | Long bio with drop cap, education timeline, certifications              |
| `/experience`| Full work history with accent-colored timeline cards                    |
| `/projects`  | Detailed project write-ups with impact stats                            |
| `/skills`    | Categorized skill cloud + working principles                            |
| `/contact`   | Contact form + direct contact cards (email/LinkedIn/GitHub)             |
| `/ischool`   | **Placeholder** for IST 782 portfolio (Spring 2026 submission)          |

## ✦ Project Structure

```
portfolio/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── experience/page.tsx
│   ├── ischool/page.tsx        ← Empty placeholder for IST 782 content
│   ├── projects/page.tsx
│   ├── skills/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   └── Nav.tsx
├── lib/
│   └── data.ts                 ← Single source of truth (resume content)
├── public/
│   └── resume/
│       └── Gautam_Balgi_Resume.pdf  ← AI-track resume for download
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## ✦ Local Development

Make sure you have Node.js 18.18 or newer installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

## ✦ Build for Production

```bash
npm run build
npm start
```

## ✦ Deploy to Vercel

### Option A — One-click via the Vercel dashboard

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/gautambalgi/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, and click **Deploy**.
   Vercel auto-detects Next.js — no configuration needed.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Subsequent deploys: `vercel --prod`.

## ✦ Updating Content

All content lives in **`lib/data.ts`** — a single TypeScript file with:

- `profile` — name, contact info, bio paragraphs
- `education` — degrees with coursework
- `experience` — every role, ordered most-recent-first
- `projects` — with `slug`, `stack`, `bullets`, and `impact` arrays
- `skills` — grouped by category
- `stats` — homepage counters

Edit that file and the changes flow through every page. No hunting through components needed.

## ✦ Updating the Resume

Replace `public/resume/Gautam_Balgi_Resume.pdf` with the updated PDF. The download button on the homepage points at this exact path.

## ✦ Filling in the iSchool Page

The `/ischool` route currently shows a placeholder structure mapped to the IST 782 requirements (learning outcomes, project descriptions, track selection, video presentation, ~3,000-word blog). Edit `app/ischool/page.tsx` when you're ready to publish the real portfolio content.

## ✦ Design Notes

- Color palette: cream (`#faf7f2`) background, ink (`#0a0a0a`) text, with coral / amber / violet / moss accents
- Typography: Fraunces italic for editorial flourish; JetBrains Mono for tags and timestamps
- Layout: asymmetric grids, brutalist hard-borders on CTAs, gradient mesh + noise overlay for depth
- Animation: page-load reveals via Framer Motion, marquees for emphasis, blob backgrounds in heroes

---

Built with care · Deployed on Vercel
