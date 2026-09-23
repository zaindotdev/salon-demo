"use client";

import { EFFECTS } from "./config";
import { AmbientThemeShift } from "./AmbientThemeShift";
import { CustomCursor } from "./CustomCursor";
import { EditorialSections } from "./EditorialSections";
import { HorizontalGallery } from "./HorizontalGallery";
import { ImageWipes } from "./ImageWipes";
import { MagneticButtons } from "./MagneticButtons";
import { StandardMotion } from "./StandardMotion";
import { SmoothAnchors } from "./SmoothAnchors";
import { StatCounters } from "./StatCounters";
import { TestimonialDeck } from "./TestimonialDeck";

export function SalonEffects() {
  return (
    <>
      {EFFECTS.standardMotion ? <StandardMotion /> : null}
      {EFFECTS.editorialSections ? <EditorialSections /> : null}
      {EFFECTS.smoothAnchors ? <SmoothAnchors /> : null}
      {EFFECTS.customCursor ? <CustomCursor /> : null}
      {EFFECTS.magneticButtons ? <MagneticButtons /> : null}
      {EFFECTS.horizontalGallery ? <HorizontalGallery /> : null}
      {EFFECTS.standardMotion ? <ImageWipes /> : null}
      {EFFECTS.statCounters ? <StatCounters /> : null}
      {EFFECTS.ambientThemeShift ? <AmbientThemeShift /> : null}
      {EFFECTS.testimonialDeck ? <TestimonialDeck /> : null}
    </>
  );
}
