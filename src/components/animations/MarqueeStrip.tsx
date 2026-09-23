"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "./utils";

export function MarqueeStrip({ items }: { items: readonly string[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const track = root?.querySelector<HTMLElement>(".marquee-track");
    if (!root || !track || prefersReducedMotion()) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 30,
      repeat: -1,
      ease: "none",
    });

    const pause = () => tween.pause();
    const play = () => tween.play();
    root.addEventListener("pointerenter", pause);
    root.addEventListener("pointerleave", play);

    return () => {
      root.removeEventListener("pointerenter", pause);
      root.removeEventListener("pointerleave", play);
      tween.kill();
    };
  }, []);

  return (
    <div className="marquee" ref={rootRef} aria-label="Salon highlights">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}><i aria-hidden="true">✦</i>{item}</span>
        ))}
      </div>
    </div>
  );
}
