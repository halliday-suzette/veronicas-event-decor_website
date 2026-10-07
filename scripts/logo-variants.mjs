// Generates derived logo files from the source logo (which is never modified).
//
//   npm run logo
//
// Output:
//   src/assets/images/logo-wordmark.png — the center "Veronica's event decor" band
//   (between the two gold bars, without filigree) for the header and mobile menu.
//
// The bars are detected automatically: rows where most of the width is opaque.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const SOURCE = `${root}src/assets/images/logo.png`;
const WORDMARK = `${root}src/assets/images/logo-wordmark.png`;

const { data, info } = await sharp(SOURCE)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width, height } = info;

/** Rows where more than 85% of pixels are opaque — the logo's horizontal gold bars. */
const barRows = [];
for (let y = 0; y < height; y++) {
  let opaque = 0;
  for (let x = 0; x < width; x++) if (data[(y * width + x) * 4 + 3] > 200) opaque++;
  if (opaque / width > 0.85) barRows.push(y);
}

let top = 0;
let bottom = height - 1;
if (barRows.length >= 2) {
  // First bar starts the band; the last bar ends it. Keep both bars, plus a little padding.
  const pad = Math.round(height * 0.01);
  top = Math.max(0, barRows[0] - pad);
  bottom = Math.min(height - 1, barRows[barRows.length - 1] + pad);
} else {
  console.warn('Could not detect the gold bars; using the middle 50% of the logo.');
  top = Math.round(height * 0.25);
  bottom = Math.round(height * 0.75);
}

await sharp(SOURCE)
  .extract({ left: 0, top, width, height: bottom - top + 1 })
  .png({ compressionLevel: 9 })
  .toFile(WORDMARK);

console.log(`Wordmark: rows ${top}–${bottom} → ${width}×${bottom - top + 1} → ${WORDMARK}`);
