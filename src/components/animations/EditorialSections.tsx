"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION } from "./config";
import { prefersReducedMotion } from "./utils";

export function EditorialSections() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (prefersReducedMotion()) return;

    const context = gsap.context(() => {
      const compact = window.innerWidth < 769;

      const aboutImage = document.querySelector<HTMLElement>(".about-image");
      const aboutParagraphs = gsap.utils.toArray<HTMLElement>(".about-text p");
      const aboutStats = gsap.utils.toArray<HTMLElement>(".about .stat");

      if (aboutImage) {
        gsap.set(aboutImage, {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
          scale: 1.07,
        });
        gsap.set(aboutParagraphs, { y: compact ? 22 : 34, opacity: 0 });
        gsap.set(aboutStats, { y: compact ? 24 : 42, opacity: 0, rotate: compact ? 0 : 1.5 });

        gsap.timeline({
          scrollTrigger: { trigger: ".about", start: "top 76%", once: true },
          defaults: { ease: MOTION.ease },
        })
          .to(aboutImage, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            scale: 1,
            duration: 1.05,
            ease: MOTION.strongEase,
          })
          .to(aboutParagraphs, { y: 0, opacity: 1, duration: 0.72, stagger: 0.1 }, "-=0.7")
          .to(aboutStats, { y: 0, opacity: 1, rotate: 0, duration: 0.7, stagger: 0.11 }, "-=0.45");
      }

      const hoursNote = document.querySelector<HTMLElement>(".hours-intro > p");
      const hoursLink = document.querySelector<HTMLElement>(".hours-intro .text-link");
      const hoursRows = gsap.utils.toArray<HTMLElement>(".hours-row");
      const hoursDays = hoursRows.map((row) => row.children[0]);
      const hoursRules = hoursRows.map((row) => row.children[1]);
      const hoursTimes = hoursRows.map((row) => row.children[2]);

      gsap.set([hoursNote, hoursLink], { y: 24, opacity: 0 });
      gsap.set(hoursDays, { x: compact ? -14 : -28, opacity: 0 });
      gsap.set(hoursRules, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(hoursTimes, { x: compact ? 14 : 28, opacity: 0 });

      const hoursTimeline = gsap.timeline({
        scrollTrigger: { trigger: ".hours", start: "top 74%", once: true },
        defaults: { ease: MOTION.ease },
      });
      hoursTimeline
        .to([hoursNote, hoursLink], { y: 0, opacity: 1, duration: 0.62, stagger: 0.09 })
        .to(hoursRules, { scaleX: 1, duration: 0.72, stagger: 0.075 }, "-=0.38")
        .to(hoursDays, { x: 0, opacity: 1, duration: 0.52, stagger: 0.075 }, "<")
        .to(hoursTimes, { x: 0, opacity: 1, duration: 0.52, stagger: 0.075 }, "<0.08");

      const contactDetails = gsap.utils.toArray<HTMLElement>(".contact-details > *");
      const map = document.querySelector<HTMLElement>(".map-wrap");
      const form = document.querySelector<HTMLElement>(".booking-form");
      const formFields = gsap.utils.toArray<HTMLElement>(".booking-form > *");

      gsap.set(contactDetails, { y: 26, opacity: 0 });
      gsap.set(map, { clipPath: "inset(0 0 100% 0 round .65rem)", scale: 1.025 });
      gsap.set(form, {
        x: compact ? 0 : 64,
        y: compact ? 34 : 0,
        opacity: 0,
        rotateY: compact ? 0 : -3,
        transformPerspective: 1000,
      });
      gsap.set(formFields, { y: 22, opacity: 0 });

      gsap.timeline({
        scrollTrigger: { trigger: ".contact", start: "top 73%", once: true },
        defaults: { ease: MOTION.ease },
      })
        .to(contactDetails, { y: 0, opacity: 1, duration: 0.62, stagger: 0.09 })
        .to(map, {
          clipPath: "inset(0 0 0% 0 round .65rem)",
          scale: 1,
          duration: 0.92,
          ease: MOTION.strongEase,
        }, "-=0.32")
        .to(form, { x: 0, y: 0, opacity: 1, rotateY: 0, duration: 0.88 }, "-=0.82")
        .to(formFields, { y: 0, opacity: 1, duration: 0.58, stagger: 0.065 }, "-=0.5");
    }, document.body);

    return () => context.revert();
  }, []);

  return null;
}
