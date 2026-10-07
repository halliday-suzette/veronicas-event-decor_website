/**
 * Provider-agnostic event tracking (browser side). Sends to Plausible or GA4 if one is loaded
 * (see src/components/Analytics.astro + `analytics` in src/config/site.ts); otherwise does
 * nothing. Never pass personal data (names, emails, phone numbers, free text) as properties.
 */
type EventProps = Record<string, string>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: EventProps }) => void;
    gtag?: (command: 'event', event: string, params?: EventProps) => void;
  }
}

export function track(event: string, props: EventProps = {}): void {
  try {
    if (typeof window.plausible === 'function') window.plausible(event, { props });
    else if (typeof window.gtag === 'function') window.gtag('event', event, props);
  } catch {
    // Analytics must never break the page.
  }
}
