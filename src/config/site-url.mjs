// @ts-check
/**
 * THE one place that decides where the site lives. Every absolute URL — canonical, hreflang,
 * Open Graph, JSON-LD, sitemap, robots.txt, llms.txt — is built from these two values
 * (astro.config.mjs passes them to Astro as `site` and `base`).
 *
 * Today: GitHub Pages project site → https://halliday-suzette.github.io/veronicas-event-decor_website/
 *
 * When the custom domain goes live (see README → "Custom domain"):
 *   1. SITE_URL  = 'https://www.your-domain.com'
 *   2. BASE_PATH = '/'
 * That's the whole change.
 *
 * Optional: the SITE_URL / BASE_PATH environment variables override these (e.g. for a
 * preview on another host). The GitHub Pages workflow does not set them.
 */

// TODO(suzette): switch to custom domain before launch.
const DEFAULT_SITE_URL = 'https://halliday-suzette.github.io';
// GitHub Pages project sites live in a sub-folder named after the repo. Set to '/' with a custom domain.
const DEFAULT_BASE_PATH = '/veronicas-event-decor_website';

/** Origin of the live site, no trailing slash. */
export const SITE_URL = (process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');

/** Sub-folder the site is served from ('/' for a custom domain). */
export const BASE_PATH = process.env.BASE_PATH || DEFAULT_BASE_PATH;
