"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { hasFinePointer, prefersReducedMotion } from "./utils";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const label = labelRef.current;
    if (
      !cursor ||
      !dot ||
      !label ||
      prefersReducedMotion() ||
      !hasFinePointer() ||
      window.innerWidth < 769
    ) return;

    // The dot is immediate for accuracy; only the ring trails, and just enough
    // to feel polished without disconnecting from the user's hand.
    const setDotX = gsap.quickSetter(dot, "x", "px");
    const setDotY = gsap.quickSetter(dot, "y", "px");
    const setRingX = gsap.quickSetter(cursor, "x", "px");
    const setRingY = gsap.quickSetter(cursor, "y", "px");
    const ringPosition = { x: 0, y: 0 };
    const moveX = gsap.quickTo(ringPosition, "x", {
      duration: 0.16,
      ease: "power3.out",
      onUpdate: () => setRingX(ringPosition.x),
    });
    const moveY = gsap.quickTo(ringPosition, "y", {
      duration: 0.16,
      ease: "power3.out",
      onUpdate: () => setRingY(ringPosition.y),
    });
    const scaleX = gsap.quickTo(cursor, "scaleX", { duration: 0.2, ease: "power3.out" });
    const scaleY = gsap.quickTo(cursor, "scaleY", { duration: 0.2, ease: "power3.out" });
    const scaleTo = (value: number) => {
      scaleX(value);
      scaleY(value);
    };
    let enabled = false;

    const onMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      // Do not suppress the native cursor until the replacement is positioned
      // and visible. This avoids the cursor briefly disappearing after load.
      if (!enabled) {
        ringPosition.x = event.clientX;
        ringPosition.y = event.clientY;
        gsap.set(cursor, { x: event.clientX, y: event.clientY, opacity: 1 });
        gsap.set(dot, { x: event.clientX, y: event.clientY, opacity: 1 });
        document.documentElement.classList.add("custom-cursor-enabled");
        enabled = true;
        return;
      }
      setDotX(event.clientX);
      setDotY(event.clientY);
      moveX(event.clientX);
      moveY(event.clientY);
      gsap.to(cursor, { opacity: 1, duration: 0.12, overwrite: "auto" });
      if (!cursor.classList.contains("is-active")) {
        gsap.to(dot, { opacity: 1, duration: 0.12, overwrite: "auto" });
      }
    };

    const onOver = (event: PointerEvent) => {
      setDotX(event.clientX);
      setDotY(event.clientY);
      moveX(event.clientX);
      moveY(event.clientY);
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      if (!target) return;
      label.textContent = target.dataset.cursor ?? "View";
      scaleTo(1.75);
      gsap.to(dot, { scale: 0.55, opacity: 0.35, duration: 0.18, ease: "power3.out", overwrite: "auto" });
      cursor.classList.add("is-active");
    };

    const onOut = (event: PointerEvent) => {
      const from = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      const to = (event.relatedTarget as HTMLElement | null)?.closest?.("[data-cursor]");
      if (!from || to === from) return;
      label.textContent = "";
      scaleTo(1);
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.18, ease: "power3.out", overwrite: "auto" });
      cursor.classList.remove("is-active");
    };

    const onLeave = () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      enabled = false;
      gsap.set([cursor, dot], { opacity: 0 });
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf([cursor, dot]);
      gsap.killTweensOf(ringPosition);
      document.documentElement.classList.remove("custom-cursor-enabled");
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true"><span ref={labelRef} /></div>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
