/** Shared types for the bilingual data files in src/data/. */
export type Locale = 'en' | 'es';

/** A piece of text in both languages. */
export type L10n = Record<Locale, string>;
