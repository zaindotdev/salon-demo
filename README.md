# Salon Demo

A premium, mobile-first one-page salon website built with Next.js App Router, Tailwind CSS, and TypeScript. It is designed as a reusable sales demo: all client-facing content lives in one configuration file.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production check:

```bash
npm run build
npm start
```

## Reskin it for a new salon

Open `src/config/salon.ts`. That single object controls:

- salon name, short logo text, SEO title, and description
- navigation and hero copy
- services, descriptions, icons, and PKR prices
- gallery and about-section image URLs
- story, stats, opening hours, and testimonials
- address, phone, email, map coordinates, form labels, and WhatsApp details
- Instagram, Facebook, TikTok, and footer copy

Search for `[SALON NAME]`, `[PLAZA NAME]`, and `[SECTOR]` to replace the obvious placeholders. Swap the Unsplash URLs for the salon's own optimized images when preparing a live client version.

## Connect the demo form

The appointment form is intentionally UI-only. For a live client, connect it to WhatsApp, email, a booking service, or a small API endpoint. No authentication, database, or booking backend is included.

## Deploy to Vercel

Install the Vercel CLI once, then deploy from this folder:

```bash
npx vercel
```

Follow the prompts. Vercel detects Next.js automatically.
