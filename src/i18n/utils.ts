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

/** Path of the home page for a language: `/` for English, `/es/` for Spanish. */
export function localePath(lang: Lang, hash = ''): string {
  const base = lang === defaultLang ? '/' : `/${lang}/`;
  return hash ? `${base}#${hash.replace(/^#/, '')}` : base;
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
