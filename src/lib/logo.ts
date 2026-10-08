/**
 * Full logo image settings (used by Logo.astro's `full` variant, in the footer).
 * The hero has no logo — the header wordmark is the brand mark above the fold.
 */
// logo-web.png is generated from logo.png by `npm run logo` (same artwork, lighter file).
import logoFull from '../assets/images/logo-web.png';

export const LOGO_FULL = {
  src: logoFull,
  formats: ['avif', 'webp'] as ('avif' | 'webp')[],
  widths: [320, 480, 640],
  // Footer: max-w-xs (320px) column.
  sizes: '320px',
  // Visually identical to the default for this metallic artwork, ~22% smaller.
  quality: 40,
};
