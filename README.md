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
npm run dev          # start the local site at http://localhost:4321
```

Other commands:

| Command           | What it does                                                       |
| ----------------- | ------------------------------------------------------------------ |
| `npm run build`   | Type-checks and builds the finished site into `dist/`              |
| `npm run preview` | Serves the built `dist/` folder locally to double-check it         |
| `npm run logo`    | Regenerates the header logo, social image and favicons (section 3) |
| `npm run format`  | Tidies code formatting with Prettier                               |

---

## 2. Editing the text (English and Spanish)

All words on the site live in two files:

- `src/i18n/en.ts` — English
- `src/i18n/es.ts` — Spanish

Open the file, change the words **between the quotes**, save. For example:

```ts
hero: {
  title: 'Rustic Western Elegance for Your Most Memorable Celebrations',
```

Rules of thumb:

- Change the text, not the names before the colons (`title:`, `subtitle:` …).
- If you add or remove something in `en.ts`, do the same in `es.ts`. The build will stop with an
  error that names the missing item, so nothing ships half-translated.
- Inside quotes that use `'single quotes'`, write an apostrophe as `’` (curly) or switch that line
  to `"double quotes"` — e.g. `"Veronica's Event Decor"`.
- Leave `icon: '...'` values alone — they choose a drawing, not words.
- Quote form choices (`quote.options`): the English wording is what arrives in the Formspree email,
  whichever language the visitor used. The Spanish file only changes what visitors see.

Page titles and Google descriptions are under `meta:` at the top of each file.

---

## 3. Swapping images

All images that the site optimizes live in `src/assets/images/`. Astro automatically creates
small, modern versions (AVIF/WebP at several sizes), so upload large originals.

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
> `src/assets/images/` and change the two `import` lines at the top of
> `src/components/Logo.astro` — that is the only file that needs to change.

### Hero photo (top of the page)

The hero currently shows the logo. To add a real event photo, save it as e.g.
`src/assets/images/hero.jpg`, then edit `src/components/HomePage.astro` (instructions are in the
comment at the top):

- `<Hero lang={lang} backgroundImage={heroPhoto} />` — photo behind everything, logo stays
- `<Hero lang={lang} featureImage={heroPhoto} featureAlt="…" />` — photo replaces the logo

### Gallery photos

1. Put photos in `src/assets/images/gallery/` (`.jpg`, `.png`, `.webp` or `.avif`). They appear in
   filename order; the first six are used. The simplest approach is to replace the placeholder
   files `gallery-01.jpg` … `gallery-06.jpg`, keeping the same names.
2. Describe each photo for screen readers and Google in `gallery.photoAlts` in **both**
   `src/i18n/en.ts` and `src/i18n/es.ts` (same order as the files), e.g.
   `'Whiskey barrel cocktail tables with a balloon garland backdrop'`.

---

## 4. Phone number and email

Open `src/config/site.ts` and replace `null`:

```ts
phone: '(909) 555-0123',
email: 'hello@example.com',
```

They then appear automatically in the footer and in the search-engine business data. While they
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

### Custom domain (optional)

1. **Settings → Pages → Custom domain:** enter e.g. `www.veronicaseventdecor.com` and save.
2. At your domain registrar, add DNS records:
   - `www` → **CNAME** → `halliday-suzette.github.io`
   - apex domain (no `www`) → **A** records `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153` (GitHub redirects it to `www`)
3. Once the DNS check passes, tick **Enforce HTTPS**.
4. Re-run the deploy workflow. The build reads the domain from GitHub automatically, so the
   canonical URLs, sitemap, social-share image and language links switch to the new domain —
   no code change needed.

### How the address is configured

`astro.config.mjs` reads `SITE_URL` and `BASE_PATH`, which the workflow fills in from the
GitHub Pages settings (`/veronicas-event-decor_website` without a custom domain, empty with one).
Locally they aren't set, so `npm run dev` / `npm run preview` serve the site at `/`.
Any new link to a file in `public/` must use `withBase('/file.png')` from `src/i18n/utils.ts`
so it works under the sub-folder.

### Other hosts

The site also deploys to Netlify, Vercel or Cloudflare Pages: build command `npm run build`,
output directory `dist`, Node 22, and the environment variables `PUBLIC_FORMSPREE_ENDPOINT` and
`SITE_URL` (your full domain, e.g. `https://www.veronicaseventdecor.com`).

---

## 7. Project structure

```
src/
  assets/images/      logo.png (source), generated logo files, gallery/ photos
  components/         one file per page section (Hero, About, Rentals, …, QuoteForm, Footer)
    form/             reusable form fields used by QuoteForm
  config/site.ts      phone, email, Instagram, service area, Formspree endpoint
  i18n/               en.ts, es.ts (all copy) and utils.ts (helpers)
  layouts/            BaseLayout.astro — <head>, SEO tags, hreflang, structured data
  pages/              index.astro (English) and es/index.astro (Spanish)
  styles/             global.css (colors, fonts, shared styles), fonts.css
public/               favicons, og-image.png, site.webmanifest
scripts/              logo-variants.mjs (npm run logo)
```

### Brand colors

Defined once in `src/styles/global.css` (`@theme`) and used as Tailwind classes such as
`bg-onyx`, `text-gold`, `text-whiskey-dark`. Gold text is only used on dark backgrounds; on
cream/linen sections, text uses the whiskey browns so everything meets WCAG AA contrast.
