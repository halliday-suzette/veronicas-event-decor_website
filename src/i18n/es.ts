import type { Translations } from './en';

/**
 * Spanish copy for the whole site (shown at /es/).
 *
 * Must have exactly the same keys as en.ts — the build fails if one is missing
 * (`npm run check:i18n` shows a readable diff). Keep the brand name "Veronica's Event Decor"
 * in English. Don't translate `icon` values (they choose a drawing, not words).
 *
 * Voz: español mexicano natural y cálido. Siempre "tú", nunca "usted". "Renta", no
 * "alquiler"; "cotización/cotiza"; "Mis XV / XV años"; "salón de eventos"; "bancos altos";
 * "sombrillas". Nunca "estilizamos" ni "decoramos": rentamos piezas hechas a mano, te las
 * llevamos y las montamos.
 */
export const es: Translations = {
  meta: {
    title: "Renta de mobiliario rústico western en Pomona | Veronica's",
    description:
      'Renta de mobiliario rústico western en Pomona: mesas de barril hechas a mano y decoración estilo rancho para XV años, sweet 16, graduaciones y cumpleaños.',
    ogLocale: 'es_US',
    ogImageAlt: "Logo dorado de Veronica's Event Decor sobre fondo negro",
  },

  skipLink: 'Saltar al contenido principal',
  logoAlt: "Logo de Veronica's Event Decor",

  nav: {
    label: 'Principal',
    celebrations: 'Celebraciones',
    rentals: 'Rentas',
    addOns: 'Extras',
    gallery: 'Galería',
    faq: 'Preguntas',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    menuTitle: 'Menú',
  },

  language: {
    label: 'Idioma',
  },

  cta: {
    quote: 'Cotiza tu fiesta',
  },

  instagram: {
    label: "Veronica's Event Decor en Instagram",
  },

  hero: {
    eyebrow: 'Negocio de una mujer latina · Atendemos en inglés y en español · Pomona, CA',
    title: 'Mesas de barril hechas a mano y renta de mobiliario rústico western',
    subtitle:
      'Renta de mobiliario rústico western y decoración estilo rancho para tus XV años, sweet 16, graduaciones, cumpleaños y todas tus celebraciones — te lo llevamos y lo montamos en el Inland Empire, Orange County y Riverside.',
    primary: 'Revisa disponibilidad y cotiza',
    secondary: 'Mira lo que rentamos',
  },

  celebrations: {
    eyebrow: 'Celebraciones',
    title: 'De Mis XV a graduaciones',
    intro: 'Sea lo que sea que celebres, te ayudamos a que se sienta cálido, bonito y muy tuyo.',
  },

  signature: {
    eyebrow: 'Nuestras rentas',
    title: 'Nuestras mesas de barril, hechas a mano',
    craft:
      'Cada mesa de barril la restauramos y reforzamos a mano, en familia, para que se vea preciosa en tus fotos y aguante toda la fiesta.',
    light: {
      title: 'Acabado claro',
      text: 'Un tono miel cálido que se ve luminoso y acogedor, de día o de noche.',
    },
    dark: {
      title: 'Acabado oscuro',
      text: 'Un tono profundo y elegante que le da un toque especial a cualquier montaje.',
    },
    pairLine: 'Complétalas con nuestros bancos altos y sombrillas para armar un lounge completo.',
    specQuantity: 'Disponibles',
    specDimensions: 'Medidas',
  },

  catalog: {
    title: 'Más renta de mobiliario rústico western',
    intro: 'Combina piezas rústicas western y crea un look que vaya contigo.',
    closing: 'Y mucho más. ¡Pregúntanos por otras piezas!',
  },

  addOns: {
    eyebrow: 'Extras',
    title: 'Dale el toque final',
    intro:
      'Agrega un arco de globos, una cabina de fotos o un letrero de neón a tu renta, y mira cómo todo se ve increíble.',
    note: 'Pronto tendremos más opciones. ¡Pregúntanos!',
  },

  gallery: {
    eyebrow: 'Galería',
    title: 'Fiestas reales, montajes reales',
    intro: 'Cada foto es de uno de nuestros eventos, con las mismas piezas que vas a rentar.',
    button: 'Mira más en Instagram',
    open: 'Ver foto más grande',
    close: 'Cerrar foto',
    previous: 'Foto anterior',
    next: 'Foto siguiente',
    counter: 'Foto {current} de {total}',
  },

  why: {
    eyebrow: 'Por qué nosotros',
    title: 'Por qué las familias nos eligen',
    items: [
      {
        icon: 'hammer',
        title: 'Hechas a mano y para durar',
        text: 'Piezas firmes y terminadas a mano que se ven preciosas y aguantan toda la fiesta.',
      },
      {
        icon: 'heart',
        title: 'Negocio de una mujer latina',
        text: 'Un negocio familiar de Pomona que celebra a nuestra comunidad, fiesta tras fiesta.',
      },
      {
        icon: 'chat',
        title: 'Atendemos en inglés y en español',
        text: 'Planea tu fiesta en el idioma que te sea más cómodo. Aquí te atendemos como en familia.',
      },
      {
        icon: 'truck',
        title: 'Te lo llevamos y lo montamos',
        text: 'Te llevamos todo a tu casa o salón de eventos y lo dejamos listo, para que tú solo disfrutes.',
      },
    ],
  },

  how: {
    eyebrow: 'Cómo funciona',
    title: 'Así de fácil',
    steps: [
      {
        icon: 'checklist',
        title: 'Escoge tus piezas',
        text: 'Escoge entre mesas de barril, barras, backdrops y detalles western, o deja que te recomendemos.',
      },
      {
        icon: 'truck',
        title: 'Te lo llevamos y lo montamos',
        text: 'Llevamos todo a tu casa o salón de eventos y lo dejamos perfecto.',
      },
      {
        icon: 'sparkle',
        title: 'Tú a disfrutar',
        text: 'Disfruta tu día con la gente que más quieres.',
      },
    ],
    examplesLabel: 'Ideas de paquetes (ejemplos)',
    examplesNote:
      'Estos son solo ejemplos para inspirarte. Cada paquete se arma a tu medida y se cotiza por separado.',
    exampleBadge: 'Ejemplo',
    includesLabel: 'Podría incluir',
    examples: [
      {
        title: 'Lounge de barriles',
        text: 'Un espacio relajado para convivir, platicar y brindar.',
        includes: ['Mesas de barril altas', 'Bancos altos', 'Sombrillas'],
      },
      {
        title: 'Backdrop western',
        text: 'Un backdrop que se roba las miradas para tu pastel, mesa principal o fotos.',
        includes: [
          'Backdrop de madera rústica',
          'Ruedas de carreta y pacas de paja',
          'Arco de globos (extra opcional)',
        ],
      },
      {
        title: 'Fiesta rústica completa',
        text: 'Un look western rústico completo, desde la entrada hasta la mesa de postres.',
        includes: [
          'Mesas de barril y bancos altos',
          'Carrito de postres rústico',
          'Decoración y accesorios western',
          'Arco de globos (extra opcional)',
        ],
      },
    ],
  },

  about: {
    eyebrow: 'Quiénes somos',
    title: 'Nuestra historia',
    definition:
      "Veronica's Event Decor es una empresa de renta de mobiliario para fiestas en Pomona, California, de una mujer latina, especializada en mesas de barril hechas a mano, mobiliario rústico western y decoración estilo rancho.",
    story:
      'Nos encantan las fiestas, y ese cariño lo ponemos en cada pieza hecha a mano que rentamos. Cada evento recibe nuestra atención personal: escuchamos tus ideas, te ayudamos a escoger las piezas ideales y nos encargamos de los detalles para que tú disfrutes con tu familia.',
    serviceTitle: 'Hasta dónde te lo llevamos',
    baseLabel: 'Nuestra base',
    base: 'Pomona, CA 91767',
    note: '¿No sabes si llegamos a tu zona? ¡Pregúntanos!',
  },

  quote: {
    eyebrow: 'Cotización gratis',
    title: '¡Vamos a planear tu fiesta!',
    intro:
      'Cuéntanos de tu fiesta y de las piezas que te gustan. Revisamos la disponibilidad para tu fecha y te contestamos en 1 a 2 días hábiles.',
    requiredNote: '* Obligatorio',
    subjectPrefix: 'Nueva solicitud de cotización',
    selectPlaceholder: 'Selecciona una opción',

    groups: {
      contact: 'Tus datos de contacto',
      event: 'Tu fiesta',
      rentals: 'Rentas y presupuesto',
      details: 'Cuéntanos más',
    },

    fields: {
      fullName: { label: 'Nombre completo' },
      email: { label: 'Correo electrónico', placeholder: 'tu@correo.com' },
      phone: { label: 'Teléfono' },
      language: { label: 'Idioma preferido' },
      contactMethod: { label: '¿Cómo prefieres que te contactemos?' },
      eventDate: { label: 'Fecha del evento' },
      eventCity: { label: 'Ciudad del evento', placeholder: 'ej. Pomona' },
      eventZip: { label: 'Código postal', placeholder: 'ej. 91767' },
      eventType: { label: 'Tipo de evento' },
      eventLocation: { label: 'Lugar del evento' },
      guestCount: { label: 'Número de invitados' },
      rentals: { label: 'Rentas que te interesan', help: 'Selecciona todas las que quieras.' },
      barrelCount: { label: '¿Cuántas mesas de barril?' },
      barrelFinish: { label: 'Acabado de las mesas' },
      budget: { label: 'Presupuesto estimado ($)', placeholder: 'ej. 1500' },
      notes: {
        label: 'Cuéntanos de tu fiesta',
        placeholder:
          'Colores, tema, detalles del montaje u horario — puedes pegar links de Pinterest o Instagram.',
      },
      consent: {
        label:
          "Acepto que Veronica's Event Decor me contacte por llamada, mensaje de texto o correo sobre mi cotización. Pueden aplicar cargos por mensajes y datos.",
      },
    },

    options: {
      language: { en: 'English', es: 'Español' },
      contactMethod: { call: 'Llamada', text: 'Mensaje de texto', email: 'Correo' },
      eventType: {
        quinceanera: 'Quinceañera / Mis XV',
        sweet16: 'Sweet 16',
        graduation: 'Graduación',
        birthday: 'Cumpleaños',
        wedding: 'Boda',
        babyShower: 'Baby Shower',
        celebrationOfLife: 'Celebración de vida',
        anniversary: 'Aniversario',
        corporate: 'Evento de empresa',
        other: 'Otro',
      },
      eventLocation: {
        home: 'Casa / residencia',
        venue: 'Salón de eventos',
        unsure: 'Todavía no sé',
      },
      guestCount: {
        under50: 'Menos de 50',
        '50to100': '50–100',
        '100to150': '100–150',
        '150to250': '150–250',
        over250: '250+',
      },
      barrelFinish: { light: 'Claro', dark: 'Oscuro', mix: 'Combinadas' },
      rentalsExtra: {
        westernProps: 'Decoración y accesorios western',
        unsure: 'Todavía no sé, ayúdenme a escoger',
      },
    },

    errors: {
      required: 'Este campo es obligatorio.',
      choose: 'Por favor, escoge una opción.',
      email: 'Escribe un correo válido, por ejemplo: nombre@correo.com.',
      phone: 'Escribe un número de teléfono de al menos 10 dígitos.',
      zip: 'Escribe un código postal de 5 dígitos.',
      date: 'Escoge una fecha de hoy en adelante.',
      count: 'Escribe un número de 1 o más.',
      budget: 'Escribe una cantidad de 0 o más.',
      consent: 'Marca esta casilla para que podamos contactarte.',
      summary: 'Revisa los campos marcados abajo.',
    },

    submit: 'Revisa disponibilidad y cotiza',
    sending: 'Enviando…',
    success: '¡Gracias! Recibimos tu solicitud y te contestamos en 1 a 2 días hábiles.',
    error: 'Algo salió mal. Intenta de nuevo o mándanos mensaje por Instagram.',
    retry: 'Intentar de nuevo',
  },

  faq: {
    eyebrow: 'Preguntas',
    title: 'Preguntas frecuentes',
  },

  // Datos estructurados (JSON-LD) para buscadores — no se muestran en la página.
  schema: {
    offerCatalogName: 'Renta de mobiliario rústico western',
    knowsAbout: [
      'renta de mobiliario rústico western',
      'decoración western estilo rancho',
      'renta de mesas de barril',
      'decoración para XV años',
      'decoración para sweet 16',
      'renta de mobiliario para graduaciones',
      'arcos de globos',
      'renta de cabina de fotos',
    ],
  },

  footer: {
    tagline:
      'Mesas de barril hechas a mano y mobiliario rústico western para las celebraciones más importantes de tu vida.',
    serviceLine: 'Desde Pomona, CA · Damos servicio en el Inland Empire, Orange County y Riverside',
    navHeading: 'Explora',
    contactHeading: 'Contáctanos',
    contactFallback: 'Pide tu cotización o mándanos un mensaje por Instagram.',
    phoneLabel: 'Teléfono',
    callOrText: 'Llama o manda mensaje',
    textLabel: 'Mándanos mensaje',
    emailLabel: 'Correo',
    credit: 'Sitio web por Halliday',
  },
};
