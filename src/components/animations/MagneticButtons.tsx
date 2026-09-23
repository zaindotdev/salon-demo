"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { hasFinePointer, prefersReducedMotion } from "./utils";

export function MagneticButtons() {
  useLayoutEffect(() => {
    if (prefersReducedMotion() || !hasFinePointer()) return;

    const buttons = gsap.utils.toArray<HTMLElement>("[data-magnetic]");
    const cleanups = buttons.map((button) => {
      const moveX = gsap.quickTo(button, "x", { duration: 0.36, ease: "power3.out" });
      const moveY = gsap.quickTo(button, "y", { duration: 0.36, ease: "power3.out" });

      const onMove = (event: PointerEvent) => {
        const bounds = button.getBoundingClientRect();
        const x = event.clientX - (bounds.left + bounds.width / 2);
        const y = event.clientY - (bounds.top + bounds.height / 2);
        moveX(x * 0.16);
        moveY(y * 0.16);
      };

      const onLeave = () => {
        gsap.to(button, { x: 0, y: 0, duration: 0.72, ease: "elastic.out(1, 0.45)" });
      };

      button.addEventListener("pointermove", onMove);
      button.addEventListener("pointerleave", onLeave);
      return () => {
        button.removeEventListener("pointermove", onMove);
        button.removeEventListener("pointerleave", onLeave);
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      gsap.set(buttons, { clearProps: "x,y" });
    };
  }, []);

  return null;
}
