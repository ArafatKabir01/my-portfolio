"use client";

import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    const label = document.querySelector<HTMLElement>(".cursor-label");
    if (!dot || !ring || !label) return;

    let mx = -100,
      my = -100,
      rx = -100,
      ry = -100,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const onDown = () => ring.classList.add("click");
    const onUp = () => ring.classList.remove("click");
    const onLeave = () => {
      dot.classList.add("hidden");
      ring.classList.add("hidden");
    };
    const onEnter = () => {
      dot.classList.remove("hidden");
      ring.classList.remove("hidden");
    };
    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      if (el) {
        const type = el.getAttribute("data-cursor");
        ring.classList.remove("hover", "text");
        if (type === "text") ring.classList.add("text");
        else ring.classList.add("hover");
        const lab = el.getAttribute("data-cursor-label");
        if (lab) {
          label.textContent = lab;
          label.classList.add("show");
        } else {
          label.classList.remove("show");
        }
      } else {
        ring.classList.remove("hover", "text");
        label.classList.remove("show");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onOver);

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
      ring.style.transform = `translate3d(${rx - 19}px, ${ry - 19}px, 0)`;
      label.style.transform = `translate3d(${mx + 16}px, ${my + 16}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" />
      <div className="cursor-dot" />
      <div className="cursor-label" />
    </>
  );
}
