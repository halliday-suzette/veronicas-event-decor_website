/**
 * Celebrations shown in the Celebrations section. Primary = large cards (a photo card when
 * `image` is set and the file exists, otherwise an elegant text card with a line icon);
 * secondary = smaller text cards. `gentle` gives a card calm, muted styling.
 *
 * To add a photo later: put it in src/assets/photos/, list it with alt text in
 * src/data/photos.ts, and set `image: 'filename.jpg'` here.
 */
import type { L10n } from './types';

export interface Celebration {
  id: string;
  tier: 'primary' | 'secondary';
  name: L10n;
  description: L10n;
  /** Filename in src/assets/photos/. */
  image?: string;
  imageAlt?: L10n;
  gentle?: boolean;
}

export const celebrations: Celebration[] = [
  // ---- Primary ------------------------------------------------------------------------------
  // No photo for now (shown as a text card). Set `image` when a photo is ready.
  {
    id: 'quinceanera',
    tier: 'primary',
    name: { en: 'Quinceañeras', es: 'Quinceañeras' },
    description: {
      en: 'A once-in-a-lifetime celebration deserves pieces as special as she is.',
      es: 'Una celebración única merece piezas tan especiales como ella.',
    },
  },
  {
    id: 'sweet-16',
    tier: 'primary',
    name: { en: 'Sweet 16s', es: 'Sweet 16' },
    description: {
      en: 'A milestone birthday with a photo-ready rustic look, perfect for a cowgirl or western-theme sweet 16.',
      es: 'Un cumpleaños inolvidable con un look rústico perfecto para las fotos, ideal para un sweet 16 vaquero o western.',
    },
    image: 'sweet-16-light-wood-backdrop.jpg',
  },
  {
    id: 'graduation',
    tier: 'primary',
    name: { en: 'Graduations', es: 'Graduaciones' },
    description: {
      en: 'Celebrate all that hard work with a setup worthy of the moment.',
      es: 'Celebra todo ese esfuerzo con un montaje a la altura del momento.',
    },
    image: 'balloons-graduation-arch.jpg',
  },
  {
    id: 'birthday',
    tier: 'primary',
    name: { en: 'Birthdays', es: 'Cumpleaños' },
    description: {
      en: 'From cowboy and "My First Rodeo" birthdays to milestone years, parties your guests will talk about.',
      es: 'Desde fiestas vaqueras y primeros añitos con temática de rodeo hasta los grandes cumpleaños, fiestas de las que todos van a hablar.',
    },
    image: 'wood-backdrop-birthday-salud.jpg',
  },

  // ---- Secondary ----------------------------------------------------------------------------
  {
    id: 'wedding',
    tier: 'secondary',
    name: { en: 'Weddings', es: 'Bodas' },
    description: {
      en: 'Warm, romantic rustic western and farmhouse touches for your reception and sweetheart table.',
      es: 'Detalles rústicos western y estilo rancho, cálidos y románticos, para tu recepción y mesa de novios.',
    },
    image: 'wedding-floral-arch-barrel-bar.jpg',
  },
  {
    id: 'baby-shower',
    tier: 'secondary',
    name: { en: 'Baby Showers', es: 'Baby showers' },
    description: {
      en: 'Sweet, cozy cowboy, cowgirl and farmhouse setups to welcome your little one.',
      es: 'Montajes tiernos y acogedores, vaqueros o estilo rancho, para darle la bienvenida a tu bebé.',
    },
    // The cowgirl shower photo never arrived; the bee shower is Veronica's own baby shower setup.
    image: 'balloons-bee-backdrop-pedestals.jpg',
  },
  {
    id: 'celebration-of-life',
    tier: 'secondary',
    gentle: true,
    name: { en: 'Celebration of Life', es: 'Celebración de vida' },
    description: {
      en: "A warm, beautiful space to gather, share memories, and honor someone you love. We'll take care of the details so you and your family can simply be together.",
      es: 'Un espacio cálido y bonito para reunirse, compartir recuerdos y honrar a esa persona que tanto quieres. Nosotros nos encargamos de los detalles para que tú y tu familia puedan estar juntos.',
    },
  },
  {
    id: 'more',
    tier: 'secondary',
    name: {
      en: 'Anniversaries, Corporate & More',
      es: 'Aniversarios, eventos de empresa y más',
    },
    description: {
      en: "Whatever you're celebrating, we'd love to be part of it.",
      es: 'Sea lo que sea que celebres, nos encantaría ser parte.',
    },
  },
];
