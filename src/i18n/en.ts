/**
 * English copy for the whole site (shown at /).
 *
 * To edit text: change the words between the quotes and save. Keep the keys (the words
 * before the colons) the same — es.ts must have exactly the same keys, and the build will
 * fail with a clear error if one is missing. Check with `npm run check:i18n`.
 *
 * Rental items, celebrations and FAQ live in src/data/ (both languages side by side).
 *
 * Brand voice: warm and friendly, like Verónica talking to a friend. Never "style/styled/
 * styling" — she rents handcrafted pieces and delivers and sets them up.
 */
export const en = {
  meta: {
    title: "Rustic Western Party Rentals in Pomona | Veronica's",
    description:
      'Rustic western party rentals in Pomona: handcrafted barrel tables, western farmhouse décor & more for quinceañeras, sweet 16s, graduations & birthdays.',
    ogLocale: 'en_US',
    ogImageAlt: "Veronica's Event Decor gold logo on a black background",
  },

  skipLink: 'Skip to main content',
  logoAlt: "Veronica's Event Decor logo",

  nav: {
    label: 'Main',
    celebrations: 'Celebrations',
    rentals: 'Rentals',
    addOns: 'Add-Ons',
    gallery: 'Gallery',
    faq: 'FAQ',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuTitle: 'Menu',
  },

  language: {
    label: 'Language',
  },

  cta: {
    quote: 'Get a Quote',
  },

  instagram: {
    label: "Veronica's Event Decor on Instagram",
  },

  hero: {
    eyebrow: 'Latina Woman-Owned · Bilingual Service · Pomona, CA',
    title: 'Handcrafted Whiskey Barrel Tables & Rustic Western Rentals',
    // A blank line ("\n\n") starts a new paragraph.
    subtitle:
      'Rustic western party rentals and western farmhouse décor for quinceañeras, sweet 16s, graduations, birthdays and every celebration in between — delivered and set up across the Inland Empire, Orange County and Riverside.',
    primary: 'Check Availability & Get a Quote',
    secondary: 'See Our Rentals',
  },

  celebrations: {
    eyebrow: 'Celebrations',
    title: 'From Quinceañeras to Graduations',
    intro:
      "Whatever you're celebrating, we'll help make it feel warm, beautiful and unmistakably yours.",
  },

  signature: {
    eyebrow: 'Our Rentals',
    title: 'Our Signature Whiskey Barrel Tables',
    craft:
      'Every barrel table is hand-finished and reinforced by our family, so it looks beautiful in your photos and stands strong all night long.',
    // TODO(veronica): confirm which finish is most requested before adding a badge.
    light: {
      title: 'Light Whiskey Finish',
      text: 'A warm, honey-toned finish that feels bright and inviting, day or night.',
    },
    dark: {
      title: 'Dark Whiskey Finish',
      text: 'A rich, deep finish that brings a bold, elegant look to any setup.',
    },
    pairLine:
      'Every table comes with its matching barstools and a patio umbrella for a complete lounge.',
    specQuantity: 'Available',
    specDimensions: 'Size',
  },

  catalog: {
    title: 'More Rustic Western Party Rentals',
    intro: 'Mix and match rustic western pieces to create a look that feels like you.',
    closing: 'And more — ask us about additional pieces.',
  },

  addOns: {
    eyebrow: 'Add-Ons',
    title: 'Complete the Look',
    intro:
      'Add a custom balloon garland, a photo booth or a neon sign to your rentals and watch everything come together.',
    note: 'More add-ons coming soon. Just ask!',
  },

  gallery: {
    eyebrow: 'Gallery',
    title: 'Real Celebrations, Real Setups',
    intro: "Every photo is from one of our own events, with the same pieces you'll rent.",
    button: 'See more on Instagram',
    open: 'View larger photo',
    close: 'Close photo',
    previous: 'Previous photo',
    next: 'Next photo',
    counter: 'Photo {current} of {total}',
  },

  why: {
    eyebrow: 'Why Us',
    title: "Why Families Choose Verónica's",
    items: [
      {
        icon: 'hammer',
        title: 'Handcrafted & Built to Last',
        text: 'Sturdy, hand-finished pieces that look beautiful and hold up to a full night of celebrating.',
      },
      {
        icon: 'heart',
        title: 'Latina Woman-Owned',
        text: 'A family business rooted in Pomona, celebrating our community one party at a time.',
      },
      {
        icon: 'chat',
        title: 'Bilingual Service',
        text: 'Hablamos español. Plan your celebration in English or Spanish, whichever feels most comfortable.',
      },
      {
        icon: 'truck',
        title: 'Delivery & Setup',
        text: 'We bring everything to your home or venue and set it up, so you can enjoy your day.',
      },
    ],
  },

  how: {
    eyebrow: 'How It Works',
    title: 'How It Works',
    steps: [
      {
        icon: 'checklist',
        title: 'Choose your pieces',
        text: 'Pick from barrel tables, bars, backdrops and western accents, or let us suggest a look.',
      },
      {
        icon: 'truck',
        title: 'We deliver & set up',
        text: 'We bring everything to your home or venue and set it up just right.',
      },
      {
        icon: 'sparkle',
        title: 'You celebrate',
        text: 'Enjoy the day with the people you love.',
      },
    ],
    examplesLabel: 'Example package ideas',
    examplesNote:
      'These are examples to spark ideas. Every package is customized and quoted individually.',
    exampleBadge: 'Example',
    includesLabel: 'Could include',
    examples: [
      {
        title: 'Barrel Bar Lounge',
        text: 'A relaxed gathering spot for drinks and conversation.',
        includes: [
          'Whiskey barrel cocktail tables with barstools & umbrellas',
          'Barrel bar',
          'Rustic accessories',
        ],
      },
      {
        title: 'Western Backdrop Showcase',
        text: 'A statement backdrop for your cake, head table or photos.',
        includes: [
          'Rustic wood backdrop',
          'Wagon wheels & hay bales',
          'Balloon garland (optional add-on)',
        ],
      },
      {
        title: 'Full Rustic Celebration',
        text: 'A complete rustic western look, from the entrance to the dessert table.',
        includes: [
          'Barrel tables & barstools',
          'Rustic dessert cart',
          'Western props & décor',
          'Balloon garland (optional add-on)',
        ],
      },
    ],
  },

  about: {
    eyebrow: 'About Us',
    title: 'Our Story',
    // First sentence = the business definition; also used for the JSON-LD description and llms.txt.
    definition:
      "Veronica's Event Decor is a Latina woman-owned party rental company in Pomona, California, specializing in handcrafted whiskey barrel tables, rustic western party rentals and western farmhouse décor.",
    story:
      'We love celebrations, and we put that love into every handcrafted piece we rent. Every event gets our personal attention: we listen to your ideas, help you choose the right pieces, and take care of the details so you can enjoy the day with your family.',
    serviceTitle: 'Where We Deliver',
    baseLabel: 'Home base',
    base: 'Pomona, CA 91767',
    note: 'Not sure if we cover your area? Just ask!',
  },

  quote: {
    eyebrow: 'Free Quote',
    title: "Let's Plan Your Celebration",
    intro:
      "Tell us about your event and the pieces you love. We'll check availability for your date and get back to you within 1–2 business days.",
    requiredNote: '* Required',
    subjectPrefix: 'New quote request',
    selectPlaceholder: 'Select an option',

    groups: {
      contact: 'Your contact info',
      event: 'Your event',
      rentals: 'Rentals & budget',
      details: 'Your vision',
    },

    fields: {
      fullName: { label: 'Full name' },
      email: { label: 'Email', placeholder: 'you@example.com' },
      phone: { label: 'Phone number' },
      language: { label: 'Preferred language' },
      contactMethod: { label: 'Preferred contact method' },
      eventDate: { label: 'Event date' },
      eventCity: { label: 'Event city', placeholder: 'e.g., Pomona' },
      eventZip: { label: 'ZIP code', placeholder: 'e.g., 91767' },
      eventType: { label: 'Event type' },
      eventLocation: { label: 'Event location' },
      guestCount: { label: 'Number of guests' },
      rentals: { label: "Rentals you're interested in", help: 'Select all that apply.' },
      barrelCount: { label: 'How many barrel tables?' },
      barrelFinish: { label: 'Barrel table finish' },
      budget: { label: 'Estimated budget ($)', placeholder: 'e.g., 1500' },
      notes: {
        label: 'Notes / vision for your event',
        placeholder:
          'Colors, theme, setup or timing details — Pinterest or Instagram links welcome.',
      },
      consent: {
        label:
          "I agree to be contacted by Veronica's Event Decor by call, text, or email about my quote. Message and data rates may apply.",
      },
    },

    // The English labels below are also the values sent in the Formspree email, so emails
    // read the same whichever language the visitor used.
    options: {
      language: { en: 'English', es: 'Español' },
      contactMethod: { call: 'Call', text: 'Text', email: 'Email' },
      eventType: {
        quinceanera: 'Quinceañera',
        sweet16: 'Sweet 16',
        graduation: 'Graduation',
        birthday: 'Birthday',
        wedding: 'Wedding',
        babyShower: 'Baby Shower',
        celebrationOfLife: 'Celebration of Life',
        anniversary: 'Anniversary',
        corporate: 'Corporate Event',
        other: 'Other',
      },
      eventLocation: { home: 'Home / Residence', venue: 'Venue', unsure: 'Not sure yet' },
      guestCount: {
        under50: 'Under 50',
        '50to100': '50–100',
        '100to150': '100–150',
        '150to250': '150–250',
        over250: '250+',
      },
      barrelFinish: { light: 'Light', dark: 'Dark', mix: 'Mix' },
      rentalsExtra: {
        westernProps: 'Western props & décor',
        unsure: 'Not sure yet — help me choose',
      },
    },

    errors: {
      required: 'This field is required.',
      choose: 'Please choose an option.',
      email: 'Please enter a valid email address, like name@example.com.',
      phone: 'Please enter a phone number with at least 10 digits.',
      zip: 'Please enter a 5-digit ZIP code.',
      date: "Please choose a date that's today or later.",
      count: 'Please enter a number of 1 or more.',
      budget: 'Please enter an amount of 0 or more.',
      consent: 'Please check this box so we can contact you.',
      summary: 'Please fix the highlighted fields below.',
    },

    submit: 'Check Availability & Get a Quote',
    sending: 'Sending…',
    success:
      'Thank you! We received your request and will get back to you within 1–2 business days.',
    error: 'Something went wrong. Please try again or message us on Instagram.',
    retry: 'Try again',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently Asked Questions',
  },

  // Search-engine structured data (JSON-LD) — not shown on the page.
  schema: {
    offerCatalogName: 'Rustic Western Party Rentals',
    knowsAbout: [
      'rustic western party rentals',
      'western farmhouse décor',
      'whiskey barrel table rentals',
      'quinceañera décor',
      'sweet 16 décor',
      'graduation party rentals',
      'balloon garlands',
      'photo booth rentals',
    ],
  },

  footer: {
    tagline:
      "Handcrafted barrel tables and rustic western rentals for life's biggest celebrations.",
    serviceLine: 'Based in Pomona, CA · Serving the Inland Empire, Orange County & Riverside',
    navHeading: 'Explore',
    contactHeading: 'Get in touch',
    contactFallback: 'Request a quote or send us a message on Instagram.',
    phoneLabel: 'Phone',
    callOrText: 'Call or Text',
    textLabel: 'Text us',
    emailLabel: 'Email',
    credit: 'Website by Halliday',
  },
};

export type Translations = typeof en;
