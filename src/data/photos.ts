/**
 * Photo registry. All photos are Verónica's own events and inventory and live in
 * src/assets/photos/ (metadata/GPS stripped before committing). A photo appears on the site
 * as soon as its file exists; until then the card shows as a finished text card.
 *
 * Never add stock or AI-generated images, photos with licensed characters (e.g. Winnie the
 * Pooh), or photos showing a child's name. balloons-rodeo-first-birthday.jpg is permanently
 * excluded.
 *
 * Alt text describes what is actually in each photo — update it if a photo is replaced.
 */
import type { L10n } from './types';

export interface PhotoInfo {
  alt: L10n;
  /** CSS object-position / crop focus, e.g. 'left' to crop out something on the right. */
  position?: string;
}

export const photos: Record<string, PhotoInfo> = {
  // ---- In src/assets/photos/ --------------------------------------------------------------
  'barrels-umbrellas-backyard.jpg': {
    alt: {
      en: 'Five whiskey barrel cocktail tables with black patio umbrellas and wood-seat barstools set up in a dirt backyard under a blue sky',
      es: 'Cinco mesas de barril altas con sombrillas negras y bancos altos con asiento de madera, montadas en un patio de tierra bajo un cielo azul',
    },
  },
  'barrels-umbrellas-patio-dusk.jpg': {
    alt: {
      en: 'Whiskey barrel cocktail tables with black umbrellas and wood-seat barstools lined up along a concrete walkway at dusk',
      es: 'Mesas de barril altas con sombrillas negras y bancos altos con asiento de madera, en fila sobre un pasillo de concreto al atardecer',
    },
  },
  'barrels-umbrellas-ranch.jpg': {
    alt: {
      en: 'Three whiskey barrel cocktail tables with black umbrellas set up on dirt beside a ranch corral',
      es: 'Tres mesas de barril altas con sombrillas negras, montadas sobre tierra junto a un corral de rancho',
    },
  },
  'barrels-stools-lawn.jpg': {
    alt: {
      en: 'Whiskey barrel cocktail tables with black umbrellas and metal barstools on a backyard lawn, with string lights along the fence',
      es: 'Mesas de barril altas con sombrillas negras y bancos altos de metal en el pasto de un patio, con series de luces en la barda',
    },
  },
  'barrel-bar-wagon-wheel.jpg': {
    alt: {
      en: 'Rustic western barrel bar made of two whiskey barrels and a thick wood plank, with a wagon wheel in front and a hay bale beside it',
      es: 'Barra western rústica de dos barriles de whiskey con una tabla gruesa de madera, una rueda de carreta al frente y una paca de paja a un lado',
    },
  },
  'wood-backdrop-birthday-salud.jpg': {
    alt: {
      en: 'Western birthday setup: dark wood backdrop with a "Happy Birthday" neon sign and coiled rope, a "Salud" drink display, a wagon wheel and a whiskey barrel cocktail table',
      es: 'Cumpleaños western: backdrop de madera oscura con letrero de neón "Happy Birthday" y una soga enrollada, el exhibidor "Salud", una rueda de carreta y una mesa de barril alta',
    },
  },
  'wood-backdrop-cactus.jpg': {
    alt: {
      en: 'Rustic western dark wood backdrop with coiled rope, a potted cactus, a hay bale, a wagon wheel and a whiskey barrel',
      es: 'Backdrop western rústico de madera oscura con una soga enrollada, un cactus en maceta, una paca de paja, una rueda de carreta y un barril de whiskey',
    },
  },
  'dessert-cart-night.jpg': {
    alt: {
      en: 'Rustic wood dessert cart with a peaked roof and a glowing Edison bulb at night, in front of a green wall with string lights and sunflowers',
      es: 'Carrito de postres de madera con techito y un foquito encendido de noche, frente a un muro verde con series de luces y girasoles',
    },
  },
  'dessert-cart-day.jpg': {
    alt: {
      en: 'Rustic wood dessert cart with a peaked roof, a wagon wheel and a side shelf, set up outside a venue entrance during the day',
      es: 'Carrito de postres de madera con techito, rueda de carreta y repisa lateral, montado de día frente a la entrada de un salón',
    },
  },
  'dessert-cart-greenery.jpg': {
    alt: {
      en: 'Rustic wood dessert cart with greenery along its roof and a wagon wheel, set up outdoors on a cloudy day',
      es: 'Carrito de postres de madera con follaje en el techito y una rueda de carreta, montado al aire libre en un día nublado',
    },
  },
  'balloons-graduation-arch.jpg': {
    alt: {
      en: 'Navy blue balloon arch with a black graduation cap, gold leaf accents and a "Congrats Graduate" banner',
      es: 'Arco de globos azul marino con un birrete negro, hojas doradas y un letrero de "Congrats Graduate"',
    },
  },
  'balloons-sunflower-gold.jpg': {
    alt: {
      en: 'White and gold balloon garland with sunflowers and a "Happy Birthday" neon sign over a rustic farmhouse dessert table with a burlap skirt, wood and gold cake stands and bundles of hay',
      es: 'Arco de globos blancos y dorados con girasoles y un letrero de neón "Happy Birthday" sobre una mesa de postres estilo rancho con faldón de yute, bases para pastel de madera y doradas y paja',
    },
  },
  'balloons-bee-column.jpg': {
    alt: {
      en: 'Bumble bee balloon garland in mustard, mauve and cream with sunflowers and smiling bee balloons',
      es: 'Arco de globos de abejitas en tonos mostaza, rosa palo y crema, con girasoles y globos de abejitas sonrientes',
    },
  },

  // ---- Not received yet (the item shows as a text card until the file is added) -----------
  // TODO(veronica): send these photos (update the alt text to match each real photo).
  'barrel-bar-horse-backdrop.jpg': {
    alt: {
      en: 'Barrel bar in front of a rustic wood backdrop with rope, a horse cutout and a horseshoe',
      es: 'Barra de barriles frente a un backdrop de madera rústica con soga, silueta de caballo y herradura',
    },
  },
  'longhorn-bar.jpg': {
    alt: {
      en: 'Handcrafted wood bar with a longhorn accent beside a whiskey barrel cocktail table and stools',
      es: 'Barra de madera hecha a mano con cuernos de res junto a una mesa de barril alta y bancos',
    },
  },
  'arched-backdrops.jpg': {
    alt: {
      en: 'Rustic wood arched backdrops set up for a celebration',
      es: 'Arcos de madera rústica montados para una fiesta',
    },
  },
  'saloon-facade-wanted.jpg': {
    alt: {
      en: 'Western saloon facade with swinging doors, a wagon wheel and a "Most Wanted" photo frame',
      es: 'Fachada de cantina western con puertitas de vaivén, rueda de carreta y marco "Se busca"',
    },
  },
  'saloon-facade.jpg': {
    alt: {
      en: 'Western saloon facade with swinging doors, hanging lights, a wagon wheel, a whiskey barrel and a guitar',
      es: 'Fachada de cantina western con puertitas de vaivén, lámparas colgantes, rueda de carreta, barril y guitarra',
    },
  },
  'balloons-cowgirl-shower.jpg': {
    alt: {
      en: 'Western cowgirl baby shower setup with balloon garland, dark wood backdrop and wagon wheel',
      es: 'Baby shower vaquerita western con arco de globos, backdrop de madera oscura y rueda de carreta',
    },
  },
  'photo-booth.jpg': {
    alt: {
      en: 'Photo booth set up at a party',
      es: 'Cabina de fotos montada en una fiesta',
    },
  },
  'barrel-table-light.jpg': {
    alt: {
      en: 'Whiskey barrel cocktail table in a light, honey-toned finish',
      es: 'Mesa de barril alta con acabado claro en tono miel',
    },
  },
  'barrel-table-dark.jpg': {
    alt: {
      en: 'Whiskey barrel cocktail table in a rich, dark finish',
      es: 'Mesa de barril alta con acabado oscuro',
    },
  },
};

/** Hero background photo; also the WebPage `primaryImageOfPage` in the structured data. */
export const heroPhoto = 'barrels-umbrellas-backyard.jpg';

/** Gallery order (8–12 photos). Only photos whose files exist are shown. */
export const galleryPhotos: string[] = [
  'barrels-umbrellas-patio-dusk.jpg',
  'dessert-cart-night.jpg',
  'wood-backdrop-cactus.jpg',
  'barrels-umbrellas-ranch.jpg',
  'balloons-sunflower-gold.jpg',
  'barrel-bar-wagon-wheel.jpg',
  'dessert-cart-day.jpg',
  'barrels-stools-lawn.jpg',
  'balloons-bee-column.jpg',
  'wood-backdrop-birthday-salud.jpg',
  'dessert-cart-greenery.jpg',
  'balloons-graduation-arch.jpg',
  // Add when received: 'barrel-bar-horse-backdrop.jpg', 'saloon-facade-wanted.jpg'
];
