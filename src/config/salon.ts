// This is the only file you need to edit when adapting the demo for a new salon.
// Replace the sample text, links, prices, and image URLs below; component code can stay untouched.
export const salon = {
  // Brand and search-engine details
  brand: {
    name: "[SALON NAME]",
    shortName: "SN",
  },
  seo: {
    title: "[SALON NAME] | Premium Hair & Beauty in Islamabad",
    description:
      "Modern hair, grooming, beauty, and bridal services delivered by expert stylists in Islamabad.",
  },

  // Navigation labels and target section IDs
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Hours", href: "#hours" },
    { label: "Contact", href: "#contact" },
  ],
  ui: {
    primaryNavigationLabel: "Primary navigation",
    mobileNavigationLabel: "Mobile navigation",
    openNavigationLabel: "Open navigation",
    menuLabel: "Menu",
    reserveTimeLabel: "Reserve a time",
    appointmentFormLabel: "Appointment request form",
    mapTitle: "Salon location on Google Maps",
    homeLinkLabel: "Salon home",
  },

  // Hero copy and main banner image
  hero: {
    eyebrow: "Islamabad · Hair · Beauty · Grooming",
    title: "Where style meets confidence.",
    description:
      "Thoughtful consultations, meticulous technique, and a calm space made for your best look yet.",
    primaryCta: "Book now",
    secondaryCta: "View services",
    imageUrl:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Premium salon interior with styling stations",
    availability: "Appointments available this week",
  },

  // Services, descriptions, icon keys, and placeholder PKR prices
  servicesSection: {
    eyebrow: "The menu",
    title: "Services designed around you.",
    description:
      "From precision grooming to event-ready transformations, each appointment begins with a personal consultation.",
  },
  services: [
    {
      icon: "scissors",
      name: "Signature haircut",
      description: "Consultation, tailored cut, wash, and finish for any hair type.",
      price: "From PKR 2,500",
    },
    {
      icon: "razor",
      name: "Beard sculpt & trim",
      description: "Hot towel prep, clean lines, shaping, and conditioning.",
      price: "From PKR 1,200",
    },
    {
      icon: "sparkle",
      name: "Skin ritual facial",
      description: "Deep cleanse, exfoliation, hydration, and a restorative mask.",
      price: "From PKR 4,500",
    },
    {
      icon: "droplet",
      name: "Dimensional color",
      description: "Custom color, balayage, highlights, toner, and aftercare plan.",
      price: "From PKR 8,500",
    },
    {
      icon: "leaf",
      name: "Head & body spa",
      description: "A quiet reset with scalp therapy, massage, and steam care.",
      price: "From PKR 5,000",
    },
    {
      icon: "crown",
      name: "Bridal signature",
      description: "Makeup, hair, skin prep, draping, and an advance trial session.",
      price: "From PKR 35,000",
    },
  ],

  // Gallery heading and image URLs — swap these for each client's real work
  gallerySection: {
    eyebrow: "Selected work",
    title: "Craft in every detail.",
    description: "A glimpse of the space, the process, and the finished look.",
  },
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=82",
      alt: "Stylist working on a client's hair",
      aspect: "portrait",
    },
    {
      url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=82",
      alt: "Hair styling tools in a modern salon",
      aspect: "landscape",
    },
    {
      url: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=1200&q=82",
      alt: "Barber shaping a modern haircut",
      aspect: "square",
    },
    {
      url: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1200&q=82",
      alt: "Elegant salon wash station",
      aspect: "square",
    },
    {
      url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=82",
      alt: "Finished bridal hairstyle",
      aspect: "portrait",
    },
    {
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=82",
      alt: "Hair color and styling session",
      aspect: "landscape",
    },
  ],

  // About section story, image, and business stats
  about: {
    eyebrow: "Our story",
    title: "Good style starts with being heard.",
    paragraphs: [
      "We opened our doors with one idea: salon visits should feel personal, considered, and genuinely relaxing. Our team blends international technique with an understanding of local style.",
      "Every service begins with a conversation. We listen first, recommend honestly, and create a result that works long after you leave the chair.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Salon team preparing a client for a styling session",
    stats: [
      { value: "08+", label: "Years in business" },
      { value: "12k", label: "Happy clients" },
      { value: "14", label: "Expert stylists" },
    ],
  },

  // Weekly opening hours
  hoursSection: {
    eyebrow: "Plan your visit",
    title: "Hours that fit your week.",
    note: "Last appointments are accepted 60 minutes before closing.",
  },
  hours: [
    { day: "Monday", time: "10:00 AM — 9:00 PM" },
    { day: "Tuesday", time: "10:00 AM — 9:00 PM" },
    { day: "Wednesday", time: "10:00 AM — 9:00 PM" },
    { day: "Thursday", time: "10:00 AM — 9:00 PM" },
    { day: "Friday", time: "2:00 PM — 10:00 PM" },
    { day: "Saturday", time: "10:00 AM — 10:00 PM" },
    { day: "Sunday", time: "11:00 AM — 8:00 PM" },
  ],

  // Customer review cards
  testimonialsSection: {
    eyebrow: "Kind words",
    title: "Loved beyond the mirror.",
  },
  testimonials: [
    {
      quote:
        "They understood exactly what I wanted and made the whole appointment feel effortless. My color has never looked better.",
      name: "Ayesha K.",
      service: "Color & styling",
      rating: 5,
    },
    {
      quote:
        "Clean space, thoughtful service, and a genuinely excellent cut. I finally found my regular barber in Islamabad.",
      name: "Hamza R.",
      service: "Haircut & beard",
      rating: 5,
    },
    {
      quote:
        "The bridal team was calm, punctual, and incredibly skilled. I felt like myself — just elevated.",
      name: "Mariam S.",
      service: "Bridal signature",
      rating: 5,
    },
  ],

  // Contact details, form options, map, and WhatsApp destination
  contact: {
    eyebrow: "Bookings",
    title: "Ready for your next look?",
    description:
      "Tell us what you have in mind. Our team will call or message to confirm your consultation and appointment time.",
    address: "Suite 00, [PLAZA NAME], [SECTOR], Islamabad, Pakistan",
    phoneDisplay: "+92 300 000 0000",
    phoneHref: "tel:+923000000000",
    email: "hello@salonname.pk",
    mapEmbedUrl: "https://www.google.com/maps?q=33.6844,73.0479&z=13&output=embed",
    serviceOptions: [
      "Signature haircut",
      "Beard sculpt & trim",
      "Skin ritual facial",
      "Dimensional color",
      "Head & body spa",
      "Bridal signature",
    ],
    form: {
      nameLabel: "Your name",
      namePlaceholder: "Full name",
      phoneLabel: "Phone number",
      phonePlaceholder: "+92 3XX XXX XXXX",
      serviceLabel: "Preferred service",
      servicePlaceholder: "Choose a service",
      messageLabel: "Anything we should know?",
      messagePlaceholder: "Preferred date, style inspiration, or special requests",
      submitLabel: "Request appointment",
      note: "Demo form only — connect this to WhatsApp, email, or a booking tool for launch.",
    },
    whatsappNumber: "923000000000",
    whatsappMessage: "Hi, I would like to book an appointment at [SALON NAME].",
    whatsappLabel: "Chat on WhatsApp",
  },

  // Social links and footer copy
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
    { label: "Facebook", href: "https://facebook.com/", icon: "facebook" },
    { label: "TikTok", href: "https://tiktok.com/", icon: "tiktok" },
  ],
  footer: {
    description: "Hair, beauty, grooming, and care — thoughtfully delivered in Islamabad.",
    copyright: "© 2026 [SALON NAME]. All rights reserved.",
  },
} as const;

export type SalonConfig = typeof salon;
