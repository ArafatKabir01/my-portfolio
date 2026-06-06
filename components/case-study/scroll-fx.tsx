"use client";

import { useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

/* ──────────────────────────────────────────────────────────
   ScrollFX — Lenis-driven, scroll-linked motion for the case
   study page. Everything here writes CSS custom properties on
   a per-frame basis (driven by Lenis' smoothed scroll value, NOT
   raw `scroll` events) so the GPU does the painting and the
   existing IntersectionObserver reveals/active-section/progress
   logic keep working untouched.

   It paints three signature effects:
     • hero parallax     — the banner drifts slower than the page
                            and eases its scale as it leaves view
     • section depth      — each .s / .band reports a 0→1 "enter"
                            progress used for a smooth lift + fade
                            that goes beyond the one-shot .reveal
     • momentum skew      — a global --cs-vel reflects scroll
                            velocity, giving image frames a tiny
                            inertial skew (the "expensive" feel)

   Honors prefers-reduced-motion and coarse pointers (mobile):
   in those cases it self-disables and leaves native behavior.
   ────────────────────────────────────────────────────────── */
export function ScrollFX() {
  // Elements we drive each frame. Collected once on mount and on
  // DOM-size changes so we never re-query inside the rAF callback.
  const heroRef = useRef<HTMLElement | null>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const enabledRef = useRef(true);
  // Smoothed velocity so the skew settles instead of jittering.
  const velRef = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    enabledRef.current = !reduce && !coarse;
    if (!enabledRef.current) return;

    const collect = () => {
      heroRef.current = document.querySelector<HTMLElement>(".cs-page .study-hero");
      sectionsRef.current = Array.from(
        document.querySelectorAll<HTMLElement>(".cs-page .s, .cs-page .band")
      );
    };
    collect();

    // Re-collect if the page reflows (images load, fonts swap…).
    const ro = new ResizeObserver(collect);
    ro.observe(document.body);
    return () => ro.disconnect();
  }, []);

  // Single per-frame callback, prioritized AFTER Lenis' internal
  // scroll so we read the freshest smoothed value. `velocity` is
  // Lenis' own momentum figure (px/frame-ish), perfect for skew.
  useLenis(
    (lenis) => {
      if (!enabledRef.current) return;
      const vh = window.innerHeight;

      // ── momentum skew (smoothed, clamped) ──
      const targetVel = Math.max(-1, Math.min(1, lenis.velocity / 40));
      velRef.current += (targetVel - velRef.current) * 0.1;
      document.documentElement.style.setProperty(
        "--cs-vel",
        velRef.current.toFixed(4)
      );

      // ── hero parallax ──
      const hero = heroRef.current;
      if (hero) {
        const top = hero.getBoundingClientRect().top;
        // 0 while pinned at top, →1 as the hero scrolls away
        const out = Math.max(0, Math.min(1, -top / vh));
        hero.style.setProperty("--cs-hero", out.toFixed(4));
      }

      // ── section enter depth ──
      // 0 just before a section's top reaches 85% of the viewport,
      // 1 once its top passes 35% — a soft band that drives a lift.
      const start = vh * 0.85;
      const end = vh * 0.35;
      for (const sec of sectionsRef.current) {
        const t = sec.getBoundingClientRect().top;
        const p = Math.max(0, Math.min(1, (start - t) / (start - end)));
        sec.style.setProperty("--cs-enter", p.toFixed(4));
      }
    },
    [],
    // priority 1 → runs after Lenis core (priority 0)
    1
  );

  // Clean up the inline props if the effect ever disables so we
  // don't leave the page frozen mid-transform.
  useEffect(() => {
    return () => {
      document.documentElement.style.removeProperty("--cs-vel");
      heroRef.current?.style.removeProperty("--cs-hero");
      sectionsRef.current.forEach((s) => s.style.removeProperty("--cs-enter"));
    };
  }, []);

  return null;
}
