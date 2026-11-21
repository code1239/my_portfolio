@AGENTS.md

# Yusuf Macit — Portfolio

Single-page portfolio (Next.js App Router, TypeScript, Tailwind CSS v4). Bilingual (EN/TR), light/dark theme, bento layout. Deployed on Vercel; repo: github.com/code1239/my_portfolio (branch `main`).

## Commands

- `npm run dev` — dev server (`.claude/launch.json` has a `portfolio-dev` config; port may fall back to 3001)
- `npm run lint` and `npx tsc --noEmit` — must stay clean
- `npm run build` — production build

## Structure

- `src/content/resume.ts` — all resume text, `{ en, tr }` per language, plus `profile` (email, phone, links). Edit content here.
- `src/i18n/dictionaries.ts` — UI strings (nav, buttons, form messages), EN + TR. Any new string needs both languages.
- `src/i18n/LanguageProvider.tsx` + `useT.ts` — client-side language state (localStorage `lang`, falls back to browser language). No `/tr` `/en` routes.
- `src/components/` — one file per section; `ui/` has `Section`, `BentoCard`, `Chip`, `Reveal`. `icons.tsx` holds brand SVGs (lucide has no brand icons).
- `src/app/api/contact/route.ts` — contact form → Resend. zod validation, honeypot field `website`, in-memory rate limit.
- `public/` — photo, CV PDF (English only, used for both languages), certificate.

## Conventions and gotchas

- This is Next.js 16 with `cacheComponents` and `partialPrefetching` enabled. Read `node_modules/next/dist/docs/` before using unfamiliar APIs. Avoid `Date.now()` / `Math.random()` in server components.
- Interactive and translated components are client components (`"use client"`) because they read the language context.
- Default theme is **light** (`next-themes`, `enableSystem={false}`), toggle available in the navbar.
- Theme colors are CSS variables in `src/app/globals.css`; use the Tailwind tokens (`bg-card`, `text-muted`, `border-border`, `text-accent`).
- Phone/WhatsApp number lives in `profile.phoneIntl` (digits only, used for `wa.me`).
- No footer branding text; footer shows only the copyright line.

## Environment variables

Set in `.env.local` (gitignored) and in Vercel. See `.env.example`.

- `RESEND_API_KEY` — secret; without it `/api/contact` returns 503 and the form shows a fallback message
- `CONTACT_TO_EMAIL` — where messages are delivered; until a domain is verified in Resend it must be the Resend account email
- `NEXT_PUBLIC_SITE_URL` — full public URL including `https://` (used for Open Graph, sitemap, robots). In Vercel it must be a **Config** variable, not Secret. Changing it needs a redeploy.

Never commit `.env.local`.
