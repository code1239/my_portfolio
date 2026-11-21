# Yusuf Macit - Portfolio

Single-page portfolio built with Next.js (App Router), Tailwind CSS v4, TR/EN language switch and light/dark theme.

## Develop

    npm install
    npm run dev

## Content

- Resume text (EN + TR): `src/content/resume.ts`
- UI strings (EN + TR): `src/i18n/dictionaries.ts`
- Assets: `public/` (photo, CV PDF, certificate)

## Contact form (Resend)

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY` - API key from resend.com
- `CONTACT_TO_EMAIL` - where messages are delivered
- `NEXT_PUBLIC_SITE_URL` - your public URL (used for Open Graph, sitemap, robots)

Without `RESEND_API_KEY` the form shows a localized "unavailable" message. Until you verify a domain in Resend, messages are sent from `onboarding@resend.dev` and can only be delivered to the email address of your Resend account.

## Deploy (Vercel)

1. Push to GitHub and import the repo in Vercel.
2. Add the environment variables above in Project Settings.
3. Deploy.
