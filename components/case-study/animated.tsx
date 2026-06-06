"use client";

import { useEffect, useRef, useState } from "react";
import type { DevPhase, GoalStep } from "@/lib/data";
import { useLightbox } from "@/components/case-study/lightbox";

/* ──────────────────────────────────────────────────────────
   useInView — fire a one-shot boolean when an element scrolls in.
   Drives every self-drawing line / SVG below.
   ────────────────────────────────────────────────────────── */
export function useInView<T extends Element>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

/* ──────────────────────────────────────────────────────────
   SectionArrow — the little red "→" marker that sits before
   every section heading in the reference design. Draws itself
   when the section scrolls into view.
   ────────────────────────────────────────────────────────── */
export function SectionArrow() {
  const { ref, seen } = useInView<HTMLSpanElement>(0.6);
  return (
    <span ref={ref} className={`sec-arrow ${seen ? "go" : ""}`} aria-hidden>
      <svg viewBox="0 0 44 16" width="44" height="16">
        <line className="sa-stem" x1="2" y1="8" x2="34" y2="8" />
        <path className="sa-head" d="M30 3 L38 8 L30 13" fill="none" />
      </svg>
    </span>
  );
}

/* ──────────────────────────────────────────────────────────
   ImageFrame — styled <img> placeholder.
   Any host works; swap the `src` for real screenshots later.
   Click to open the shared lightbox and view the full image.
   ────────────────────────────────────────────────────────── */
export function ImageFrame({
  src,
  alt,
  ratio = "16/10",
  browser,
  className = "",
}: {
  src: string;
  alt: string;
  ratio?: string;
  /** show a fake browser chrome bar with this URL */
  browser?: string;
  className?: string;
}) {
  const { open } = useLightbox();
  return (
    <figure
      className={`img-frame reveal is-zoomable ${className}`}
      style={{ aspectRatio: ratio }}
      onClick={() => open({ src, alt })}
      role="button"
      tabIndex={0}
      aria-label={`${alt} — view full image`}
      data-cursor="hover"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open({ src, alt });
        }
      }}
    >
      {browser && (
        <div className="img-frame-bar">
          <span className="dot" style={{ background: "#ff5f57" }} />
          <span className="dot" style={{ background: "#febc2e" }} />
          <span className="dot" style={{ background: "#28c840" }} />
          <span className="img-frame-url">{browser}</span>
        </div>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      <span className="img-frame-zoom" aria-hidden>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <line x1="16" y1="16" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="11" y1="8" x2="11" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="img-frame-shine" aria-hidden />
    </figure>
  );
}

/* ──────────────────────────────────────────────────────────
   GoalFlow — the "Set Our Goal" stepped flowchart. Cards sit on
   a staircase; dashed connectors draw themselves between them as
   the block scrolls into view, and each card pops in sequence.
   ────────────────────────────────────────────────────────── */
export function GoalFlow({ steps }: { steps: readonly GoalStep[] }) {
  const { ref, seen } = useInView<HTMLDivElement>(0.2);
  return (
    <div ref={ref} className={`goal-flow ${seen ? "go" : ""}`}>
      {steps.map(([label, body], i) => (
        <div
          className="goal-node"
          key={label}
          style={{ ["--i" as string]: i } as React.CSSProperties}
        >
          <span className="goal-connector" aria-hidden />
          <div className="goal-card" data-cursor="hover">
            <span className="goal-step">{label}</span>
            <p>
              {body.split(" · ").map((line, j) => (
                <span className="goal-line" key={j}>
                  <Check12 /> {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* tiny inline check used inside the flow / timeline */
function Check12() {
  return (
    <svg viewBox="0 0 16 16" width="13" height="13" className="mini-check" aria-hidden>
      <path d="M3 8.5 L6.5 12 L13 4" fill="none" />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────
   DevTimeline — the "Development Process" horizontal timeline.
   Each phase drops a vertical stem onto an animated equalizer-
   style baseline; the bars grow in a wave when in view.
   ────────────────────────────────────────────────────────── */
export function DevTimeline({ phases }: { phases: readonly DevPhase[] }) {
  const { ref, seen } = useInView<HTMLDivElement>(0.15);
  const BAR_COUNT = 64;
  return (
    <div ref={ref} className={`dev-timeline ${seen ? "go" : ""}`}>
      <div className="dev-cols">
        {phases.map((p, i) => (
          <div
            className="dev-phase"
            key={p.title}
            style={{
              ["--i" as string]: i,
              // stagger the phases up/down like the reference
              ["--shift" as string]: `${(i % 2 === 0 ? 1 : -1) * 18}px`,
            } as React.CSSProperties}
          >
            <div className="dev-card" data-cursor="hover">
              <h5>{p.title}</h5>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
            <span className="dev-stem" aria-hidden />
            <span className="dev-dot" aria-hidden />
          </div>
        ))}
      </div>
      <div className="dev-eq" aria-hidden>
        {Array.from({ length: BAR_COUNT }).map((_, i) => (
          <span
            className="eq-bar"
            key={i}
            style={{ ["--b" as string]: i, ["--p" as string]: i / BAR_COUNT } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}
