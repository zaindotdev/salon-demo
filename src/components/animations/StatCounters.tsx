"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./utils";

export function StatCounters() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (prefersReducedMotion()) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".stat strong").forEach((element) => {
        const original = element.textContent?.trim() ?? "0";
        const match = original.match(/^(\d+)(.*)$/);
        if (!match) return;

        const end = Number(match[1]);
        const digits = match[1].length;
        const suffix = match[2];
        const state = { value: 0 };

        ScrollTrigger.create({
          trigger: element,
          start: "top 86%",
          once: true,
          onEnter: () => {
            gsap.to(state, {
              value: end,
              duration: 1.2,
              ease: "back.out(1.7)",
              onUpdate: () => {
                const value = Math.max(0, Math.round(state.value));
                element.textContent = `${String(value).padStart(digits, "0")}${suffix}`;
              },
              onComplete: () => {
                element.textContent = original;
              },
            });
          },
        });
      });
    }, document.body);

    return () => context.revert();
  }, []);

  return null;
}
