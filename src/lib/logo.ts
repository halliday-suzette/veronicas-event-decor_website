/**
 * Full logo image settings, shared by Logo.astro and the <head> preload so the preloaded
 * responsive image is exactly the one the hero renders (same URLs → no double download).
 *
 * The hero logo is the page's LCP element (the background photo is decorative, darkened and
 * skipped on phones), so it's the image that gets preloaded with high priority.
 */
import { getImage } from 'astro:assets';
// logo-web.png is generated from logo.png by `npm run logo` (same artwork, lighter file).
import logoFull from '../assets/images/logo-web.png';

export const LOGO_FULL = {
  src: logoFull,
  formats: ['avif', 'webp'] as ('avif' | 'webp')[],
  widths: [360, 560, 720, 960, 1280, 1440],
  sizes: '(min-width: 1280px) 640px, (min-width: 1024px) 50vw, calc(100vw - 2.5rem)',
  // Visually identical to the default for this metallic artwork, ~22% smaller (it's the LCP image).
  quality: 40,
};

/** `<link rel="preload">` attributes for the hero logo (AVIF; `type` lets other browsers skip it). */
export async function logoPreload() {
  const image = await getImage({
    src: LOGO_FULL.src,
    widths: LOGO_FULL.widths,
    sizes: LOGO_FULL.sizes,
    format: 'avif',
    quality: LOGO_FULL.quality,
  });
  return { type: 'image/avif', srcset: image.srcSet.attribute, sizes: LOGO_FULL.sizes };
}
