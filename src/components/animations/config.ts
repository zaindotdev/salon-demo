export const MOTION = {
  ease: "power3.out",
  strongEase: "power4.out",
  transitionEase: "power2.inOut",
  duration: 0.82,
  fastDuration: 0.62,
  stagger: 0.1,
} as const;

// Toggle individual signature effects here for calmer client demos.
export const EFFECTS = {
  standardMotion: true,
  editorialSections: true,
  smoothAnchors: true,
  customCursor: true,
  magneticButtons: true,
  horizontalGallery: true,
  marquee: true,
  statCounters: true,
  ambientThemeShift: true,
  testimonialDeck: true,
} as const;
