/**
 * Business details used across the site (header, footer, form, SEO/JSON-LD).
 *
 * To add a phone number or email later, replace `null` with the value in quotes, e.g.
 *   phone: '(909) 555-0123',
 *   email: 'hello@example.com',
 * They then appear in the footer (with Call / Text / Email links) and in the search-engine
 * data automatically.
 *
 * The site's own URL lives in ./site-url.mjs (one setting for every absolute URL).
 */
import type { L10n } from '../data/types';

export { SITE_URL, BASE_PATH } from './site-url.mjs';

export type AnalyticsProvider = 'none' | 'plausible' | 'ga4';

export interface SiteConfig {
  name: string;
  /** Shown to visitors, e.g. '(909) 555-0123'. `null` hides it everywhere. */
  phone: string | null;
  /** `null` hides it everywhere. */
  email: string | null;
  instagram: { handle: string; url: string };
  /** Google Business Profile URL; added to JSON-LD `sameAs` when set. */
  googleBusinessProfileUrl: string | null;
  serviceArea: {
    city: string;
    region: string;
    postalCode: string;
    country: string;
    /** Shown in Our Story & Service Area and used for JSON-LD `areaServed`. */
    areasServed: { type: 'City' | 'AdministrativeArea'; name: L10n }[];
  };
  /** Set with PUBLIC_FORMSPREE_ENDPOINT in `.env` / the GitHub repository variable. */
  formspreeEndpoint: string;
  /**
   * Privacy-friendly analytics, off by default. `id` is the site's domain for Plausible
   * (e.g. 'www.your-domain.com') or the measurement ID for GA4 (e.g. 'G-XXXXXXX').
   */
  analytics: { provider: AnalyticsProvider; id: string };
  /** Google Search Console verification code (`content` of the meta tag). Empty = no tag. */
  googleSiteVerification: string;
  /** Bing Webmaster Tools verification code (`content` of msvalidate.01). Empty = no tag. */
  bingSiteVerification: string;
}

export const site: SiteConfig = {
  name: "Veronica's Event Decor",

  // TODO(veronica): confirm public phone/email.
  phone: null,
  email: null,

  instagram: {
    handle: '@veronica_eventdecor',
    url: 'https://www.instagram.com/veronica_eventdecor/',
  },

  // TODO(suzette): add GBP URL after profile is live.
  googleBusinessProfileUrl: null,

  serviceArea: {
    city: 'Pomona',
    region: 'CA',
    postalCode: '91767',
    country: 'US',
    areasServed: [
      { type: 'City', name: { en: 'Pomona', es: 'Pomona' } },
      { type: 'AdministrativeArea', name: { en: 'Inland Empire', es: 'Inland Empire' } },
      {
        type: 'AdministrativeArea',
        name: { en: 'San Bernardino County', es: 'Condado de San Bernardino' },
      },
      {
        type: 'AdministrativeArea',
        name: { en: 'Riverside County', es: 'Condado de Riverside' },
      },
      { type: 'AdministrativeArea', name: { en: 'Orange County', es: 'Orange County' } },
    ],
  },

  formspreeEndpoint: import.meta.env.PUBLIC_FORMSPREE_ENDPOINT ?? '',

  // TODO(suzette): choose provider — recommend Plausible, which uses no cookies, so no consent
  // banner is needed. Set provider: 'plausible' and id: the site's domain.
  analytics: { provider: 'none', id: '' },

  // TODO(suzette): add after creating Search Console and Bing Webmaster accounts.
  googleSiteVerification: '',
  bingSiteVerification: '',
};

/** Phone number in international form, digits only (e.g. `+19095550123`). */
function e164(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 10 ? `+1${digits}` : `+${digits}`;
}

/** `tel:` link for the phone number. */
export function phoneHref(phone: string): string {
  return `tel:${e164(phone)}`;
}

/** `sms:` link for the phone number. */
export function smsHref(phone: string): string {
  return `sms:${e164(phone)}`;
}
