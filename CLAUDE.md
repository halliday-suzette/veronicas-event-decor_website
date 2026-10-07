# CLAUDE.md

Bilingual (EN `/`, ES `/es/`) one-page brochure site for Veronica's Event Decor, a Latina
woman-owned event décor / party rental business in Pomona, CA. Built by Halliday.
User-facing docs (editing copy, swapping images, Formspree, deploy) are in README.md.

## Commands

- `npm run dev` — dev server (port 4321; if taken, Astro picks the next free port — read the output)
- `npm run build` — `astro check` + static build to `dist/`. Must finish with 0 errors **and 0 warnings**.
- `npm run preview` — serve `dist/`
- `npm run format` / `npm run format:check` — Prettier (astro + tailwind plugins)
- `npm run logo` — regenerate derived brand assets from `src/assets/images/logo.png`
  (`logo-web.png`, `logo-wordmark.png`, `public/og-image.png`, favicons). Never edit the source logo.

- `npm run check:i18n` — `scripts/check-i18n.ts` (run by Node's built-in TS support): en/es key
  diff, every `L10n` in `src/data/` filled in both languages, and a banned-word scan
  (`style/styled/styling`, `estiliz*`, `decoramos`) over all customer-facing text incl. alt text.

No test suite. Verify changes by building and running `check:i18n`, then checking the page in a
browser at 360, 390, 768, 1024, 1280 and 1536px (no horizontal scroll), in both languages.

## Stack

Astro 7 (`output: 'static'`, built-in i18n, `prefixDefaultLocale: false`), Tailwind CSS v4 via
`@tailwindcss/vite`, TypeScript strict (TS 6 — `@astrojs/check` doesn't support TS 7 yet),
`@astrojs/sitemap`, self-hosted fonts via `@fontsource`. No UI frameworks; small vanilla `<script>`s only.

## Architecture

- `src/pages/index.astro` and `src/pages/es/index.astro` only render `<HomePage lang=… />`.
  `src/components/HomePage.astro` sets the section order: Hero → Celebrations → Rentals
  (SignatureBarrels + RentalsCatalog) → AddOns → Gallery → WhyUs → HowItWorks → About → QuoteForm
  → Faq, plus Header/Footer.
- Every section component takes a `lang: Lang` prop and gets page copy via
  `const t = useTranslations(lang)` (`src/i18n/utils.ts`).
- **Data files (`src/data/`)** are the single source of truth for content lists, each entry
  bilingual (`L10n = { en, es }`): `inventory.ts` (items + categories; drives the Signature
  section, catalog, Add-Ons and the form's rentals checklist via `featured`/`showInForm`/
  `published`), `celebrations.ts`, `faq.ts` (UI accordion **and** FAQPage JSON-LD), `photos.ts`
  (filename → alt text, gallery order). Keep `src/data/` free of Vite-only APIs so
  `check-i18n.ts` can import it with plain Node.
- **Photos:** `src/assets/photos/<exact filename>`. `src/lib/photos.ts` (`import.meta.glob`)
  resolves them (`hasPhoto`, `fitSize` — never upscale; the source photos are ~900px wide);
  `Photo.astro` renders WebP (quality 68) with explicit width/height, lazy unless `priority`, and
  renders **nothing** if the file is missing — cards switch to finished text layouts (no
  placeholders or "coming soon" text). Never stock/AI images, licensed characters, or children's
  names; `balloons-rodeo-first-birthday.jpg` is permanently excluded.
- **Photo privacy (public repo):** before adding any photo, re-encode it with `sharp` (no
  `.withMetadata()`/`.keepMetadata()`) so EXIF/GPS/XMP/ICC/IPTC are stripped, and verify. Keep
  originals outside the repo — `/Photos/` is git-ignored. Keep that leading slash: on Windows
  (case-insensitive) an unanchored `Photos/` also matched `src/assets/photos/` and hid the
  real photos from git.
- `src/layouts/BaseLayout.astro`: `<head>`, meta/OG/Twitter, canonical + hreflang (en, es,
  x-default, codes `en-US`/`es-US` via `hreflangCode()`, same as the sitemap), OG/Twitter,
  preloads (hero logo AVIF, hero background ≥640px, Playfair font), verification metas, one
  JSON-LD `@graph` from `src/lib/structured-data.ts` (WebSite, WebPage, LocalBusiness with an
  OfferCatalog generated from inventory, FAQPage from faq.ts), `<Analytics />` only when enabled.
- `src/config/site.ts`: phone/email (`null` = hidden everywhere, incl. JSON-LD), Instagram,
  `googleBusinessProfileUrl`, service area, Formspree endpoint, `analytics`
- `src/components/QuoteForm.astro` + `src/components/form/*`: progressive enhancement — plain POST
  without JS (barrel-table questions visible and optional); with JS, inline validation, barrel
  questions shown only when barrel tables are checked (hidden ones are **disabled** so they aren't
  submitted), `_subject` built as "prefix – event type – date", `fetch` with
  Accept: application/json, success/error/retry.

## Hosting (GitHub Pages)

- Deployed by `.github/workflows/deploy.yml` on push to `main` (Pages source: GitHub Actions).
- **`src/config/site-url.mjs` is the single source of the site URL** (`SITE_URL`, `BASE_PATH`),
  imported by `astro.config.mjs`; the workflow does not set them. The site builds under
  `/veronicas-event-decor_website/` everywhere, including `npm run dev`. Custom domain = change the
  two defaults there (`TODO(suzette)`). `SITE_URL`/`BASE_PATH` env vars can still override.
- **Never hard-code root-relative URLs** (`/favicon.ico`, `/es/`). Use `withBase()`,
  `absoluteUrl()`, `localePath()` or `localeUrl()` from `src/i18n/utils.ts`. In-page `#anchors`
  and `astro:assets` images are fine as-is. `public/site.webmanifest` uses relative paths.
- Local builds already match production: `npm run build` then `npx astro preview` and open
  `/veronicas-event-decor_website/`.
- `PUBLIC_FORMSPREE_ENDPOINT` comes from a GitHub Actions repository **variable**.

## Conventions

- **No hard-coded copy in components.** Page text goes in `src/i18n/en.ts` / `es.ts` (`es` is
  typed as `Translations`, so keys must match); list content goes in `src/data/` as `L10n`.
- **Brand voice:** warm and friendly, like Verónica talking to a friend; short sentences. Spanish
  is natural Mexican Spanish: always "tú", "renta" (not "alquiler"), "cotización/cotiza", "fiesta",
  "quinceañera(s)" (never the Roman-numeral "fifteen" abbreviation), "salón de eventos", "bancos altos", "sombrillas". **Never** "We Style /
  styled / styling / estilizamos / decoramos" — she rents handcrafted pieces and delivers and sets
  them up ("set up / montamos", "deliver / te llevamos"); "style" as a noun ("What styles…",
  "farmhouse–style table") is fine. **Never "charro" or "charra".** Don't name family members.
  Celebration of Life copy is soft: no exclamation points, no party language, no theme/keyword
  language, muted card styling.
- **Keywords (SEO/AEO/GEO):** primary "rustic western party rentals" / "renta de mobiliario rústico
  western", secondary "western farmhouse décor" / "decoración (western) estilo rancho". Max 2–3
  visible uses of each per page (currently exactly 3 primary per page: hero subtitle, catalog H3,
  Our Story / ES: H1, hero subtitle, catalog H3). "Farmhouse"/"estilo rancho" only on weddings,
  baby showers, wood & arched backdrops, dessert pieces/table (plus the hero, definition and
  "styles" FAQ). Western stays the lead identity. No stuffing, hidden text or keyword lists.
- **Business definition** = `about.definition` (first sentence of Our Story); it's also the
  LocalBusiness description and the `llms.txt` summary — keep it a clear, quotable sentence.
- Missing facts (prices, quantities, dimensions, lead times, "most requested"): leave a
  `TODO(veronica)` comment and render nothing or neutral copy. Brand name stays in English.
- Quote form option values submitted to Formspree are always the **English** labels
  (`en.quote.options`); `es` only changes what's displayed. Field `name`s are readable snake_case.
- Section ids (`sectionIds` in `src/i18n/utils.ts`: `home`, `celebrations`, `rentals`, `add-ons`,
  `gallery`, `why-us`, `how-it-works`, `about`, `quote`, `faq`) are anchor targets and used by the
  language toggle — rename only together with the components.
- Images that need optimization go in `src/assets/` (not `public/`) and render with
  `astro:assets`. Decorative images/SVGs get `alt=""` / `aria-hidden`; never "placeholder" alt text.
- Icons: add paths to `src/components/Icon.astro`; Instagram glyph is `InstagramIcon.astro`.
  No icon fonts, CDNs or third-party embeds.
- External links: `target="_blank" rel="noopener noreferrer"`. An `aria-label` must contain the
  link's visible text (WCAG 2.5.3) — prefer visible text + `sr-only` additions instead.

## Design rules

- Tokens live in `@theme` in `src/styles/global.css` (`onyx`, `gold`, `gold-soft`, `gold-deep`,
  `whiskey-dark`, `whiskey`, `whiskey-light`, `cream`, `linen`, `charcoal`, `error`).
  The contrast ratios are documented there; keep everything WCAG AA.
- **Gold text only on dark backgrounds.** On `cream`/`linen`, text uses `whiskey-dark`/`charcoal`
  (`whiskey` for small secondary text); gold is decorative only (rules, icons, borders).
  `gold-deep` is never text.
- Section backgrounds alternate: `section-dark` / `section-cream` / `section-linen` (component
  classes in `global.css`). `SectionHeading` takes `tone="dark" | "light"` to match.
- Buttons: `btn-gold`, `btn-outline` (dark bg), `btn-outline-dark` (light bg); min 44px tap targets.
- Any animation must respect `prefers-reduced-motion`.
- **Hero photo overlay:** `--hero-overlay-photo` (0.3, photo/logo side) and `--hero-overlay-text`
  (0.72, behind the text) in `:root` of `global.css`, used by `.hero-overlay` (left→right on
  desktop, top→bottom when stacked). Hero text has `.hero-text-shadow`; the hero eyebrow is
  `gold-soft` (plain `gold` fails AA over the sky). After changing either value, re-measure hero
  text contrast against the rendered photo (worst-case pixel), at 768/1280/1536px.

## Content rules

Do not invent testimonials, prices, years in business, awards, event counts or statistics.
Never display a fake phone number. Package concepts are labeled as examples, without prices.
Pomona is in **Los Angeles County** — don't describe it as San Bernardino County.

## Gotchas

- Tailwind v4: `@apply` only works with real utilities. A reusable class you want to `@apply`
  elsewhere must be an `@utility` (see `btn`). Scoped `<style>` blocks in `.astro` files can't use
  `@apply` without `@reference` — put shared styles in `global.css` instead.
- Fonts: only Latin subsets are loaded (`src/styles/fonts.css`); Playfair's Latin face is declared
  manually with a relative `node_modules` path. Playfair italic isn't loaded — don't use `italic`
  on serif text.
- `build.inlineStylesheets: 'always'` is intentional (removes render-blocking CSS).
- Windows/PowerShell 5.1: `Set-Content -Encoding utf8` writes a BOM — avoid it for source files.
  Commit messages containing double quotes break when passed with `-m`; use `git commit -F <file>`.
- `.gitattributes` enforces LF line endings.

## Git

Small, logical conventional commits (`feat:`, `fix:`, `perf:`, `docs:`, `chore:`).

## Project history

What has been built so far, in order, and the decisions behind it. Commit hashes are on `main`.

### Phase 1 — Initial build (2026-10-06)

Built from the original brief: a production-ready, bilingual one-page brochure site.

- **Scaffold** (`1645d6d`): Astro 7 static, Tailwind v4 via `@tailwindcss/vite`, strict TS,
  `@astrojs/sitemap`, `@fontsource` fonts, Prettier with astro + tailwind plugins, `.env.example`.
- **Logo** (`874a8e2`): client's transparent metallic PNG (no EXIF, no white background, no halos).
  `npm run logo` (`scripts/logo-variants.mjs`) auto-detects the two gold bars and crops the compact
  header wordmark. Gold tokens were tuned to colors sampled from the logo (shadow `#b06602`, mid
  `#f6b422`, highlight `#fcf27e`) → `gold #e6aa1e`, `gold-soft #f7d266`, `gold-deep #a2680a`.
  Decision: logo source lives in `src/assets/images/` (not `public/`) so `astro:assets` optimizes it.
- **Translations & config** (`883cfed`): `en.ts`/`es.ts` as typed TS (not JSON) so a missing key
  is a build error; `site.ts` with phone/email `null` until known.
- **Layout & SEO** (`6d85541`): BaseLayout (title/description, canonical, hreflang en/es/x-default,
  OG/Twitter, LocalBusiness JSON-LD, skip link), `robots.txt` endpoint, web manifest; `npm run
logo` also generates `og-image.png` and a gold "V" monogram favicon set.
- **Header** (`539d0f8`): sticky header, compact logo, EN|ES toggle that keeps the current section
  anchor, Instagram icon, quote button; mobile menu on a native `<dialog>` (focus trap, Escape,
  aria-expanded).
- **Sections** (`10cfa5e`, `5908410`, `bee9624`, `537f842`): hero with lit logo + glow, about,
  rentals, events, packages, service area, gallery, footer.
- **Quote form** (`7c87e65`): Formspree, progressive enhancement, honeypot, inline accessible
  validation, fetch submit with success/error/retry.
- **Performance & a11y** (`8ac2816`): Latin-only font subsets, inline CSS, `logo-web.png`
  (invisible edge pixels cleared, ~15% smaller), language-link label-in-name fix, darker
  placeholder text. Lighthouse 96/100/100/100 mobile.
- **Docs** (`31c1563`, `4470238`): README for non-developers; this CLAUDE.md.

### Phase 2 — GitHub Pages hosting (2026-10-06, `fb5fb84`)

- `.github/workflows/deploy.yml` (checkout v7, setup-node v7, configure-pages v6,
  upload-pages-artifact v5, deploy-pages v5). Repo: `halliday-suzette/veronicas-event-decor_website`
  (public). Live at `https://halliday-suzette.github.io/veronicas-event-decor_website/`.
- `site`/`base` come from `SITE_URL`/`BASE_PATH` (filled from the Pages settings), so a custom
  domain later needs no code change. Added `withBase()`/`absoluteUrl()`; manifest uses relative
  paths. First deploy failed with "Get Pages site failed / Not Found" because Pages wasn't yet set
  to **Source: GitHub Actions** — fixed in repo settings, not code.

### Phase 3 — Restructure & copy rewrite (2026-10-07, `bc3794f`, `265134b`)

From the client restructure brief (not a redesign — logo, palette, fonts, Formspree kept):

- **Data files** (`src/data/`): inventory (5 categories, 22 items), celebrations (primary/secondary,
  `gentle` Celebration of Life), FAQ, photo registry. Single source for catalog, Add-Ons, the form's
  rentals checklist, the FAQ accordion and FAQPage JSON-LD.
- **New section order**: Hero → Celebrations → Signature Barrel Tables + Rentals catalog → Add-Ons →
  Real Event Setups gallery (keyboard lightbox on `<dialog>`) → Why Families Choose Verónica's →
  How It Works (+ example packages, no prices) → Our Story & Service Area → Quote → FAQ.
  Removed: Events, Packages, ServiceArea components and the old placeholder gallery.
- **Copy**: rewritten in Verónica's brand voice (see Conventions); `npm run check:i18n` added.
  Three "style" words from the brief itself were rewritten ("farmhouse-style", "selfie-style").
- **Form**: new field order (city + ZIP, event location, inventory-driven rentals, budget,
  notes, consent); barrel-table count/finish only when barrel tables are checked; subject
  "New quote request – {event type} – {date}" in the page language. "How did you hear" removed.
- **SEO**: new titles/descriptions; LocalBusiness in page language with 5 areas served; FAQPage.
- Fixes found in testing: Spanish catalog heading overflowed at 360px; hero overlay raised to ≥80%
  so small gold text stays AA over bright photos; footer "FAQ" link widened to 44px.

### Phase 4 — Real photos & client answers (2026-10-07, `edb3626`)

- 14 originals received (in `Photos/_incoming/`, not `src/assets/photos/_incoming/` as the brief
  said). None had EXIF/GPS, but all kept photos were re-encoded metadata-free and verified
  byte-level before committing; one exact duplicate dropped; 12px edge strip trimmed from the night
  dessert-cart photo. Originals deleted afterward. 13 photos committed; gallery shows 12.
- **No placeholders anywhere**: `Photo.astro` renders nothing for missing files; cards become
  finished designs (framed text cards with gold line icons for Quinceañeras/Sweet 16s, icon band
  for add-ons, compact text cards in the catalog). Finish cards are text + wood swatch because no
  photo clearly shows a light vs. dark finish.
- Photos are only ~560–900px wide, so `fitSize()` never upscales. To keep mobile Lighthouse ≥95:
  logo stays the high-priority LCP, the hero background is lazy/low-priority and skipped on phones,
  content photos use WebP quality 68. Result: 95/100/100/100 mobile, 100/100/100/100 desktop.
- Client answers applied: rustic dessert table confirmed (TODO removed); photo booth gets a neutral
  description + TODOs; rodeo first-birthday photo permanently excluded; Quinceañera/Sweet 16 stay
  photo-less for now; phone/email stay blank.

### Phase 5 — SEO / AEO / GEO (2026-10-07)

- **Copy:** keyword language woven into the hero subtitle, catalog H3, the Our Story definition
  sentence, four celebration cards (not Quinceañeras, Graduations or Celebration of Life), three
  inventory items and alt text; two FAQs added ("western/cowboy-theme" and "styles"). The brief's
  FAQ answers were trimmed slightly (EN "Our western rentals", ES "Nuestro mobiliario…") and the ES
  footer tagline dropped "renta de" to keep the primary phrase at 3 visible uses per page.
- **Titles/descriptions** replaced (EN "Rustic Western Party Rentals in Pomona | Veronica's").
- **One URL setting:** `src/config/site-url.mjs` (workflow no longer passes SITE_URL/BASE_PATH).
- **Sitemap** hreflang `en-US`/`es-US`; `<head>` hreflang switched to the same codes.
- **robots.txt** (generated, AI crawlers welcomed) and **llms.txt** (generated from data).
- **JSON-LD** `@graph`: WebSite, WebPage (primaryImageOfPage = hero photo), LocalBusiness
  (definition, slogan, knowsAbout, areaServed incl. Inland Empire as AdministrativeArea, OfferCatalog
  of 22 items in 5 groups, no prices/ratings/street), FAQPage (9 Q&As).
- **Performance:** hero logo preloaded (AVIF, `type` attr), eager + `fetchpriority=high` +
  `decoding=async`, AVIF quality 40 (visually identical, −22%); hero background is a `<picture>`
  whose source only matches ≥640px (eager/high + media-scoped preload; phones never download it);
  Playfair preloaded (a second font preload didn't help LCP). Mobile Lighthouse 96, LCP 2.7s (lab,
  simulated slow 4G — the remaining gap is the ~1.7s first-paint floor + logo bytes).
- **Analytics** component (Plausible/GA4/none, off by default) + `quote_submitted` and outbound
  click events; **verification** metas for Google/Bing, rendered only when set.
- check-i18n banned-word list narrowed to the client's actual rule and extended with charro/charra.

### Testing done each phase

Build (0 errors/warnings), `check:i18n`, both pages at 360–1536px with an overflow check,
Playwright + installed Edge for form behaviour (both languages, JS off, intercepted Formspree
requests — **no real submission has been sent yet**; no endpoint locally), keyboard (menu, FAQ,
lightbox), axe-core (0 violations), tap targets ≥44px, console errors, Lighthouse mobile/desktop,
and a GitHub Pages-path build to verify canonical/hreflang/JSON-LD.

### Open items

- `TODO(veronica)` (grep for it): missing photos (horse/horseshoe backdrop, arched backdrops,
  "Most Wanted" saloon, saloon facade, longhorn bar, photo booth, cowgirl baby shower; optional
  clear light/dark finish photos), public phone/email, most-requested finish, inventory quantities
  and sizes, photo booth details, delivery fees/distance, booking lead time.
- Greenery dessert-cart photo still shows parked cars (can't crop without losing the wagon wheel).
- Backyard hero photo shows a party banner that may contain part of a name (small, under overlay).
- Set `PUBLIC_FORMSPREE_ENDPOINT` (repo variable) and send one real test quote per language.
- `TODO(suzette)`: custom domain in `site-url.mjs`, analytics provider, Search Console + Bing
  verification codes, Google Business Profile URL. `TODO(veronica)`: optional `starting at` prices.
