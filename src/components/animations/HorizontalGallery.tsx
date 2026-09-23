"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isLowEndDevice, prefersReducedMotion } from "./utils";

export function HorizontalGallery() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector<HTMLElement>(".horizontal-gallery");
    const track = document.querySelector<HTMLElement>(".gallery-track");
    if (!section || !track || prefersReducedMotion() || isLowEndDevice()) return;

    const media = gsap.matchMedia();
    media.add("(min-width: 769px)", () => {
      section.classList.add("is-pinned");

      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 96);
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          id: "gallery-horizontal",
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        section.classList.remove("is-pinned");
        gsap.set(track, { clearProps: "transform" });
      };
    });

    return () => media.revert();
  }, []);

  return null;
}
