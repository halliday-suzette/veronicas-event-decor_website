import type { APIRoute } from 'astro';
import { absoluteUrl } from '../i18n/utils';

// Note: crawlers only read robots.txt at the domain root, so on a GitHub Pages project URL
// (…github.io/repo-name/) this file is ignored. It takes effect once a custom domain is set.
export const GET: APIRoute = ({ site }) => {
  const sitemap = absoluteUrl('/sitemap-index.xml', site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
