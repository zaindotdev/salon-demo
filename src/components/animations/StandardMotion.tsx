"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION } from "./config";
import { prefersReducedMotion } from "./utils";

export function StandardMotion() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (prefersReducedMotion()) return;

    const context = gsap.context(() => {
      const navItems = gsap.utils.toArray<HTMLElement>(
        ".site-header .brand, .desktop-nav a, .mobile-nav, .header-cta",
      );

      gsap.from(navItems, {
        y: -18,
        opacity: 0,
        duration: MOTION.fastDuration,
        stagger: 0.05,
        ease: MOTION.ease,
      });

      gsap.fromTo(
        ".site-header",
        {
          backgroundColor: "rgba(9, 10, 11, 0)",
          borderBottomColor: "rgba(255,255,255,0)",
          backdropFilter: "blur(0px)",
        },
        {
          backgroundColor: "rgba(9, 10, 11, 0.88)",
          borderBottomColor: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(18px)",
          ease: MOTION.transitionEase,
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom 35%",
            scrub: 0.7,
          },
        },
      );

      const heroTimeline = gsap.timeline({
        defaults: { ease: MOTION.strongEase },
        delay: 0.08,
      });

      heroTimeline
        .from(".hero-brand-name", {
          scale: 0.88,
          opacity: 0,
          duration: 0.72,
          transformOrigin: "left center",
        })
        .from(
          ".hero-title .split-word",
          {
            yPercent: 115,
            rotate: 5,
            opacity: 0,
            duration: 0.82,
            stagger: 0.055,
          },
          "-=0.34",
        )
        .from(
          ".hero-eyebrow, .hero-description",
          { y: 28, opacity: 0, duration: 0.66, stagger: 0.1 },
          "-=0.5",
        )
        .from(
          ".hero-actions .button",
          { y: 24, opacity: 0, duration: 0.6, stagger: 0.17 },
          "-=0.34",
        )
        .from(
          ".hero-card, .vertical-label",
          { y: 16, opacity: 0, duration: 0.52, stagger: 0.08 },
          "-=0.25",
        );

      gsap.to(".hero-content", {
        yPercent: 12,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".hero-visual > img", {
        yPercent: 7,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.85,
        },
      });

      gsap.utils.toArray<HTMLElement>(".section-heading").forEach((heading) => {
        const eyebrow = heading.querySelector(".eyebrow");
        const words = heading.querySelectorAll(".split-word");
        const description = heading.querySelector(".section-description");
        const targets = [eyebrow, ...Array.from(words), description].filter(Boolean);

        gsap.from(targets, {
          yPercent: 80,
          rotate: 3,
          opacity: 0,
          duration: MOTION.duration,
          stagger: 0.045,
          ease: MOTION.ease,
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
            once: true,
          },
        });
      });

      ScrollTrigger.batch(".service-card", {
        start: "top 82%",
        once: true,
        onEnter: (elements) => {
          gsap.from(elements, {
            y: 48,
            scale: 0.95,
            opacity: 0,
            duration: MOTION.duration,
            stagger: MOTION.stagger,
            ease: MOTION.ease,
          });
        },
      });

      gsap.from(".testimonial-deck", {
        y: 44,
        opacity: 0,
        duration: 0.9,
        ease: MOTION.ease,
        scrollTrigger: {
          trigger: ".testimonial-deck",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from("footer .footer-main, footer .footer-bottom", {
        y: 24,
        opacity: 0,
        duration: 0.72,
        stagger: 0.12,
        ease: MOTION.ease,
        scrollTrigger: {
          trigger: "footer",
          start: "top 90%",
          once: true,
        },
      });

      gsap.to(".whatsapp", {
        scale: 1.045,
        boxShadow: "0 1rem 2.8rem rgba(37, 211, 102, 0.34)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, document.body);

    const refresh = () => ScrollTrigger.refresh();
    const images = Array.from(document.images);
    images.forEach((image) => image.addEventListener("load", refresh, { once: true }));
    window.addEventListener("resize", refresh);
    window.addEventListener("load", refresh, { once: true });

    return () => {
      images.forEach((image) => image.removeEventListener("load", refresh));
      window.removeEventListener("resize", refresh);
      window.removeEventListener("load", refresh);
      context.revert();
    };
  }, []);

  return null;
}
