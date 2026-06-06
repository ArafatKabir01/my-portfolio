"use client";

import { useEffect, useState } from "react";
import { HERO_CODE } from "@/lib/landing-data";

type Part = { t: string; c?: string };
type Line = { i?: number; t: string; c?: string; a?: readonly Part[] };

export function LiveCode() {
  const lines = HERO_CODE as readonly Line[];
  const [step, setStep] = useState(0);
  const done = step >= lines.length;

  useEffect(() => {
    if (step >= lines.length) return;
    const t = setTimeout(() => setStep((s) => s + 1), step === 0 ? 500 : 260);
    return () => clearTimeout(t);
  }, [step, lines.length]);

  const renderLine = (line: Line, idx: number, isLast: boolean) => {
    const indent = "  ".repeat(line.i ?? 0);
    const parts: Part[] = [{ t: line.t, c: line.c }, ...(line.a ?? [])];
    return (
      <span className="lp-code-line" key={idx}>
        {indent}
        {parts.map((p, i) =>
          p.c ? (
            <span key={i} className={p.c}>
              {p.t}
            </span>
          ) : (
            <span key={i}>{p.t}</span>
          )
        )}
        {isLast && !done && <span className="lp-code-cursor" />}
      </span>
    );
  };

  return (
    <div className="lp-code" data-cursor="hover" data-cursor-label="developer.ts">
      <div className="lp-code-head">
        <div className="lp-traffic">
          <span className="r" />
          <span className="y" />
          <span className="g" />
        </div>
        <div className="lp-code-title">
          <span className="live" /> Live Coding
        </div>
      </div>
      <div className="lp-code-body">
        {lines.slice(0, step).map((l, i) => renderLine(l, i, i === step - 1))}
      </div>
    </div>
  );
}
