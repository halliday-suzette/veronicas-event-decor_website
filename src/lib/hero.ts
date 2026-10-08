/**
 * Hero photo settings, shared by Hero.astro and the <head> preload so both use the exact same
 * responsive URLs (no double download).
 *
 * The hero photo (`heroPhoto` in src/data/photos.ts) is a real photo of Verónica's whiskey barrel
 * tables, shown on every screen size and cropped to 4:3. It's the page's LCP element, so it's
 * preloaded (AVIF) and rendered eager with high priority.
 */
import { getImage } from 'astro:assets';
import { heroPhoto } from '../data/photos';
import type { Locale } from '../data/types';
import { fitSize, resolvePhoto } from './photos';

/** Full width minus the page gutters on phones; capped at max-w-2xl on tablets; a column on desktop. */
export const HERO_SIZES =
  '(min-width: 1280px) 600px, (min-width: 1024px) 48vw, (min-width: 640px) 42rem, calc(100vw - 2.5rem)';

export async function heroImage(lang: Locale) {
  const photo = resolvePhoto(heroPhoto, lang);
  if (!photo?.src) return undefined;
  // Never upscales: the source is ~900px wide, so the largest file is the photo's own width.
  const size = fitSize(photo.src, 1200, 900, [480, 640, 800, 1200]);
  const options = {
    src: photo.src,
    width: size.width,
    height: size.height,
    widths: size.widths,
    sizes: HERO_SIZES,
    fit: 'cover' as const,
  };
  const [avif, webp] = await Promise.all([
    getImage({ ...options, format: 'avif', quality: 50 }),
    getImage({ ...options, format: 'webp', quality: 70 }),
  ]);
  return {
    alt: photo.alt,
    position: photo.position,
    width: size.width,
    height: size.height,
    sizes: HERO_SIZES,
    avifSrcset: avif.srcSet.attribute,
    webpSrcset: webp.srcSet.attribute,
    fallbackSrc: webp.src,
  };
}
