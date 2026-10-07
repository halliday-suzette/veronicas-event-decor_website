import type { APIRoute } from 'astro';
import { absoluteUrl } from '../i18n/utils';

/**
 * robots.txt, generated at build time so the Sitemap line always uses the configured site URL
 * (src/config/site-url.mjs). It lives here instead of public/ for that reason.
 *
 * Note: crawlers only read robots.txt at the domain root, so on the GitHub Pages project URL
 * (…github.io/repo-name/) this file is ignored. It takes effect once the custom domain is live.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = absoluteUrl('/sitemap-index.xml', site);
  const aiAgents = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'PerplexityBot',
    'Google-Extended',
    'Applebot-Extended',
    'Bingbot',
  ];
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    '# AI and answer engines — explicitly welcome',
    ...aiAgents.flatMap((agent) => [`User-agent: ${agent}`, 'Allow: /']),
    '',
    `Sitemap: ${sitemap}`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
