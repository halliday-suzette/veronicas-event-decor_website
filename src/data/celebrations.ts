/**
 * Celebrations shown in the Celebrations section. Primary = large photo cards,
 * secondary = smaller text cards. `gentle` gives a card calm, muted styling.
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
  // TODO(veronica): need a real quinceañera photo
  {
    id: 'quinceanera',
    tier: 'primary',
    name: { en: 'Quinceañeras / Mis XV', es: 'Mis XV / Quinceañeras' },
    description: {
      en: 'A once-in-a-lifetime celebration deserves pieces as special as she is.',
      es: 'Una celebración única merece piezas tan especiales como ella.',
    },
    image: 'quinceanera.jpg',
  },
  // TODO(veronica): need a real sweet 16 photo
  {
    id: 'sweet-16',
    tier: 'primary',
    name: { en: 'Sweet 16s', es: 'Sweet 16' },
    description: {
      en: "A milestone birthday with a photo-ready rustic look she'll love.",
      es: 'Un cumpleaños inolvidable con un look rústico perfecto para las fotos.',
    },
    image: 'sweet-16.jpg',
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
      en: 'From first birthdays to milestone years, parties your guests will talk about.',
      es: 'Desde el primer añito hasta los grandes cumpleaños, fiestas de las que todos van a hablar.',
    },
    image: 'wood-backdrop-birthday-salud.jpg',
  },

  // ---- Secondary ----------------------------------------------------------------------------
  {
    id: 'wedding',
    tier: 'secondary',
    name: { en: 'Weddings', es: 'Bodas' },
    description: {
      en: 'Warm, romantic rustic touches for your reception and sweetheart table.',
      es: 'Detalles rústicos, cálidos y románticos para tu recepción y mesa de novios.',
    },
    image: 'barrels-umbrellas-patio-dusk.jpg',
  },
  {
    id: 'baby-shower',
    tier: 'secondary',
    name: { en: 'Baby Showers', es: 'Baby showers' },
    description: {
      en: 'Sweet, cozy setups to welcome your little one.',
      es: 'Montajes tiernos y acogedores para darle la bienvenida a tu bebé.',
    },
    image: 'balloons-cowgirl-shower.jpg',
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
