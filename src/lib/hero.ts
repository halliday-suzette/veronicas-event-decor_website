/**
 * Hero background photo settings, shared by Hero.astro and the <head> preload so both use the
 * exact same responsive URLs (no double download).
 *
 * The photo only shows from 640px up (on phones it's barely visible under the dark overlay, and
 * the logo is the LCP element there), so its <source> and preload carry this media query and
 * phones never request it. On tablets/desktops it's the largest element → eager + high priority.
 */
import { getImage } from 'astro:assets';
import { heroPhoto } from '../data/photos';
import { fitSize, resolvePhoto } from './photos';

export const HERO_BG_MEDIA = '(min-width: 640px)';
export const HERO_BG_SIZES = '100vw';

export async function heroBackground() {
  const photo = resolvePhoto(heroPhoto, 'en');
  if (!photo?.src) return undefined;
  const size = fitSize(photo.src, 1920, 1080, [640, 960, 1280, 1920]);
  const image = await getImage({
    src: photo.src,
    width: size.width,
    height: size.height,
    widths: size.widths,
    sizes: HERO_BG_SIZES,
    format: 'webp',
    fit: 'cover',
    // Sits under an 80% dark overlay, so a lighter file looks identical.
    quality: 55,
  });
  return {
    srcset: image.srcSet.attribute,
    sizes: HERO_BG_SIZES,
    media: HERO_BG_MEDIA,
    width: size.width,
    height: size.height,
  };
}
