/**
 * Business details used across the site (header, footer, form, SEO/JSON-LD).
 *
 * To add a phone number or email later, replace `null` with the value in quotes, e.g.
 *   phone: '(909) 555-0123',
 *   email: 'hello@example.com',
 * They will then appear in the footer and the search-engine data automatically.
 */

export interface SiteConfig {
  name: string;
  /** Shown to visitors, e.g. '(909) 555-0123'. `null` hides it everywhere. */
  phone: string | null;
  /** `null` hides it everywhere. */
  email: string | null;
  instagram: { handle: string; url: string };
  serviceArea: {
    city: string;
    region: string;
    postalCode: string;
    country: string;
    /** Used for search-engine structured data (JSON-LD `areaServed`). */
    areasServed: { type: 'City' | 'AdministrativeArea'; name: string }[];
  };
  /** Set with PUBLIC_FORMSPREE_ENDPOINT in `.env` (see `.env.example`). */
  formspreeEndpoint: string;
}

export const site: SiteConfig = {
  name: "Veronica's Event Decor",

  // TODO: Add the business phone number when it's available.
  phone: null,
  // TODO: Add the business email address when it's available.
  email: null,

  instagram: {
    handle: '@veronica_eventdecor',
    url: 'https://www.instagram.com/veronica_eventdecor/',
  },

  serviceArea: {
    city: 'Pomona',
    region: 'CA',
    postalCode: '91767',
    country: 'US',
    areasServed: [
      { type: 'City', name: 'Pomona' },
      { type: 'AdministrativeArea', name: 'San Bernardino County' },
      { type: 'AdministrativeArea', name: 'Orange County' },
      { type: 'AdministrativeArea', name: 'Riverside County' },
    ],
  },

  formspreeEndpoint: import.meta.env.PUBLIC_FORMSPREE_ENDPOINT ?? '',
};

/** `tel:` link for the phone number, digits only (e.g. `tel:+19095550123`). */
export function phoneHref(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return `tel:${digits.length === 10 ? `+1${digits}` : `+${digits}`}`;
}
