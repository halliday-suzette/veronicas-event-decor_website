// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { BASE_PATH, SITE_URL } from './src/config/site-url.mjs';

// Where the site lives comes from src/config/site-url.mjs — the single source for every
// absolute URL (canonical, hreflang, OG, JSON-LD, sitemap, robots.txt, llms.txt).

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
    // Each URL lists its language alternates (xhtml:link hreflang) — same codes as the <head>.
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es-US' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
