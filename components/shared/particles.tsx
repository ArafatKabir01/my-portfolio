"use client";

import { useEffect, useRef } from "react";

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    let w = 0,
      h = 0,
      raf = 0,
      mouseX = 0,
      mouseY = 0;
    const dots = Array.from({ length: 60 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0004,
      vy: (Math.random() - 0.5) * 0.0004,
    }));
    // DPR-aware but capped — a backing buffer larger than the viewport (e.g.
    // 300vh) is a huge compositor layer that re-rasterizes every scroll frame
    // and judders. The canvas is fixed to one viewport, so it never moves on
    // scroll and stays a single stable layer.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    const onMove = (e: MouseEvent) => {
      // Canvas is viewport-fixed now, so use raw viewport coords (no scrollY).
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMove);
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > 1) d.vx *= -1;
        if (d.y < 0 || d.y > 1) d.vy *= -1;
        const px = d.x * w,
          py = d.y * h;
        const dx = px - mouseX,
          dy = py - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const a = Math.max(0.15, 1 - dist / 300) * 0.5;
        ctx.fillStyle = `rgba(167, 139, 250, ${a})`;
        ctx.beginPath();
        ctx.arc(px, py, 1.2, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        opacity: 0.6,
        zIndex: 0,
      }}
    />
  );
}
