"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./utils";

export function SmoothAnchors() {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));

    const navigate = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.currentTarget as HTMLAnchorElement;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      event.preventDefault();
      ScrollTrigger.refresh();

      if (prefersReducedMotion()) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: "auto" });
        window.history.replaceState(null, "", hash);
        return;
      }

      gsap.to(window, {
        scrollTo: { y: target, offsetY: 80, autoKill: false },
        duration: 1.05,
        ease: "power2.inOut",
        overwrite: "auto",
        onComplete: () => window.history.replaceState(null, "", hash),
      });
    };

    anchors.forEach((anchor) => anchor.addEventListener("click", navigate));
    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", navigate));
      gsap.killTweensOf(window);
    };
  }, []);

  return null;
}
