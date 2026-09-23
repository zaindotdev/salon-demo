"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION } from "./config";
import { prefersReducedMotion } from "./utils";

export function ImageWipes() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (prefersReducedMotion()) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".hero-visual",
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.05,
          ease: MOTION.strongEase,
          delay: 0.18,
        },
      );

      gsap.from(".hero-visual > img", {
        scale: 1.16,
        duration: 1.2,
        ease: MOTION.strongEase,
        delay: 0.18,
      });

      gsap.utils.toArray<HTMLElement>(".gallery-item").forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            clipPath:
              index % 2 === 0
                ? "polygon(0 0, 0 0, 0 100%, 0 100%)"
                : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 0.95,
            ease: MOTION.strongEase,
            scrollTrigger: {
              trigger: item,
              start: "left 90%",
              containerAnimation: ScrollTrigger.getById("gallery-horizontal")?.animation,
              once: true,
            },
          },
        );

        const image = item.querySelector("img");
        if (image) {
          gsap.from(image, {
            scale: 1.12,
            duration: 1.1,
            ease: MOTION.strongEase,
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          });
        }
      });
    }, document.body);

    return () => context.revert();
  }, []);

  return null;
}
