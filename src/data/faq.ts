/**
 * FAQ — used by both the FAQ accordion and the FAQPage structured data (JSON-LD),
 * so the two never drift apart.
 */
import type { L10n } from './types';

export interface FaqItem {
  id: string;
  question: L10n;
  answer: L10n;
}

export const faq: FaqItem[] = [
  // TODO(veronica): any delivery fees or distance limits to mention?
  {
    id: 'delivery',
    question: { en: 'Do you deliver and set up?', es: '¿Llevan y montan todo?' },
    answer: {
      en: 'Yes. We deliver to your home or venue and set everything up for you.',
      es: 'Sí. Te llevamos todo a tu casa o salón de eventos y lo dejamos montado.',
    },
  },
  {
    id: 'areas',
    question: { en: 'What areas do you serve?', es: '¿A qué zonas dan servicio?' },
    answer: {
      en: "We're based in Pomona and serve the Inland Empire, San Bernardino County, Riverside County and Orange County. Not sure about your area? Just ask.",
      es: 'Estamos en Pomona y damos servicio en el Inland Empire, el condado de San Bernardino, el condado de Riverside y Orange County. ¿No sabes si llegamos a tu zona? Pregúntanos.',
    },
  },
  {
    id: 'finishes',
    question: {
      en: 'Can I choose light or dark barrel tables?',
      es: '¿Puedo escoger mesas claras u oscuras?',
    },
    answer: {
      en: 'Yes. Choose light, dark, or a mix of both to match your colors.',
      es: 'Sí. Escoge claras, oscuras o combínalas para que vayan con tus colores.',
    },
  },
  {
    id: 'western-theme',
    question: {
      en: 'Do you rent décor for western or cowboy-theme parties?',
      es: '¿Rentan decoración para fiestas vaqueras o temática western?',
    },
    answer: {
      // Wording adjusted from the brief (EN "Our western rentals", ES "Nuestro mobiliario") to keep
      // the primary keyword phrase at 3 visible uses per page.
      en: "Yes, that's our specialty. Our western rentals include handcrafted barrel tables, wood backdrops, a saloon facade, wagon wheels, hay bales and western props for cowboy, cowgirl and rodeo-theme celebrations.",
      es: '¡Sí, es nuestra especialidad! Nuestro mobiliario rústico western incluye mesas de barril hechas a mano, backdrops de madera, fachada de cantina, ruedas de carreta, pacas de paja y accesorios western para fiestas vaqueras y de rodeo.',
    },
  },
  {
    id: 'styles',
    question: { en: 'What styles do you offer?', es: '¿Qué estilos manejan?' },
    answer: {
      en: 'Our pieces work for rustic western, western farmhouse and modern western looks. Mix light and dark barrel tables, wood backdrops and add-ons like balloon garlands to match your colors and theme.',
      es: 'Nuestras piezas funcionan para looks rústico western, estilo rancho y western moderno. Combina mesas de barril claras y oscuras, backdrops de madera y extras como arcos de globos para que todo vaya con tus colores y tu tema.',
    },
  },
  // TODO(veronica): recommended lead time?
  {
    id: 'booking',
    question: {
      en: 'How far ahead should I book?',
      es: '¿Con cuánto tiempo debo reservar?',
    },
    answer: {
      en: 'As early as you can, especially for quinceañeras, graduations and spring and summer weekends. Dates fill up fast.',
      es: 'Lo antes posible, sobre todo para XV años, graduaciones y fines de semana de primavera y verano. Las fechas se llenan rápido.',
    },
  },
  {
    id: 'add-ons',
    question: {
      en: 'Can I add balloons or a photo booth?',
      es: '¿Puedo agregar globos o cabina de fotos?',
    },
    answer: {
      en: 'Absolutely. Balloon garlands, a photo booth and neon signs are available as add-ons to your rentals.',
      es: '¡Claro! Puedes agregar arcos de globos, cabina de fotos y letreros de neón a tu renta.',
    },
  },
  {
    id: 'outdoor',
    question: { en: 'Do you do outdoor events?', es: '¿Hacen eventos al aire libre?' },
    answer: {
      en: 'Yes. Our barrel tables are made for backyards, ranches and patios, and we have patio umbrellas for shade.',
      es: 'Sí. Nuestras mesas de barril son ideales para patios, ranchos y jardines, y tenemos sombrillas para dar sombra.',
    },
  },
  {
    id: 'spanish',
    question: { en: 'Do you speak Spanish?', es: '¿Hablan español?' },
    answer: {
      en: '¡Sí! We do business in English and Spanish, so plan your celebration in whichever feels most comfortable.',
      es: '¡Claro que sí! Te atendemos en inglés y en español, como te sientas más cómodo.',
    },
  },
];
