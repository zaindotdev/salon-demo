"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isLowEndDevice, prefersReducedMotion } from "./utils";

const themes = [
  { selector: ".services", color: "#d4ad67", ambient: "rgba(212, 173, 103, 0.13)" },
  { selector: ".gallery-section", color: "#b98b57", ambient: "rgba(185, 139, 87, 0.12)" },
  { selector: ".about", color: "#c99572", ambient: "rgba(201, 149, 114, 0.12)" },
  { selector: ".hours", color: "#d0b078", ambient: "rgba(150, 108, 65, 0.13)" },
  { selector: ".testimonials", color: "#c89c68", ambient: "rgba(155, 111, 75, 0.13)" },
];

export function AmbientThemeShift() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (prefersReducedMotion() || isLowEndDevice()) return;

    const context = gsap.context(() => {
      themes.forEach((theme) => {
        gsap.to(document.documentElement, {
          "--accent": theme.color,
          "--ambient": theme.ambient,
          ease: "none",
          scrollTrigger: {
            trigger: theme.selector,
            start: "top 75%",
            end: "bottom 25%",
            scrub: 1.2,
          },
        });
      });
    }, document.body);

    return () => context.revert();
  }, []);

  return null;
}
