"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { prefersReducedMotion } from "./utils";

export function TestimonialDeck() {
  useLayoutEffect(() => {
    gsap.registerPlugin(Draggable, InertiaPlugin);
    if (prefersReducedMotion()) return;

    const deck = document.querySelector<HTMLElement>(".testimonial-deck");
    if (!deck) return;

    const cards = gsap.utils.toArray<HTMLElement>(".testimonial-card", deck);
    let order = [...cards];
    const instances = new Map<HTMLElement, Draggable>();

    const positionStack = (immediate = false) => {
      order.forEach((card, index) => {
        gsap.to(card, {
          x: index * 9,
          y: index * 15,
          rotation: index === 0 ? 0 : index % 2 === 0 ? 2.2 : -2.2,
          scale: 1 - index * 0.035,
          opacity: 1 - index * 0.12,
          zIndex: order.length - index,
          duration: immediate ? 0 : 0.55,
          ease: "power3.out",
        });
      });
    };

    const activateTop = () => {
      instances.forEach((instance, card) => {
        if (card === order[0]) instance.enable();
        else instance.disable();
      });
      order[0]?.classList.add("is-active");
      order.slice(1).forEach((card) => card.classList.remove("is-active"));
    };

    cards.forEach((card) => {
      const [instance] = Draggable.create(card, {
        type: "x",
        inertia: true,
        edgeResistance: 0.82,
        cursor: "grab",
        activeCursor: "grabbing",
        snap: {
          x: (value) =>
            Math.abs(value) > 72
              ? Math.sign(value) * Math.max(window.innerWidth * 0.72, 520)
              : 0,
        },
        onDrag() {
          gsap.set(card, { rotation: this.x / 35 });
        },
        onThrowUpdate() {
          gsap.set(card, { rotation: this.x / 35 });
        },
        onThrowComplete() {
          if (Math.abs(this.x) > 72) {
            order.push(order.shift() as HTMLElement);
            gsap.set(card, { x: 0, rotation: 0 });
            positionStack();
            activateTop();
          } else {
            gsap.to(card, { x: 0, rotation: 0, duration: 0.65, ease: "elastic.out(1, 0.5)" });
          }
        },
      });
      instances.set(card, instance);
    });

    positionStack(true);
    activateTop();

    return () => {
      instances.forEach((instance) => instance.kill());
      gsap.set(cards, { clearProps: "all" });
    };
  }, []);

  return null;
}
