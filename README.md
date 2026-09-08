# DroneBug Technologies & Services

> Lightweight desktop tools, AI-powered software, and expert tech consultancy — helping Nigerian businesses save money and grow faster.

[![Live](https://img.shields.io/badge/live-www.dronebugtech.shop-0ea5e9?style=for-the-badge)](https://www.dronebugtech.shop)
[![Mirror](https://img.shields.io/badge/mirror-dronebug.vercel.app-64748b?style=for-the-badge)](https://dronebug.vercel.app)
[![SMEDAN Verified](https://img.shields.io/badge/SMEDAN-Verified-10b981?style=for-the-badge)](https://www.dronebugtech.shop)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?logo=vite)](https://vitejs.dev)
[![React 19](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev)

**Live site:** https://www.dronebugtech.shop (canonical) — mirror `https://dronebug.vercel.app` 308 → canonical
**Previous host:** https://c23e91e1.mydala.app (Dala)  
**Repository:** https://github.com/ABugDrone/DroneBug-Technologies-Services

---

## ✨ Features

- **Solutions Bento** — Desktop / AI & ML / Mobile / Fullstack Web / Branding & Design / Tech Education
- **Consultation Pricing (3 tiers)** — Pay via **OPay**, **Moniepoint**, or **Selar** with receipt verification through WhatsApp or Gmail
- **SMEDAN Trust Bar** — Verified micro-enterprise badge with certificate modal (`storage.googleapis.com/.../DroneBug_SMEDAN_CERTIFICATE.pdf`)
- **Framer Motion** hero mesh + glassmorphism UI, dark/light toggle, share API, responsive Navbar

## 🛠️ Stack

Vite 5 + React 19 + TypeScript 5.8 + Tailwind CSS v4 + shadcn/ui (Radix) + Framer Motion + @phosphor-icons/react + Sonner + React Router 7

## 🚀 Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production -> dist/
npm run preview  # preview build
npm run typecheck
```

Requires **Node 20+** (recommended 20 or 22 LTS). Node 24 also works.

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── SolutionsBento.tsx
│   ├── PricingAndAssessment.tsx
│   ├── SmedanTrustAndFooter.tsx
│   ├── PaymentModal.tsx
│   └── ui/               # shadcn/ui
├── data/dronebugData.ts  # BRAND, SOCIAL_LINKS, STATS, SERVICES, PRICING_TIERS, PAYMENT_CHANNELS
├── lib/utils.ts
├── App.tsx
└── main.tsx
```

Key config:
- `vite.config.ts` — alias `@` → `./src`, port 3000, host true
- `vercel.json` — Vite framework, SPA rewrite `/(.*)` → `/index.html`, 308 redirects `vercel.app` + apex → `www.dronebugtech.shop`, security headers
- `index.html` — SEO / OG point to `https://www.dronebugtech.shop` with JSON-LD (Organization, FAQPage, Offer, Breadcrumbs) + local `/og-image.png`
- `public/` — `sitemap.xml`, `robots.txt`, `llms.txt`, `site.webmanifest`, `og-image.png` (all canonical)
- `src/data/dronebugData.ts` — single source of truth. `CANONICAL_URL` = `https://www.dronebugtech.shop`

## 🔗 Important Links (edit in `src/data/dronebugData.ts`)

| Key | Value |
|-----|-------|
| WhatsApp | `https://wa.me/2347035716349` |
| Email | `dronebugtechnologies@gmail.com` |
| Selar checkout | `https://selar.com/974809781i` |
| OPay / Moniepoint | `7035716349` (Abdulazeez Yunusa) |
| SMEDAN cert | `https://storage.googleapis.com/.../DroneBug_SMEDAN_CERTIFICATE.pdf` |
| Logo | `https://storage.googleapis.com/.../Dronebug_2026_rebranded_logo.png` |

## ▲ Deploy to Vercel

This repo is configured for **Vercel** as `www.dronebugtech.shop` (canonical). Mirror `dronebug.vercel.app` 308 → canonical.

1. Import `ABugDrone/DroneBug-Technologies-Services` in Vercel dashboard
2. Framework preset: **Vite** (auto-detected via `vercel.json`)
3. Build command: `pnpm run build` — Output: `dist`
4. Domains: `www.dronebugtech.shop` (primary), `dronebugtech.shop` → `www`, `dronebug.vercel.app` → `www` (all set in `vercel.json` redirects)
5. Every `git push` to `main` auto-deploys; PRs get preview deployments

Alternatively via CLI:

```bash
npm i -g vercel
vercel --prod
vercel domains add www.dronebugtech.shop
```

## 🔄 Domain History

- `c23e91e1.mydala.app` → `dronebug.vercel.app` → **`www.dronebugtech.shop`** (canonical since 2026-08-28)
- `CANONICAL_URL` = `https://www.dronebugtech.shop` in `src/data/dronebugData.ts:3`
- `robots.txt` / `sitemap.xml` / `llms.txt` / `og:image` all served from canonical
- Local `/og-image.png` (1254×1254) mirrors GCS logo for reliable OG (no hotlink dependency)
- Industry SEO: `canonical` + JSON-LD (Organization/FAQ/Service/Offer/Breadcrumbs) + `llms.txt` for AI GE

## 🔍 SEO & AI/GE Verification

```bash
curl -I https://www.dronebugtech.shop/robots.txt          # Sitemap: https://www.dronebugtech.shop/sitemap.xml
curl https://www.dronebugtech.shop/sitemap.xml             # 5 URLs
curl https://www.dronebugtech.shop/llms.txt                # AI crawlable markdown
# View Source → <link rel="canonical"> + <meta property="og:image"> = www.dronebugtech.shop/og-image.png
# Rich Results: https://search.google.com/test/rich-results
# OG: https://www.opengraph.xyz/  https://cards-dev.twitter.com/validator
```

## 📧 Contact

- WhatsApp: [+234 703 571 6349](https://wa.me/2347035716349)
- Telegram: [@DroneBug](https://t.me/DroneBug)
- Email: [dronebugtechnologies@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=dronebugtechnologies@gmail.com)
- Facebook: [DroneBug](https://www.facebook.com/profile.php?id=100085447531492)

---

© 2026 DroneBug Technologies & Services. SMEDAN Verified Micro Enterprise.
