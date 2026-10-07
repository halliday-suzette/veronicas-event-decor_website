import type { Translations } from './en';

/**
 * Spanish copy for the whole site (shown at /es/).
 *
 * Must have exactly the same keys as en.ts — the build fails if one is missing.
 * Keep the brand name "Veronica's Event Decor" in English. Do not translate the `icon`
 * values (they pick a drawing, not words). Values under `quote.options` are labels only:
 * the form always sends the English wording so Formspree emails stay consistent.
 */
export const es: Translations = {
  meta: {
    title: "Veronica's Event Decor | Renta de Decoración Western para Fiestas en Pomona",
    description:
      'Decoración y renta de mobiliario para fiestas en Pomona, de una mujer latina. Mesas de barril, backdrops rústicos y decoración western para quinceañeras, bodas y más. Cotización gratis.',
    ogLocale: 'es_US',
    ogImageAlt: "Logo dorado de Veronica's Event Decor sobre fondo negro",
  },

  skipLink: 'Saltar al contenido principal',
  logoAlt: "Logo de Veronica's Event Decor",

  nav: {
    label: 'Principal',
    about: 'Nosotros',
    rentals: 'Rentas',
    events: 'Eventos',
    packages: 'Paquetes',
    serviceArea: 'Área de servicio',
    gallery: 'Galería',
    quote: 'Cotización',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    menuTitle: 'Menú',
  },

  language: {
    label: 'Idioma',
    en: 'English',
    es: 'Español',
  },

  cta: {
    quote: 'Cotización gratis',
    rentals: 'Ver nuestras rentas',
  },

  instagram: {
    label: "Veronica's Event Decor en Instagram",
    follow: 'Síguenos en Instagram',
  },

  hero: {
    eyebrow: 'Negocio de una mujer latina · Decoración y renta para fiestas',
    title: 'Elegancia western rústica para tus celebraciones más inolvidables',
    subtitle:
      'Renta de mobiliario y decoración western, rústica y moderna, con un toque de lujo, para quinceañeras, sweet 16, bodas y cumpleaños en el Inland Empire, Orange County y Riverside.',
  },

  about: {
    eyebrow: 'Nuestra historia',
    title: 'Detalles personales para celebraciones con corazón',
    paragraphs: [
      "Veronica's Event Decor es un negocio propiedad de una mujer latina, con base en Pomona, California. Traemos un estilo western rústico y moderno, con un toque de lujo, a las celebraciones más importantes para tu familia: desde quinceañeras y sweet 16 hasta bodas y cumpleaños especiales.",
      'Cada evento recibe atención personal. Escuchamos tus ideas, te ayudamos a escoger las piezas ideales y nos encargamos de los detalles para que tu visión se haga realidad y tú puedas disfrutar el día con tu gente.',
    ],
    values: [
      {
        icon: 'sparkle',
        title: 'Diseño personalizado',
        text: 'Tus colores, tu temática, tu historia. Te ayudamos a escoger piezas que van con tu visión y con tu lugar.',
      },
      {
        icon: 'gem',
        title: 'Rentas de calidad',
        text: 'Barriles de whiskey, madera rústica y detalles western, escogidos y decorados con cariño.',
      },
      {
        icon: 'chat',
        title: 'Servicio bilingüe',
        text: 'Hablamos español e inglés. Planea tu fiesta con nosotros en el idioma que te sea más cómodo.',
      },
    ],
  },

  rentals: {
    eyebrow: 'Rentas y decoración',
    title: 'Piezas que crean el ambiente',
    intro: 'Combina mobiliario y decoración western rústica para crear un look que vaya contigo.',
    items: [
      {
        icon: 'cocktailTable',
        title: 'Mesas cocteleras de barril',
        text: 'Mesas altas de barril para convivir y brindar, en acabado café whiskey claro u oscuro.',
      },
      {
        icon: 'barrel',
        title: 'Barriles de whiskey y mesas de barril',
        text: 'Barriles clásicos para mesas de postres, letreros, centros de mesa y mesas para sentarse.',
      },
      {
        icon: 'backdrop',
        title: 'Backdrops de madera rústica',
        text: 'Fondos de madera cálida para enmarcar la mesa principal, el pastel o tus fotos.',
      },
      {
        icon: 'balloons',
        title: 'Backdrops con guirnalda de globos',
        text: 'Guirnaldas de globos personalizadas en tus colores para un toque suave y festivo.',
      },
      {
        icon: 'wheel',
        title: 'Ruedas de carreta',
        text: 'Detalles western auténticos para entradas, backdrops y exhibiciones.',
      },
      {
        icon: 'hay',
        title: 'Pacas de paja',
        text: 'Asientos y decoración rústica con el verdadero ambiente de rancho.',
      },
      {
        icon: 'star',
        title: 'Decoración western',
        text: 'Detalles vaqueros que le dan vida a tu temática.',
      },
      {
        icon: 'lantern',
        title: 'Accesorios rústicos',
        text: 'Toques finales y detalles que completan el look rústico.',
      },
    ],
    finishes: {
      label: 'Acabados de barril',
      light: 'Café whiskey claro',
      dark: 'Café whiskey oscuro',
    },
    note: 'Y mucho más: pregúntanos por otras piezas disponibles.',
  },

  events: {
    eyebrow: 'Eventos que decoramos',
    title: 'Hecho para tus grandes momentos',
    intro:
      'Sea lo que sea que celebres, te ayudamos a que se sienta cálido, elegante y totalmente tuyo.',
    items: [
      {
        icon: 'crown',
        title: 'Quinceañeras',
        text: 'Una celebración única en la vida, con elegancia, tradición y un toque de glamour western.',
      },
      {
        icon: 'cake',
        title: 'Sweet 16',
        text: 'Un cumpleaños especial con un estilo rústico, moderno y perfecto para las fotos.',
      },
      {
        icon: 'rings',
        title: 'Bodas',
        text: 'Decoración rústica, cálida y romántica para tu ceremonia, recepción y mesa de novios.',
      },
      {
        icon: 'gift',
        title: 'Cumpleaños',
        text: 'Desde el primer añito hasta los cumpleaños más especiales, fiestas que se sienten únicas.',
      },
      {
        icon: 'sparkle',
        title: 'Otros eventos especiales',
        text: 'Baby showers, aniversarios, graduaciones, eventos corporativos y más.',
      },
    ],
  },

  packages: {
    eyebrow: 'Paquetes personalizados',
    title: 'Tu visión, entregada y decorada',
    intro:
      'Tú escoges las piezas que más te gustan y nosotros las llevamos y decoramos tu evento. Cada paquete se arma según tu visión, tu lugar y el número de invitados.',
    steps: [
      {
        icon: 'checklist',
        title: 'Escoge tus piezas',
        text: 'Elige entre barriles, backdrops, detalles western y más, o deja que te sugiramos un look.',
      },
      {
        icon: 'truck',
        title: 'Entregamos y decoramos',
        text: 'Llevamos todo a tu lugar y lo acomodamos para que se vea perfecto.',
      },
      {
        icon: 'sparkle',
        title: '¡A celebrar!',
        text: 'Disfruta el día con tus invitados mientras la decoración se luce.',
      },
    ],
    examplesLabel: 'Ideas de paquetes (ejemplos)',
    examplesNote:
      'Estos son solo ejemplos para inspirarte: cada paquete se personaliza y se cotiza por separado.',
    examples: [
      {
        title: 'Lounge de barriles',
        text: 'Un espacio relajado para convivir, platicar y brindar.',
        includes: ['Mesas cocteleras de barril', 'Barriles de whiskey', 'Accesorios rústicos'],
      },
      {
        title: 'Backdrop western de lujo',
        text: 'Un backdrop que se roba las miradas para tu pastel, mesa principal o fotos.',
        includes: [
          'Backdrop de madera rústica',
          'Guirnalda de globos',
          'Ruedas de carreta y pacas de paja',
        ],
      },
      {
        title: 'Celebración rústica completa',
        text: 'Un look western rústico completo, desde la entrada hasta la mesa de postres.',
        includes: [
          'Mesas de barril y mesas cocteleras',
          'Backdrop con guirnalda de globos',
          'Decoración western y detalles rústicos',
        ],
      },
    ],
    exampleBadge: 'Ejemplo',
    includesLabel: 'Podría incluir',
    cta: 'Pide una cotización personalizada',
  },

  serviceArea: {
    eyebrow: 'Área de servicio',
    title: 'Con orgullo en el sur de California',
    intro:
      'Desde Pomona, CA 91767, llevamos decoración western rústica a celebraciones en el Inland Empire, Orange County y las comunidades de Riverside.',
    baseLabel: 'Nuestra base',
    base: 'Pomona, CA 91767',
    areasLabel: 'Áreas que atendemos',
    areas: [
      'Pomona',
      'Inland Empire',
      'Condado de San Bernardino',
      'Condado de Riverside',
      'Orange County',
    ],
    note: '¿No sabes si llegamos a tu área? ¡Pregúntanos!',
    cta: 'Pregunta por tu área',
  },

  gallery: {
    eyebrow: 'Galería',
    title: 'Mira nuestros montajes más recientes',
    intro: 'Descubre eventos recientes, piezas nuevas e ideas de decoración en Instagram.',
    // Una descripción por foto, en el mismo orden que los archivos de src/assets/images/gallery/.
    // TODO: Actualizar cuando se reemplacen las fotos de muestra por fotos reales.
    photoAlts: [
      'Foto de muestra de la galería 1',
      'Foto de muestra de la galería 2',
      'Foto de muestra de la galería 3',
      'Foto de muestra de la galería 4',
      'Foto de muestra de la galería 5',
      'Foto de muestra de la galería 6',
    ],
    follow: 'Síguenos en Instagram',
  },

  quote: {
    eyebrow: 'Cotización gratis',
    title: 'Pide tu cotización gratis',
    intro:
      'Cuéntanos sobre tu celebración y las piezas que te gustan. Te contactaremos en 1 a 2 días hábiles con ideas y una cotización personalizada.',
    requiredNote: '* Obligatorio',
    subject: "Nueva solicitud de cotización — Veronica's Event Decor",
    selectPlaceholder: 'Selecciona una opción',

    groups: {
      contact: 'Tus datos de contacto',
      event: 'Tu evento',
      style: 'Rentas y estilo',
      details: 'Detalles',
    },

    fields: {
      fullName: { label: 'Nombre completo' },
      email: { label: 'Correo electrónico', placeholder: 'tu@correo.com' },
      phone: { label: 'Número de teléfono', help: 'Solo lo usaremos para hablar de tu evento.' },
      contactMethod: { label: '¿Cómo prefieres que te contactemos?' },
      language: { label: 'Idioma de preferencia' },
      eventType: { label: 'Tipo de evento' },
      eventDate: { label: 'Fecha del evento' },
      eventLocation: {
        label: 'Ciudad o código postal del evento',
        placeholder: 'Ej.: Pomona o 91767',
      },
      venueSetting: { label: 'Tipo de lugar' },
      venueName: {
        label: 'Nombre o tipo de lugar',
        placeholder: 'Ej.: patio de la casa, rancho, salón de fiestas',
      },
      guestCount: { label: 'Número aproximado de invitados' },
      rentalItems: { label: 'Piezas que te interesan', help: 'Selecciona todas las que apliquen.' },
      barrelFinish: { label: 'Acabado de barril preferido' },
      colorsTheme: {
        label: 'Colores o temática del evento',
        placeholder: 'Ej.: verde salvia y dorado, western glam',
      },
      budget: { label: 'Presupuesto aproximado para la decoración' },
      eventDetails: {
        label: 'Cuéntanos sobre tu evento',
        help: 'Tu visión e inspiración, y cualquier detalle de montaje, entrega, acceso u horarios.',
      },
      referral: { label: '¿Cómo supiste de nosotros?' },
      consent: {
        label: 'Acepto que Veronica’s Event Decor me contacte sobre mi solicitud de cotización.',
      },
    },

    options: {
      contactMethod: { phone: 'Llamada', text: 'Mensaje de texto', email: 'Correo electrónico' },
      language: { en: 'English', es: 'Español' },
      eventType: {
        quinceanera: 'Quinceañera',
        sweet16: 'Sweet 16',
        wedding: 'Boda',
        birthday: 'Cumpleaños',
        babyShower: 'Baby shower',
        anniversary: 'Aniversario',
        graduation: 'Graduación',
        corporate: 'Evento corporativo',
        other: 'Otro',
      },
      venueSetting: {
        indoor: 'Bajo techo',
        outdoor: 'Al aire libre',
        both: 'Ambos',
        unsure: 'Aún no sé',
      },
      guestCount: {
        under50: 'Menos de 50',
        '50to100': '50–100',
        '100to150': '100–150',
        '150to250': '150–250',
        over250: '250+',
      },
      rentalItems: {
        cocktailTables: 'Mesas cocteleras de barril',
        barrels: 'Barriles de whiskey / mesas de barril',
        woodBackdrop: 'Backdrop de madera rústica',
        balloonBackdrop: 'Backdrop con guirnalda de globos',
        wagonWheels: 'Ruedas de carreta',
        hayBales: 'Pacas de paja',
        westernProps: 'Decoración western',
        accessories: 'Accesorios rústicos',
        custom: 'Paquete personalizado / aún no sé',
      },
      barrelFinish: {
        light: 'Café whiskey claro',
        dark: 'Café whiskey oscuro',
        mix: 'Una mezcla de ambos',
        unsure: 'Aún no sé',
      },
      budget: {
        under500: 'Menos de $500',
        '500to1000': '$500–$1,000',
        '1000to2500': '$1,000–$2,500',
        over2500: '$2,500+',
        unsure: 'Aún no sé',
      },
      referral: {
        instagram: 'Instagram',
        referral: 'Recomendación de amigos o familia',
        google: 'Google',
        event: 'Un evento o salón',
        other: 'Otro',
      },
    },

    errors: {
      required: 'Este campo es obligatorio.',
      choose: 'Por favor, elige una opción.',
      email: 'Escribe un correo válido, por ejemplo: nombre@correo.com.',
      phone: 'Escribe un número de teléfono de al menos 10 dígitos.',
      date: 'Elige una fecha de hoy en adelante.',
      consent: 'Marca esta casilla para que podamos contactarte.',
      summary: 'Revisa los campos marcados abajo.',
    },

    submit: 'Enviar mi solicitud',
    sending: 'Enviando…',
    successTitle: '¡Gracias!',
    successText: 'Recibimos tu solicitud y te contactaremos en 1 a 2 días hábiles.',
    errorTitle: 'No se pudo enviar tu solicitud',
    errorText:
      'Algo salió mal al enviar tu solicitud. Inténtalo de nuevo o mándanos un mensaje por Instagram.',
    retry: 'Intentar de nuevo',
  },

  footer: {
    tagline:
      'Decoración y renta de mobiliario western, rústico y moderno, para las celebraciones más importantes de la vida.',
    navHeading: 'Explora',
    contactHeading: 'Contáctanos',
    contactFallback: 'Pide tu cotización gratis o mándanos un mensaje por Instagram.',
    emailLabel: 'Correo',
    phoneLabel: 'Teléfono',
    serviceLine: 'Desde Pomona, CA · Servimos al Inland Empire, Orange County y Riverside',
    rights: 'Todos los derechos reservados.',
    credit: 'Sitio web por Halliday',
  },
};
