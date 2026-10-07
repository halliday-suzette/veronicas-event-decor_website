# Veronica's Event Decor — website

A fast, bilingual (English / Spanish) one-page website for **Veronica's Event Decor**, a Latina
woman-owned event décor and party furniture rental business in Pomona, CA.

- English: `/` · Spanish: `/es/`
- Built with [Astro](https://astro.build) (static site), Tailwind CSS v4 and TypeScript
- Quote form powered by [Formspree](https://formspree.io)

---

## 1. Setup

You need **Node.js 22.12 or newer** (check with `node --version`).

```bash
npm install          # install dependencies (first time only)
cp .env.example .env # then put your Formspree form ID in .env (see section 5)
npm run dev          # local site at http://localhost:4321/veronicas-event-decor_website/
```

Other commands:

| Command              | What it does                                                       |
| -------------------- | ------------------------------------------------------------------ |
| `npm run build`      | Type-checks and builds the finished site into `dist/`              |
| `npm run preview`    | Serves the built `dist/` folder locally to double-check it         |
| `npm run logo`       | Regenerates the header logo, social image and favicons (section 3) |
| `npm run format`     | Tidies code formatting with Prettier                               |
| `npm run check:i18n` | Checks English/Spanish match and the brand-voice word list         |

---

## 2. Editing the text (English and Spanish)

The words on the site live in two kinds of files.

**Page text** (headings, buttons, form labels, messages):

- `src/i18n/en.ts` — English
- `src/i18n/es.ts` — Spanish

**Rentals, celebrations and FAQ** — both languages side by side, so they're edited once:

| File                       | What's in it                                                         |
| -------------------------- | -------------------------------------------------------------------- |
| `src/data/inventory.ts`    | Every rental item and add-on, its category, photo, and form checkbox |
| `src/data/celebrations.ts` | The Celebrations cards                                               |
| `src/data/faq.ts`          | The FAQ (also feeds Google's FAQ data automatically)                 |
| `src/data/photos.ts`       | Photo filenames, alt text (EN/ES) and the gallery order              |
| `src/config/site.ts`       | Phone, email, Instagram, service-area list                           |

Open the file, change the words **between the quotes**, save. Then run:

```bash
npm run check:i18n
```

It confirms English and Spanish match key for key, every data entry has both languages, and no
customer-facing text uses banned brand-voice words.

Rules of thumb:

- Change the text, not the names before the colons (`title:`, `subtitle:` …).
- If you add or remove something in `en.ts`, do the same in `es.ts` — the build stops otherwise.
- Inside `'single quotes'`, write an apostrophe as `’` or switch that line to `"double quotes"`.
- Leave `icon: '...'` values alone — they choose a drawing, not words.
- Quote form choices: the English wording is what arrives in the Formspree email, whichever
  language the visitor used.

### Adding a rental item

Copy an entry in `src/data/inventory.ts`, give it a unique `id`, a `category`, and the name and
description in both languages. Options:

- `showInForm: true` — also appears as a checkbox in the quote form
- `published: false` — hidden everywhere (without deleting it)
- `image: 'file.jpg'` — a photo in `src/assets/photos/` (list it in `src/data/photos.ts` with
  alt text). Items without `image` show as compact text cards.
- `quantity` / `dimensions` — once set, a small spec line appears on the card

### Brand voice

Warm and friendly, like Verónica talking to a friend. Spanish is natural Mexican Spanish ("tú",
"renta", "cotiza", "Mis XV", "salón de eventos", "bancos altos", "sombrillas"). Never "style /
styled / styling / estilizamos": she rents handcrafted pieces and delivers and sets them up. No
invented prices, counts, dimensions, years in business or reviews — leave a
`TODO(veronica)` comment instead.

---

## 3. Photos and images

### Event and inventory photos

All photos are Verónica's own events and inventory. Put them in **`src/assets/photos/`** using
the exact filenames listed in `src/assets/photos/README.md`. Each one appears automatically,
optimized to WebP, lazy-loaded and cropped to fit. Until a file exists, that card shows as a
finished text card — never stock or AI images, and no "coming soon" placeholders.

> **Privacy first:** this repository is public. Phone photos often contain the GPS location
> where they were taken. Before adding a photo, strip all metadata (EXIF, GPS, XMP, ICC) — for
> example by re-encoding it with `sharp`, which drops metadata by default. Keep the originals
> outside the repository (the `Photos/` folder is git-ignored).

When a photo arrives, check its alt text in `src/data/photos.ts` matches what's actually in it.

### Logo

1. Replace `src/assets/images/logo.png` with the new logo (transparent PNG, ideally ~1600px wide).
2. Run `npm run logo`. This regenerates:
   - `logo-web.png` — the same logo, optimized for the web
   - `logo-wordmark.png` — the compact "Veronica's event decor" band used in the header
     (detected automatically between the two gold bars)
   - `public/og-image.png` — the image shown when the site is shared on social media
   - `public/favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`,
     `icon-512.png` — browser tab icons (a gold "V" monogram)
3. Check the header and hero with `npm run dev`.

> **Have an SVG (vector) logo?** It would be sharper and lighter. Save it in
> `src/assets/images/` and change the logo import in `src/lib/logo.ts` and the wordmark import in
> `src/components/Logo.astro`.

### Hero photo

The hero uses `barrels-umbrellas-backyard.jpg` as its background (under a dark overlay, from
tablet width up). To use a different photo, change `heroPhoto` in `src/data/photos.ts` — the
`<head>` preload and the structured data follow automatically.

---

## 4. Phone number and email

Open `src/config/site.ts` and replace `null`:

```ts
phone: '(909) 555-0123',
email: 'hello@example.com',
```

They then appear automatically in the footer (Call / Text / Email links; on phones the number shows as "Call or Text") and in the search-engine business data. While they
are `null`, nothing is shown (no fake placeholders).

The Instagram handle, service area and business address details are in the same file.

---

## 5. Quote form (Formspree)

1. Create a free account at [formspree.io](https://formspree.io) and add a new form. Set the
   email address that should receive quote requests.
2. Copy the form's endpoint — it looks like `https://formspree.io/f/abcdwxyz`.
3. Locally: put it in `.env`:

   ```
   PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/abcdwxyz
   ```

4. On GitHub: **Settings → Secrets and variables → Actions → Variables tab → New repository
   variable**, name `PUBLIC_FORMSPREE_ENDPOINT`, value = the endpoint. Then re-run the deploy
   (section 6). On another host, add the same name/value in its environment-variable settings.
5. Send yourself a test request from the live site. Formspree asks you to confirm the first
   submission by email.

How it behaves:

- With JavaScript (almost everyone): the form validates inline, sends in the background and
  shows a "Thank you!" message on the page. If sending fails, visitors see an error and a
  **Try again** button.
- Without JavaScript: it submits normally and Formspree shows its own thank-you page.
- Spam protection: a hidden `_gotcha` field; Formspree drops submissions that fill it.
- Emails show readable field names (`event_type`, `event_date`, `guest_count`, …) plus
  `form_language` (`en`/`es`) so you know which language to reply in.

If the variable is missing, the local dev site shows a small reminder above the form (never shown
on the live site).

---

## 6. Deploying (GitHub Pages)

The site is hosted on **GitHub Pages** and deploys automatically: every push to `main` runs
`.github/workflows/deploy.yml`, which builds the site and publishes it (about 1–2 minutes).
Progress and errors appear in the repository's **Actions** tab.

Live address (until a custom domain is added):
`https://halliday-suzette.github.io/veronicas-event-decor_website/` (Spanish: `…/es/`)

### One-time setup

1. **Settings → Pages → Build and deployment → Source:** choose **GitHub Actions**.
2. **Settings → Secrets and variables → Actions → Variables → New repository variable:**
   `PUBLIC_FORMSPREE_ENDPOINT` = your Formspree endpoint (section 5).
3. Push to `main` (or **Actions → Deploy to GitHub Pages → Run workflow**).

### Custom domain — switching over

The site's address lives in **one file**: `src/config/site-url.mjs`. Every absolute URL —
canonical links, language links (hreflang), social-share tags, structured data, the sitemap,
`robots.txt` and `llms.txt` — is built from it.

1. **Settings → Pages → Custom domain:** enter e.g. `www.veronicaseventdecor.com` and save.
2. At your domain registrar, add DNS records:
   - `www` → **CNAME** → `halliday-suzette.github.io`
   - apex domain (no `www`) → **A** records `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153` (GitHub redirects it to `www`)
3. Once the DNS check passes, tick **Enforce HTTPS**.
4. In `src/config/site-url.mjs` change two lines:

   ```js
   const DEFAULT_SITE_URL = 'https://www.veronicaseventdecor.com';
   const DEFAULT_BASE_PATH = '/';
   ```

5. Commit and push. The whole site now uses the new domain (and `robots.txt` starts working —
   search engines only read it at the domain root).

### The sub-folder (base path)

GitHub Pages serves this project from `/veronicas-event-decor_website/`, so the site is built with
that base path — locally too (`npm run dev` → `http://localhost:4321/veronicas-event-decor_website/`).
Any new link to a file in `public/` must use `withBase('/file.png')` from `src/i18n/utils.ts`.
With a custom domain the base path becomes `/` and nothing else changes.

### Other hosts

The site also deploys to Netlify, Vercel or Cloudflare Pages: build command `npm run build`,
output directory `dist`, Node 22, and the environment variable `PUBLIC_FORMSPREE_ENDPOINT`. Set
the domain in `src/config/site-url.mjs` (or override it with `SITE_URL` / `BASE_PATH` environment
variables).

---

## 7. Search engines, AI answers & analytics

Already built in — nothing to do unless noted:

- **Titles & descriptions** per language: `meta` in `src/i18n/en.ts` / `es.ts`.
- **Structured data** (JSON-LD, one `@graph` per page, in the page's language): WebSite, WebPage,
  LocalBusiness (service area, languages, `knowsAbout`, and an OfferCatalog generated from
  `src/data/inventory.ts` — no prices, ratings or street address) and FAQPage (from
  `src/data/faq.ts`). Built in `src/lib/structured-data.ts`.
- **Sitemap** (`/sitemap-index.xml`) with English/Spanish alternates for each page.
- **`/robots.txt`** welcomes search and AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Bingbot…).
- **`/llms.txt`**: a short plain-text summary for AI engines, generated from the same data.

To finish (in `src/config/site.ts`):

| Setting                    | What to do                                                                                                                                                                                                                                           |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `googleSiteVerification`   | Create a [Google Search Console](https://search.google.com/search-console) property → "HTML tag" method → paste the `content` value. Then submit `sitemap-index.xml`.                                                                                |
| `bingSiteVerification`     | Same in [Bing Webmaster Tools](https://www.bing.com/webmasters) ("HTML Meta Tag" → `content` of `msvalidate.01`). Bing matters for AI answers: ChatGPT search and Copilot use Bing's index.                                                          |
| `googleBusinessProfileUrl` | Once the Google Business Profile is live, paste its URL — it's added to the structured data.                                                                                                                                                         |
| `analytics`                | Off by default. Recommended: [Plausible](https://plausible.io) (no cookies → no consent banner): `{ provider: 'plausible', id: 'your-domain.com' }`. GA4 also works: `{ provider: 'ga4', id: 'G-XXXXXXX' }`. With `'none'`, no analytics code loads. |

Events sent when analytics is on (never personal data): `quote_submitted` (language, event type),
`instagram_click`, `phone_click`, `sms_click` (language, page section). In Plausible, add each as a
custom-event goal to see it in the dashboard.

---

## 8. Project structure

```
src/
  assets/images/      logo.png (source) and generated logo files
  assets/photos/      Verónica's event & inventory photos (see its README for filenames)
  components/         one file per page section (Hero, Celebrations, Rentals, …, Faq, Footer)
    form/             reusable form fields used by QuoteForm
  config/site-url.mjs the site's address (one setting for every absolute URL)
  config/site.ts      phone, email, Instagram, service area, Formspree, analytics, verification
  data/               inventory, celebrations, FAQ, photo list (bilingual)
  i18n/               en.ts, es.ts (page text) and utils.ts (helpers)
  layouts/            BaseLayout.astro — <head>, SEO tags, hreflang, structured data
  lib/               photos.ts (find photos), structured-data.ts (JSON-LD), logo.ts + hero.ts
                      (preloaded hero images), analytics.ts (event tracking)
  pages/              index.astro (English), es/index.astro (Spanish), robots.txt.ts, llms.txt.ts
  styles/             global.css (colors, fonts, shared styles), fonts.css
public/               favicons, og-image.png, site.webmanifest
scripts/              logo-variants.mjs (npm run logo), check-i18n.ts (npm run check:i18n)
```

### Brand colors

Defined once in `src/styles/global.css` (`@theme`) and used as Tailwind classes such as
`bg-onyx`, `text-gold`, `text-whiskey-dark`. Gold text is only used on dark backgrounds; on
cream/linen sections, text uses the whiskey browns so everything meets WCAG AA contrast.
