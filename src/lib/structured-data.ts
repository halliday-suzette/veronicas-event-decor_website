/**
 * Builds the page's JSON-LD as one @graph, in the page's language:
 * WebSite → WebPage → LocalBusiness (with an OfferCatalog generated from inventory.ts) → FAQPage
 * (generated from faq.ts, the same data as the FAQ accordion).
 *
 * Every absolute URL is built from Astro's `site` + `base` (src/config/site-url.mjs).
 * Deliberately left out: street address (service-area business), prices, ratings and reviews.
 */
import { site } from '../config/site';
import { categories, publishedItems } from '../data/inventory';
import { faq } from '../data/faq';
import type { Translations } from '../i18n/en';
import { absoluteUrl, hreflangCode, localeUrl, type Lang } from '../i18n/utils';

interface GraphInput {
  lang: Lang;
  t: Translations;
  siteUrl: URL | undefined;
  /** Absolute URL of this page (its canonical). */
  pageUrl: string;
  /** Primary image of the page (absolute URL + size), if available. */
  primaryImage?: { url: string; width: number; height: number };
}

export function buildGraph({ lang, t, siteUrl, pageUrl, primaryImage }: GraphInput) {
  const home = localeUrl('en', siteUrl);
  const ids = {
    website: `${home}#website`,
    business: `${home}#business`,
    webpage: `${pageUrl}#webpage`,
    faq: `${pageUrl}#faq`,
    image: `${pageUrl}#primaryimage`,
  };

  const website = {
    '@type': 'WebSite',
    '@id': ids.website,
    name: site.name,
    url: home,
    inLanguage: [hreflangCode('en'), hreflangCode('es')],
    publisher: { '@id': ids.business },
  };

  const webpage = {
    '@type': 'WebPage',
    '@id': ids.webpage,
    url: pageUrl,
    name: t.meta.title,
    description: t.meta.description,
    inLanguage: hreflangCode(lang),
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.business },
    ...(primaryImage
      ? {
          primaryImageOfPage: {
            '@type': 'ImageObject',
            '@id': ids.image,
            url: primaryImage.url,
            width: primaryImage.width,
            height: primaryImage.height,
          },
        }
      : {}),
  };

  // TODO(veronica): add "starting at" prices if she wants them public (no prices until then).
  const offerCatalog = {
    '@type': 'OfferCatalog',
    name: t.schema.offerCatalogName,
    itemListElement: categories
      .map((category) => ({
        '@type': 'OfferCatalog',
        name: category.label[lang],
        itemListElement: publishedItems
          .filter((item) => item.category === category.id)
          .map((item) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: item.name[lang],
              description: item.description[lang],
            },
          })),
      }))
      .filter((group) => group.itemListElement.length > 0),
  };

  const business = {
    '@type': 'LocalBusiness',
    '@id': ids.business,
    name: site.name,
    url: home,
    description: t.about.definition,
    slogan: t.footer.tagline,
    logo: absoluteUrl('/icon-512.png', siteUrl),
    image: absoluteUrl('/og-image.png', siteUrl),
    // Service-area business: city/region/ZIP only, never a street address.
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.serviceArea.city,
      addressRegion: site.serviceArea.region,
      postalCode: site.serviceArea.postalCode,
      addressCountry: site.serviceArea.country,
    },
    areaServed: site.serviceArea.areasServed.map((area) => ({
      '@type': area.type,
      name: area.name[lang],
    })),
    knowsLanguage: ['en', 'es'],
    knowsAbout: t.schema.knowsAbout,
    sameAs: [
      site.instagram.url,
      ...(site.googleBusinessProfileUrl ? [site.googleBusinessProfileUrl] : []),
    ],
    ...(site.phone ? { telephone: site.phone } : {}),
    ...(site.email ? { email: site.email } : {}),
    hasOfferCatalog: offerCatalog,
  };

  const faqPage = {
    '@type': 'FAQPage',
    '@id': ids.faq,
    inLanguage: hreflangCode(lang),
    isPartOf: { '@id': ids.webpage },
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question[lang],
      acceptedAnswer: { '@type': 'Answer', text: item.answer[lang] },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [website, webpage, business, faqPage],
  };
}
