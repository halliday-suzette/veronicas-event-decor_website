// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Where the site is published. Used for canonical URLs, hreflang links, Open Graph tags,
// the sitemap and robots.txt.
//
// On GitHub Pages these are set automatically by .github/workflows/deploy.yml:
//   - without a custom domain: SITE_URL=https://halliday-suzette.github.io
//                              BASE_PATH=/veronicas-event-decor_website
//   - with a custom domain:    SITE_URL=https://www.your-domain.com, BASE_PATH empty
// Locally (npm run dev / build) the defaults below are used and the site runs at "/".
const SITE_URL = process.env.SITE_URL || 'https://halliday-suzette.github.io';
const BASE_PATH = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // One small page: inline the CSS so it doesn't block the first paint.
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
