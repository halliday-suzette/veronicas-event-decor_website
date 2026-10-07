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

No test suite. Verify changes by building, then checking the page in a browser at 360, 390, 768,
1024, 1280 and 1536px (no horizontal scroll), in both languages.

## Stack

Astro 7 (`output: 'static'`, built-in i18n, `prefixDefaultLocale: false`), Tailwind CSS v4 via
`@tailwindcss/vite`, TypeScript strict (TS 6 — `@astrojs/check` doesn't support TS 7 yet),
`@astrojs/sitemap`, self-hosted fonts via `@fontsource`. No UI frameworks; small vanilla `<script>`s only.

## Architecture

- `src/pages/index.astro` and `src/pages/es/index.astro` only render `<HomePage lang=… />`.
  All sections are composed in `src/components/HomePage.astro`.
- Every section component takes a `lang: Lang` prop and gets copy via
  `const t = useTranslations(lang)` (`src/i18n/utils.ts`).
- `src/layouts/BaseLayout.astro`: `<head>`, meta/OG/Twitter, canonical + hreflang (en, es, x-default),
  LocalBusiness JSON-LD, skip link.
- `src/config/site.ts`: phone/email (`null` = hidden everywhere, incl. JSON-LD), Instagram,
  service area, Formspree endpoint (`PUBLIC_FORMSPREE_ENDPOINT`).
- `src/components/QuoteForm.astro` + `src/components/form/*`: progressive enhancement — plain POST
  without JS; with JS, inline validation + `fetch` (Accept: application/json) + success/error/retry.

## Hosting (GitHub Pages)

- Deployed by `.github/workflows/deploy.yml` on push to `main` (Pages source: GitHub Actions).
- `astro.config.mjs` takes `site`/`base` from `SITE_URL`/`BASE_PATH`, which the workflow sets from
  `actions/configure-pages` outputs. Without a custom domain the site lives under
  `/veronicas-event-decor_website/`; locally both are unset and the site runs at `/`.
- **Never hard-code root-relative URLs** (`/favicon.ico`, `/es/`). Use `withBase()`,
  `absoluteUrl()`, `localePath()` or `localeUrl()` from `src/i18n/utils.ts`. In-page `#anchors`
  and `astro:assets` images are fine as-is. `public/site.webmanifest` uses relative paths.
- To test the Pages build locally: set `SITE_URL=https://halliday-suzette.github.io` and
  `BASE_PATH=/veronicas-event-decor_website`, then `npm run build` and `npx astro preview`.
- `PUBLIC_FORMSPREE_ENDPOINT` comes from a GitHub Actions repository **variable**.

## Conventions

- **No hard-coded copy in components.** All text goes in `src/i18n/en.ts` and `src/i18n/es.ts`.
  `es` is typed as `Translations` (from `en`), so keys must match exactly. Add to both files.
- Spanish copy: natural, warm, Mexican-American SoCal register, informal "tú"; correct accents/ñ.
  Brand name stays "Veronica's Event Decor" in English.
- Quote form option values submitted to Formspree are always the **English** labels
  (`en.quote.options`); `es` only changes what's displayed. Field `name`s are readable snake_case.
- Section ids (`home`, `about`, `rentals`, `events`, `packages`, `service-area`, `gallery`, `quote`)
  are anchor targets and used by the language toggle — don't rename without updating `sectionIds`.
- Images that need optimization go in `src/assets/images/` (not `public/`) and render with
  `astro:assets` `<Picture>`/`<Image>`. Gallery images are auto-discovered via `import.meta.glob`;
  alt text is `gallery.photoAlts` by index. Decorative images/SVGs get `alt=""` / `aria-hidden`.
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
