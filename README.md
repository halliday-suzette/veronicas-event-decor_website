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

4. On your host (Netlify / Vercel / Cloudflare Pages): add the same variable name and value in the
   project's **Environment variables** settings, then redeploy.
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

## 6. Deploying

The site is fully static. Connect the GitHub repository to any of these and use:

| Setting          | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| Build command    | `npm run build`                                       |
| Output directory | `dist`                                                |
| Node version     | 22 (read automatically from `.nvmrc` on most hosts)   |
| Environment var  | `PUBLIC_FORMSPREE_ENDPOINT` = your Formspree endpoint |

- **Netlify:** Add new site → Import from GitHub → fill in the settings above.
- **Vercel:** Add New Project → import the repo. Astro is detected automatically; add the
  environment variable.
- **Cloudflare Pages:** Create a project → Connect to Git → framework preset "Astro"; add the
  environment variable (and `NODE_VERSION = 22` if the build uses an older Node).

**Before launch:** set the real domain in `astro.config.mjs` (`site: '…'`). It is used for
the canonical URLs, language links, social-share image and `sitemap-index.xml`.

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
