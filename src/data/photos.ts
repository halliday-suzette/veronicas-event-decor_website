/**
 * Photo registry. All photos are Verónica's own events and inventory and live in
 * src/assets/photos/. Drop a file in with the exact filename below and it appears on the
 * site automatically; until then a neutral wood-tone placeholder is shown.
 *
 * Never add stock or AI-generated images, photos with licensed characters (e.g. Winnie the
 * Pooh), or photos that show a child's name without the family's OK.
 * TODO(veronica): family OK? — balloons-rodeo-first-birthday.jpg shows a child's name;
 *   add it here (and to `galleryPhotos`) only once the family approves.
 *
 * TODO(veronica): send the photos listed below. The alt text was written from the photo
 *   descriptions — check each one against the real photo when it's added.
 */
import type { L10n } from './types';

export interface PhotoInfo {
  alt: L10n;
  /** CSS object-position / crop focus, e.g. 'left' to crop out something on the right. */
  position?: string;
}

export const photos: Record<string, PhotoInfo> = {
  'barrels-umbrellas-backyard.jpg': {
    alt: {
      en: 'Whiskey barrel cocktail tables with black barstools and patio umbrellas set up in a backyard',
      es: 'Mesas de barril altas con bancos negros y sombrillas en un patio',
    },
  },
  'barrels-umbrellas-patio-dusk.jpg': {
    alt: {
      en: 'Barrel cocktail tables and patio umbrellas on a patio at dusk',
      es: 'Mesas de barril altas y sombrillas en un patio al atardecer',
    },
  },
  'barrels-umbrellas-ranch.jpg': {
    alt: {
      en: 'Barrel cocktail tables with patio umbrellas set up at a ranch',
      es: 'Mesas de barril altas con sombrillas montadas en un rancho',
    },
  },
  'barrels-stools-lawn.jpg': {
    alt: {
      en: 'Whiskey barrel tables with black metal barstools on a lawn',
      es: 'Mesas de barril con bancos altos de metal negro sobre el pasto',
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
  'barrel-bar-wagon-wheel.jpg': {
    alt: {
      en: 'Barrel bar made from two whiskey barrels and a thick wood plank, with a wagon wheel beside it',
      es: 'Barra de dos barriles con una tabla gruesa de madera y una rueda de carreta a un lado',
    },
  },
  'barrel-bar-horse-backdrop.jpg': {
    alt: {
      en: 'Barrel bar in front of a backdrop with wood horse and horseshoe cutouts',
      es: 'Barra de barriles frente a un backdrop con siluetas de madera de caballo y herradura',
    },
  },
  'longhorn-bar.jpg': {
    alt: {
      en: 'Handcrafted wood bar with a longhorn accent',
      es: 'Barra de madera hecha a mano con cuernos de res',
    },
  },
  'dessert-cart-night.jpg': {
    alt: {
      en: 'Rustic wood dessert cart with a peaked roof and a glowing Edison bulb at night',
      es: 'Carrito de postres de madera con techito y un foquito encendido de noche',
    },
  },
  'dessert-cart-day.jpg': {
    alt: {
      en: 'Rustic wood dessert cart with a wagon wheel, set up during the day',
      es: 'Carrito de postres de madera con rueda de carreta, montado de día',
    },
  },
  'dessert-cart-greenery.jpg': {
    alt: {
      en: 'Rustic wood dessert cart surrounded by greenery',
      es: 'Carrito de postres de madera rodeado de plantas',
    },
    // Crops out the parked cars on the right of the photo.
    position: 'left',
  },
  'wood-backdrop-birthday-salud.jpg': {
    alt: {
      en: 'Dark wood backdrop at a birthday party with a "Salud" drink display and a neon sign',
      es: 'Backdrop de madera oscura en una fiesta de cumpleaños con el exhibidor "Salud" y un letrero de neón',
    },
  },
  'wood-backdrop-cactus.jpg': {
    alt: {
      en: 'Dark wood backdrop decorated with cactus accents',
      es: 'Backdrop de madera oscura decorado con cactus',
    },
  },
  'arched-backdrops.jpg': {
    alt: {
      en: 'Arched wood backdrops set up for a celebration',
      es: 'Arcos de madera montados para una fiesta',
    },
  },
  'saloon-facade-wanted.jpg': {
    alt: {
      en: 'Western saloon facade with a life-size "Wanted" photo frame',
      es: 'Fachada de cantina western con un marco "Se busca" tamaño real',
    },
  },
  'saloon-facade.jpg': {
    alt: {
      en: 'Western saloon storefront facade with swinging doors',
      es: 'Fachada de cantina western con puertitas de vaivén',
    },
  },
  'balloons-cowgirl-shower.jpg': {
    alt: {
      en: 'Cowgirl-themed baby shower with a balloon garland and a rustic wood dessert table',
      es: 'Baby shower vaquerita con arco de globos y una mesa de postres de madera',
    },
  },
  'balloons-sunflower-gold.jpg': {
    alt: {
      en: 'Balloon garland with sunflowers and gold accents',
      es: 'Arco de globos con girasoles y detalles dorados',
    },
  },
  'balloons-bee-column.jpg': {
    alt: {
      en: 'Bee-themed balloon column',
      es: 'Columna de globos con tema de abejitas',
    },
  },
  'balloons-graduation-arch.jpg': {
    alt: {
      en: 'Balloon arch set up for a graduation party',
      es: 'Arco de globos para una fiesta de graduación',
    },
  },
  'photo-booth.jpg': {
    alt: {
      en: 'Selfie photo booth set up at a party',
      es: 'Cabina de fotos tipo selfie montada en una fiesta',
    },
  },
  // TODO(veronica): need a real quinceañera photo (update alt text to match it)
  'quinceanera.jpg': {
    alt: {
      en: 'Quinceañera celebration set up with handcrafted barrel tables',
      es: 'Fiesta de XV años montada con mesas de barril hechas a mano',
    },
  },
  // TODO(veronica): need a real sweet 16 photo (update alt text to match it)
  'sweet-16.jpg': {
    alt: {
      en: 'Sweet 16 party set up with rustic western rentals',
      es: 'Fiesta de sweet 16 montada con mobiliario rústico western',
    },
  },
};

/** Gallery order (8–12 photos). */
export const galleryPhotos: string[] = [
  'barrels-umbrellas-patio-dusk.jpg',
  'barrels-umbrellas-ranch.jpg',
  'barrels-stools-lawn.jpg',
  'dessert-cart-night.jpg',
  'barrel-bar-horse-backdrop.jpg',
  'wood-backdrop-cactus.jpg',
  'saloon-facade-wanted.jpg',
  'dessert-cart-day.jpg',
  'balloons-sunflower-gold.jpg',
  'dessert-cart-greenery.jpg',
  'balloons-bee-column.jpg',
];
