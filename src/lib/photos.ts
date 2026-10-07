/**
 * Finds photo files in src/assets/photos/ by filename (see src/data/photos.ts for the list).
 * Kept separate from the data file because import.meta.glob only works inside Vite/Astro.
 */
import type { ImageMetadata } from 'astro';
import { photos, type PhotoInfo } from '../data/photos';
import type { L10n, Locale } from '../data/types';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  { eager: true },
);

const byName = new Map(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!, mod.default]),
);

export interface ResolvedPhoto {
  /** The image, or undefined if the file hasn't been added yet. */
  src: ImageMetadata | undefined;
  alt: string;
  position: string | undefined;
}

/** Looks up a photo by filename and returns its image (if present) and alt text. */
export function resolvePhoto(
  filename: string | undefined,
  lang: Locale,
  altOverride?: L10n,
): ResolvedPhoto | undefined {
  if (!filename) return undefined;
  const info: PhotoInfo | undefined = photos[filename];
  return {
    src: byName.get(filename),
    alt: altOverride?.[lang] ?? info?.alt[lang] ?? '',
    position: info?.position,
  };
}

/** Filenames listed in src/data/photos.ts whose files don't exist yet. */
export function missingPhotos(): string[] {
  return Object.keys(photos).filter((name) => !byName.has(name));
}
