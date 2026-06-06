"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

// Wheel/trackpad momentum scrolling, site-wide.
// `root` drives the native window scroll (no wrapper element), so it stays
// compatible with position:fixed (aurora, cursor, progress bar), position:sticky
// (featured-project stack), scroll-driven CSS animations, and the
// IntersectionObserver-based reveal/active-section hooks.
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Honor reduced-motion: skip Lenis entirely so scrolling is instant/native.
  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        // lerp (frame-rate-independent interpolation) instead of duration: with
        // a fixed `duration` every wheel tick restarts the full easing curve,
        // so rapid scrolling visually stutters. lerp glides continuously and is
        // the smoother choice for free wheel scrolling.
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
