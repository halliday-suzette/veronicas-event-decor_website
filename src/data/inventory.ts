/**
 * Verónica's rental inventory — the single source of truth for the Signature Barrel Tables
 * section, the Rentals catalog, the Add-Ons section and the quote form's rentals checklist.
 *
 * To add an item: copy an existing entry, give it a unique `id`, pick a `category`, and write
 * the name and description in both languages. Set `published: false` to hide an item
 * everywhere without deleting it. Photos: put the file in src/assets/photos/ and set `image`.
 */
import type { L10n } from './types';

export type Category = 'barrel-tables' | 'bars-carts' | 'backdrops' | 'western-decor' | 'add-ons';

export interface InventoryItem {
  id: string;
  category: Category;
  name: L10n;
  description: L10n;
  /** Filename in src/assets/photos/ — omit until a photo exists. */
  image?: string;
  /** Overrides the photo's default alt text from src/data/photos.ts. */
  imageAlt?: L10n;
  finishes?: ('light' | 'dark')[];
  /** Shown in the Signature Barrel Tables section (and left out of the catalog). */
  featured?: boolean;
  /** Appears in the quote form's rentals checklist. */
  showInForm: boolean;
  /** false = hidden everywhere. */
  published: boolean;
  // TODO(veronica): add quantity, dimensions when inventory list arrives
  /** How many are available. The spec row only renders when this or `dimensions` is set. */
  quantity?: number;
  /** e.g. { en: '42 in tall', es: '107 cm de alto' }. */
  dimensions?: L10n;
}

export const categories: { id: Category; label: L10n }[] = [
  {
    id: 'barrel-tables',
    label: { en: 'Barrel Tables & Seating', es: 'Mesas de barril y asientos' },
  },
  { id: 'bars-carts', label: { en: 'Bars & Carts', es: 'Barras y carritos' } },
  { id: 'backdrops', label: { en: 'Backdrops & Photo Walls', es: 'Backdrops y muros para fotos' } },
  {
    id: 'western-decor',
    label: { en: 'Western Décor & Props', es: 'Decoración y accesorios western' },
  },
  { id: 'add-ons', label: { en: 'Add-Ons', es: 'Extras para tu fiesta' } },
];

export const inventory: InventoryItem[] = [
  // ---- Barrel Tables & Seating -------------------------------------------------------------
  {
    id: 'barrel-cocktail-tables',
    category: 'barrel-tables',
    name: { en: 'Whiskey Barrel Cocktail Tables', es: 'Mesas de barril altas' },
    description: {
      en: 'Tall, handcrafted barrel tables, perfect for mingling, toasts and dessert plates.',
      es: 'Mesas de barril hechas a mano, perfectas para convivir, brindar y disfrutar el postre.',
    },
    image: 'barrels-umbrellas-backyard.jpg',
    finishes: ['light', 'dark'],
    featured: true,
    showInForm: true,
    published: true,
  },
  {
    id: 'barstools',
    category: 'barrel-tables',
    name: { en: 'Matching Barstools', es: 'Bancos altos' },
    description: {
      en: 'Black metal barstools with warm wood seats that pair perfectly with our barrel tables.',
      es: 'Bancos de metal negro con asiento de madera que combinan perfecto con nuestras mesas de barril.',
    },
    image: 'barrels-stools-lawn.jpg',
    showInForm: true,
    published: true,
  },
  {
    id: 'patio-umbrellas',
    category: 'barrel-tables',
    name: { en: 'Patio Umbrellas', es: 'Sombrillas' },
    description: {
      en: 'Shade for your guests at outdoor celebrations.',
      es: 'Sombra para tus invitados en fiestas al aire libre.',
    },
    showInForm: true,
    published: true,
  },

  // ---- Bars & Carts ---------------------------------------------------------------------
  {
    id: 'barrel-bar',
    category: 'bars-carts',
    name: { en: 'Barrel Bar', es: 'Barra de barriles' },
    description: {
      en: 'Two whiskey barrels topped with a thick wood plank, great for drinks, desserts or a buffet.',
      es: 'Dos barriles con una tabla gruesa de madera, ideal para bebidas, postres o buffet.',
    },
    image: 'barrel-bar-wagon-wheel.jpg',
    showInForm: true,
    published: true,
  },
  {
    id: 'longhorn-bar',
    category: 'bars-carts',
    name: { en: 'Western Longhorn Bar', es: 'Barra western con cuernos' },
    description: {
      en: 'A handcrafted wood bar with a longhorn accent that steals the show.',
      es: 'Una barra de madera hecha a mano con cuernos de res que se roba las miradas.',
    },
    image: 'longhorn-bar.jpg',
    showInForm: true,
    published: true,
  },
  {
    id: 'dessert-cart',
    category: 'bars-carts',
    name: { en: 'Rustic Dessert Cart', es: 'Carrito de postres rústico' },
    description: {
      en: 'A wood cart with a peaked roof, wagon wheel and glowing Edison bulb, made for desserts and treats.',
      es: 'Un carrito de madera con techito, rueda de carreta y foquito encendido, hecho para tus postres y antojitos.',
    },
    image: 'dessert-cart-night.jpg',
    showInForm: true,
    published: true,
  },
  {
    id: 'farmhouse-dessert-table',
    category: 'bars-carts',
    name: { en: 'Rustic Dessert Table', es: 'Mesa de postres rústica' },
    description: {
      en: 'A sturdy farmhouse wood table for your cake and sweets.',
      es: 'Una mesa de madera estilo rancho, firme y bonita, para tu pastel y dulces.',
    },
    image: 'balloons-cowgirl-shower.jpg',
    showInForm: true,
    published: true,
  },
  {
    id: 'salud-display',
    category: 'bars-carts',
    name: { en: '"Salud" Drink Display', es: 'Exhibidor "Salud"' },
    description: {
      en: 'A tiered wood display for shots or drinks so guests can grab and toast.',
      es: 'Un exhibidor de madera de varios niveles para shots o bebidas, listo para el brindis.',
    },
    image: 'wood-backdrop-birthday-salud.jpg',
    showInForm: true,
    published: true,
  },

  // ---- Backdrops & Photo Walls ------------------------------------------------------------
  {
    id: 'wood-backdrop',
    category: 'backdrops',
    name: { en: 'Rustic Wood Backdrop', es: 'Backdrop de madera rústica' },
    description: {
      en: 'A rich, dark-stained wood wall that frames your cake table, head table or photo moments.',
      es: 'Un muro de madera en tono oscuro que enmarca tu mesa de pastel, mesa principal o tus fotos.',
    },
    image: 'wood-backdrop-birthday-salud.jpg',
    showInForm: true,
    published: true,
  },
  {
    id: 'arched-backdrops',
    category: 'backdrops',
    name: { en: 'Arched Wood Backdrops', es: 'Arcos de madera' },
    description: {
      en: 'Elegant wood arches that add height and a modern western feel.',
      es: 'Arcos elegantes de madera que le dan altura y un toque western moderno a tu fiesta.',
    },
    image: 'arched-backdrops.jpg',
    showInForm: true,
    published: true,
  },
  {
    id: 'saloon-facade',
    category: 'backdrops',
    name: { en: 'Western Saloon Facade', es: 'Fachada de cantina western' },
    description: {
      en: 'A full saloon storefront with swinging doors, perfect for photos and themed parties.',
      es: 'Una fachada de "saloon" con puertitas de vaivén, perfecta para fotos y fiestas temáticas.',
    },
    image: 'saloon-facade.jpg',
    showInForm: true,
    published: true,
  },
  {
    id: 'wanted-frame',
    category: 'backdrops',
    name: { en: '"Wanted" Photo Frame', es: 'Marco "Se busca" para fotos' },
    description: {
      en: 'A fun, life-size "Wanted" poster frame your guests will line up for.',
      es: 'Un marco tamaño real estilo cartel de "Se busca" que a todos les va a encantar.',
    },
    image: 'saloon-facade-wanted.jpg',
    showInForm: true,
    published: true,
  },

  // ---- Western Décor & Props (one combined form option instead of each prop) ----------------
  {
    id: 'wagon-wheels',
    category: 'western-decor',
    name: { en: 'Wagon Wheels', es: 'Ruedas de carreta' },
    description: {
      en: 'Classic wagon wheels that bring instant ranch charm to entrances and backdrops.',
      es: 'Ruedas de carreta clásicas que le dan ese toque de rancho a la entrada o al backdrop.',
    },
    showInForm: false,
    published: true,
  },
  {
    id: 'hay-bales',
    category: 'western-decor',
    name: { en: 'Hay Bales', es: 'Pacas de paja' },
    description: {
      en: 'Rustic hay bales for extra seating or a cozy touch around your setup.',
      es: 'Pacas de paja rústicas para sentarse o darle un toque acogedor a tu montaje.',
    },
    showInForm: false,
    published: true,
  },
  {
    id: 'cactus-decor',
    category: 'western-decor',
    name: {
      en: 'Cactus Accents (potted & cutouts)',
      es: 'Cactus decorativos (en maceta y siluetas)',
    },
    description: {
      en: 'Potted cactus and cactus cutouts that bring a little desert charm to your table or backdrop.',
      es: 'Cactus en maceta y siluetas de cactus que le dan un toque del desierto a tu mesa o backdrop.',
    },
    image: 'wood-backdrop-cactus.jpg',
    showInForm: false,
    published: true,
  },
  {
    id: 'longhorns-skulls',
    category: 'western-decor',
    name: { en: 'Longhorns & Steer Skulls', es: 'Cuernos y cráneos de res' },
    description: {
      en: 'Longhorns and steer skulls for a true western touch.',
      es: 'Cuernos y cráneos de res para un toque western auténtico.',
    },
    showInForm: false,
    published: true,
  },
  {
    id: 'horse-horseshoe-cutouts',
    category: 'western-decor',
    name: { en: 'Horse & Horseshoe Cutouts', es: 'Siluetas de caballo y herradura' },
    description: {
      en: 'Wood horse and horseshoe cutouts that give your backdrop a ranch feel.',
      es: 'Siluetas de madera de caballo y herradura para que tu backdrop se sienta de rancho.',
    },
    image: 'barrel-bar-horse-backdrop.jpg',
    showInForm: false,
    published: true,
  },
  {
    id: 'lanterns-crates',
    category: 'western-decor',
    name: { en: 'Lanterns & Wood Crates', es: 'Faroles y cajas de madera' },
    description: {
      en: 'Lanterns and wood crates for warm, rustic finishing touches.',
      es: 'Faroles y cajas de madera para los toques finales, cálidos y rústicos.',
    },
    showInForm: false,
    published: true,
  },
  {
    id: 'cake-stands',
    category: 'western-decor',
    name: { en: 'Wood Cake Stands & Risers', es: 'Bases para pastel y elevadores de madera' },
    description: {
      en: 'Wood cake stands and risers that give your cake and sweets a place to shine.',
      es: 'Bases y elevadores de madera para que tu pastel y tus dulces luzcan bonitos.',
    },
    showInForm: false,
    published: true,
  },

  // ---- Add-Ons --------------------------------------------------------------------------------
  {
    id: 'balloon-garlands',
    category: 'add-ons',
    name: { en: 'Balloon Garlands', es: 'Arcos y guirnaldas de globos' },
    description: {
      en: 'Custom garlands in your colors to complete your rental setup.',
      es: 'Arcos personalizados en tus colores para completar tu montaje.',
    },
    image: 'balloons-sunflower-gold.jpg',
    showInForm: true,
    published: true,
  },
  // TODO(veronica): photo booth type (e.g. selfie, 360, printed photos)?
  // TODO(veronica): what's included (props, backdrop, prints, digital copies, attendant)?
  // TODO(veronica): any other details to mention (rental time, setup space, power needs)?
  // Until confirmed, the description stays warm and general — no specific claims.
  {
    id: 'photo-booth',
    category: 'add-ons',
    name: { en: 'Photo Booth', es: 'Cabina de fotos' },
    description: {
      en: 'A fun photo booth so your guests can capture memories of your celebration together.',
      es: 'Una cabina de fotos divertida para que tus invitados se lleven recuerdos de tu fiesta.',
    },
    image: 'photo-booth.jpg',
    showInForm: true,
    published: true,
  },
  {
    id: 'neon-signs',
    category: 'add-ons',
    name: { en: 'Neon Signs', es: 'Letreros de neón' },
    description: {
      en: 'Glowing signs like "Happy Birthday" for that perfect photo.',
      es: 'Letreros luminosos como "Happy Birthday" para la foto perfecta.',
    },
    image: 'wood-backdrop-birthday-salud.jpg',
    showInForm: true,
    published: true,
  },
];

/** Published items only. */
export const publishedItems = inventory.filter((item) => item.published);

/** The item shown in the Signature Barrel Tables section. */
export const featuredItem = publishedItems.find((item) => item.featured);
