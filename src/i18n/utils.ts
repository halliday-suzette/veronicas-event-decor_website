import { en, type Translations } from './en';
import { es } from './es';

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

const dictionaries: Record<Lang, Translations> = { en, es };

/**
 * Returns the full, typed copy for a language: `const t = useTranslations(lang); t.hero.title`.
 * Every key is type-checked, so a typo is a build error rather than missing text.
 */
export function useTranslations(lang: Lang): Translations {
  return dictionaries[lang];
}

/** Narrows Astro's `currentLocale` (or any string) to a supported language. */
export function toLang(value: string | undefined): Lang {
  return value && value in languages ? (value as Lang) : defaultLang;
}

/**
 * Prefixes a root-relative path with the site's base path, so links keep working when the
 * site is served from a sub-folder (e.g. GitHub Pages: /veronicas-event-decor_website/).
 * `withBase('/og-image.png')` → `/og-image.png` locally, `/repo-name/og-image.png` on Pages.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** Absolute URL for a root-relative path, including the base path. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  return new URL(withBase(path), site).href;
}

/** Path of the home page for a language: `/` for English, `/es/` for Spanish (plus base path). */
export function localePath(lang: Lang, hash = ''): string {
  const path = withBase(lang === defaultLang ? '/' : `/${lang}/`);
  return hash ? `${path}#${hash.replace(/^#/, '')}` : path;
}

/** Absolute URL of a language's home page, for canonical and hreflang tags. */
export function localeUrl(lang: Lang, site: URL | undefined): string {
  return new URL(localePath(lang), site).href;
}

/** The language a visitor would switch to from the toggle. */
export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

/** Section ids used for anchor navigation, in page order. */
export const sectionIds = [
  'home',
  'about',
  'rentals',
  'events',
  'packages',
  'service-area',
  'gallery',
  'quote',
] as const;

export type SectionId = (typeof sectionIds)[number];

/** Header / footer navigation links (Home is reached via the logo). */
export function navLinks(t: Translations): { id: SectionId; label: string }[] {
  return [
    { id: 'about', label: t.nav.about },
    { id: 'rentals', label: t.nav.rentals },
    { id: 'events', label: t.nav.events },
    { id: 'packages', label: t.nav.packages },
    { id: 'service-area', label: t.nav.serviceArea },
    { id: 'gallery', label: t.nav.gallery },
  ];
}
