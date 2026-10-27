# JK Advisory

Solo website for Dr. Gokulanathan A., an agri-biologicals consultant in Coimbatore. The public copy is driven by `content/claims.ts`. Claims marked `confirm` are not rendered.

## Develop

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` before launch and fill only values Dr. Gokul has confirmed: site URL, contact email, WhatsApp business number, booking link, GA4 id, Turnstile keys, and a verified Resend sender.

## Checks

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

After a production build, this must print nothing:

```bash
grep -ri placeholder .next out || true
```

## Quarterly regulatory review

Review regulatory pages on the first Monday of each quarter. Update `site.lastReviewedRegulatory` only after the primary sources (PIB, agriwelfare.gov.in, ppqs.gov.in, caa.gov.in, egazette.gov.in) have been re-read. The draft Pesticides Management Bill, 2025 must stay labelled as proposed until it is enacted.

## Before launch

Confirm the brand lockup, legal name, domain, WhatsApp, email, booking link, headshot, real DOIs, the RNAi metric, the NABL wording, any employer names, and fee anchors. Do not invent them in code.

Off-site, not in this repo: Google Business Profile as a service-area business in Coimbatore, Search Console, Bing Webmaster, and GA4 key events for `form_submit`, `whatsapp_click` and `booking_open`.

## Stack

Next.js App Router, TypeScript, Tailwind CSS v4, Radix accordion, Motion-ready layout, MDX insights, Resend, Cloudflare Turnstile.
