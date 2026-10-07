import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { celebrations } from '../data/celebrations';
import { categories, publishedItems } from '../data/inventory';
import { en } from '../i18n/en';
import { localeUrl } from '../i18n/utils';

/**
 * llms.txt — a short, plain-markdown summary for AI/answer engines, generated at build time
 * from the same data as the site (definition, service area, celebrations, inventory).
 */
export const GET: APIRoute = ({ site: siteUrl }) => {
  const home = localeUrl('en', siteUrl);
  const homeEs = localeUrl('es', siteUrl);
  const areas = site.serviceArea.areasServed.map((a) => a.name.en).join(', ');
  const events = celebrations.map((c) => c.name.en).join('; ');
  const rentals = categories
    .map((category) => {
      const names = publishedItems
        .filter((item) => item.category === category.id)
        .map((item) => item.name.en);
      return names.length ? `- ${category.label.en}: ${names.join(', ')}` : '';
    })
    .filter(Boolean);

  const lines = [
    `# ${site.name}`,
    '',
    `> ${en.about.definition}`,
    '',
    '## Pages',
    `- English: ${home}`,
    `- Español: ${homeEs}`,
    '',
    '## Service area',
    `Based in ${site.serviceArea.city}, ${site.serviceArea.region} ${site.serviceArea.postalCode}. Delivery and setup across ${areas}.`,
    '',
    '## Languages',
    'Service in English and Spanish (se habla español).',
    '',
    '## Events',
    events,
    '',
    '## Rentals',
    ...rentals,
    '',
    '## Request a quote',
    `Free quotes through the form at ${home}#quote (Spanish: ${homeEs}#quote). We reply within 1–2 business days.`,
    '',
    '## Instagram',
    site.instagram.url,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
