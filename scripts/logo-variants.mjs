// Generates derived brand files from the source logo (which is never modified).
//
//   npm run logo
//
// Output:
//   src/assets/images/logo-wordmark.png — the center "Veronica's event decor" band
//     (between the two gold bars, without filigree) for the header and mobile menu.
//   public/og-image.png                  — 1200×630 social-share image (logo on onyx).
//   public/favicon.ico, favicon-32.png, apple-touch-icon.png, icon-192.png, icon-512.png
//     — a gold "V" monogram on onyx. TODO: replace with a designer-made icon if one exists.
//
// The bars are detected automatically: rows where most of the width is opaque.
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const SOURCE = `${root}src/assets/images/logo.png`;
const WORDMARK = `${root}src/assets/images/logo-wordmark.png`;
const PUBLIC = `${root}public/`;

const ONYX = '#141210';

// ---------------------------------------------------------------------------
// 1. Wordmark crop
// ---------------------------------------------------------------------------
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
console.log(`Wordmark: rows ${top}–${bottom} → ${width}×${bottom - top + 1}`);

// ---------------------------------------------------------------------------
// 2. Open Graph image (1200×630): full logo on onyx with a warm glow
// ---------------------------------------------------------------------------
const glow = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="g" cx="50%" cy="50%" r="60%">
      <stop offset="0" stop-color="#e6aa1e" stop-opacity="0.28"/>
      <stop offset="0.55" stop-color="#a2680a" stop-opacity="0.08"/>
      <stop offset="1" stop-color="${ONYX}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${ONYX}"/>
  <rect width="1200" height="630" fill="url(#g)"/>
</svg>`);
const ogLogo = await sharp(SOURCE).resize({ width: 960 }).toBuffer();
const ogLogoMeta = await sharp(ogLogo).metadata();
await sharp(glow)
  .composite([
    {
      input: ogLogo,
      left: Math.round((1200 - 960) / 2),
      top: Math.round((630 - (ogLogoMeta.height ?? 540)) / 2),
    },
  ])
  .png({ compressionLevel: 9 })
  .toFile(`${PUBLIC}og-image.png`);
console.log('OG image: public/og-image.png');

// ---------------------------------------------------------------------------
// 3. Favicons: gold "V" monogram on an onyx tile
// ---------------------------------------------------------------------------
/** @param {number} size @param {number} radius corner radius as a fraction of size */
const monogram = (size, radius = 0.18) =>
  Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fcf27e"/>
      <stop offset="0.45" stop-color="#e6aa1e"/>
      <stop offset="1" stop-color="#a2680a"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="${radius * 100}" fill="${ONYX}"/>
  <rect x="4" y="4" width="92" height="92" rx="${radius * 100 - 3}" fill="none" stroke="url(#gold)" stroke-width="2.5"/>
  <text x="50" y="74" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif"
        font-style="italic" font-weight="700" font-size="70" fill="url(#gold)">V</text>
</svg>`);

const icons = [
  ['favicon-32.png', 32],
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
];
for (const [name, size] of icons) {
  // Apple applies its own rounded mask, so give it a square tile.
  const radius = name === 'apple-touch-icon.png' ? 0 : 0.18;
  await sharp(monogram(size, radius)).png().toFile(`${PUBLIC}${name}`);
}

// favicon.ico containing 16, 32 and 48px PNGs (the ICO format allows embedded PNGs).
const icoSizes = [16, 32, 48];
const pngs = await Promise.all(icoSizes.map((s) => sharp(monogram(s)).png().toBuffer()));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(pngs.length, 4);
let offset = 6 + 16 * pngs.length;
const entries = pngs.map((png, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(icoSizes[i] % 256, 0);
  e.writeUInt8(icoSizes[i] % 256, 1);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(png.length, 8);
  e.writeUInt32LE(offset, 12);
  offset += png.length;
  return e;
});
await writeFile(`${PUBLIC}favicon.ico`, Buffer.concat([header, ...entries, ...pngs]));
console.log('Favicons: public/favicon.ico, favicon-32.png, apple-touch-icon.png, icon-192/512.png');
