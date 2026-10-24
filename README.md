# Sakar Window System — Website

Company website for Sakar Window System (uPVC & aluminium windows and doors), built with Next.js 16, Tailwind CSS 4 and Framer Motion.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your Resend API key
npm run dev                  # http://localhost:3000
```

## Editing content

All site content — company details, products, specs, stats, testimonials, finishes — lives in [`src/lib/data.ts`](src/lib/data.ts). Every page reads from it, so updating the catalog doesn't require touching components.

## Contact form (Resend)

Enquiries are sent through [Resend](https://resend.com) by a server action in [`src/app/contact/actions.ts`](src/app/contact/actions.ts):

- the company inbox receives the enquiry (reply goes straight to the customer)
- the customer receives a confirmation email, if they entered one

Required environment variables (see [`.env.example`](.env.example)):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from resend.com/api-keys |
| `CONTACT_TO_EMAIL` | Inbox(es) that receive enquiries, comma-separated |
| `CONTACT_FROM_EMAIL` | Sender address on your Resend-verified domain |

Set the same variables in your hosting provider (e.g. Vercel → Project → Settings → Environment Variables).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint with ESLint |
