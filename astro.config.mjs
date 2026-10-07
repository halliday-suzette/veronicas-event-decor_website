// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with the real production domain before launch.
  // It is used for canonical URLs, hreflang links, Open Graph tags and the sitemap.
  site: 'https://www.veronicaseventdecor.com',
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
