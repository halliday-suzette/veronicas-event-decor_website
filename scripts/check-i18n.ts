// Checks the bilingual copy:
//   1. en.ts and es.ts have exactly the same keys (and the same array lengths)
//   2. every bilingual entry in src/data/ has non-empty English AND Spanish text
//   3. customer-facing text avoids banned words ("we style", "styled", "styling", "estiliz…", "decoramos", "charro/charra")
//
//   npm run check:i18n
//
// Runs with Node's built-in TypeScript support (Node 22.18+ / 24).
import { en } from '../src/i18n/en.ts';
import { es } from '../src/i18n/es.ts';
import { inventory, categories } from '../src/data/inventory.ts';
import { celebrations } from '../src/data/celebrations.ts';
import { faq } from '../src/data/faq.ts';
import { photos } from '../src/data/photos.ts';

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };
const problems: string[] = [];

/** Flattens an object into "a.b[0].c" → value pairs. */
function flatten(value: Json, prefix = '', out = new Map<string, Json>()) {
  if (Array.isArray(value)) {
    out.set(`${prefix}.length`, value.length);
    value.forEach((v, i) => flatten(v, `${prefix}[${i}]`, out));
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) flatten(v, prefix ? `${prefix}.${k}` : k, out);
  } else {
    out.set(prefix, value);
  }
  return out;
}

// 1. Key diff ---------------------------------------------------------------------------
const enKeys = flatten(en as unknown as Json);
const esKeys = flatten(es as unknown as Json);
for (const key of enKeys.keys()) if (!esKeys.has(key)) problems.push(`es.ts is missing: ${key}`);
for (const key of esKeys.keys()) if (!enKeys.has(key)) problems.push(`en.ts is missing: ${key}`);
for (const [key, value] of enKeys)
  if (key.endsWith('.length') && esKeys.has(key) && esKeys.get(key) !== value)
    problems.push(`different list length at ${key}: en ${value}, es ${esKeys.get(key)}`);
for (const [key, value] of [...enKeys, ...esKeys])
  if (value === '') problems.push(`empty string at ${key}`);

// 2. Data files: both languages filled in -------------------------------------------------
type L10n = { en: string; es: string };
const checkL10n = (where: string, text: L10n | undefined) => {
  if (!text) return;
  if (!text.en?.trim()) problems.push(`${where}: English text missing`);
  if (!text.es?.trim()) problems.push(`${where}: Spanish text missing`);
};
for (const c of categories) checkL10n(`category ${c.id}`, c.label);
for (const item of inventory) {
  checkL10n(`inventory ${item.id}.name`, item.name);
  checkL10n(`inventory ${item.id}.description`, item.description);
  checkL10n(`inventory ${item.id}.imageAlt`, item.imageAlt);
  checkL10n(`inventory ${item.id}.dimensions`, item.dimensions);
  if (item.image && !photos[item.image])
    problems.push(`inventory ${item.id}: image "${item.image}" is not listed in photos.ts`);
}
for (const c of celebrations) {
  checkL10n(`celebration ${c.id}.name`, c.name);
  checkL10n(`celebration ${c.id}.description`, c.description);
  if (c.image && !photos[c.image])
    problems.push(`celebration ${c.id}: image "${c.image}" is not listed in photos.ts`);
}
for (const f of faq) {
  checkL10n(`faq ${f.id}.question`, f.question);
  checkL10n(`faq ${f.id}.answer`, f.answer);
}
for (const [file, info] of Object.entries(photos)) checkL10n(`photo ${file}.alt`, info.alt);

// 3. Brand voice ---------------------------------------------------------------------------
// The service is renting + delivering + setting up, never "styling" (style as a noun/adjective,
// e.g. "What styles do you offer?", is fine). "charro/charra" is not used for this brand.
// "Mis XV" / "XV años" are replaced by "quinceañera(s)" everywhere.
const banned = /\b(we style|styled|styling|estiliz\w*|decoramos|charr[oa]s?|xv)\b/i;
/** Both languages of each bilingual entry, labeled with where it came from. */
const both = (where: string, ...texts: (L10n | undefined)[]): [string, string][] =>
  texts.flatMap((t) =>
    t
      ? ([
          [where, t.en],
          [where, t.es],
        ] as [string, string][])
      : [],
  );
const allText: [string, string][] = [
  ...([...enKeys, ...esKeys].filter(([, v]) => typeof v === 'string') as [string, string][]),
  ...categories.flatMap((c) => both(`category ${c.id}`, c.label)),
  ...inventory.flatMap((i) => both(`inventory ${i.id}`, i.name, i.description, i.imageAlt)),
  ...celebrations.flatMap((c) => both(`celebration ${c.id}`, c.name, c.description, c.imageAlt)),
  ...faq.flatMap((f) => both(`faq ${f.id}`, f.question, f.answer)),
  ...Object.entries(photos).flatMap(([file, info]) => both(`photo ${file} alt`, info.alt)),
];
for (const [where, text] of allText)
  if (banned.test(text)) problems.push(`brand voice: "${text.match(banned)![0]}" in ${where}`);

// Report -------------------------------------------------------------------------------------
if (problems.length) {
  console.error(`✗ ${problems.length} problem(s):\n  - ${problems.join('\n  - ')}`);
  process.exit(1);
}
console.log(
  `✓ en/es keys match (${enKeys.size} entries), data files are fully bilingual ` +
    `(${inventory.length} items, ${celebrations.length} celebrations, ${faq.length} FAQs, ` +
    `${Object.keys(photos).length} photos), no banned brand-voice words.`,
);
