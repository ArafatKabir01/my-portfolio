"use client";

import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

type Part = { t: string; cls?: string };
type Line = { t: string; cls?: string; indent?: number; after?: Part[] };

const CODE_LINES: Line[] = [
  { t: "const ", cls: "kw", after: [{ t: "Arafat " }, { t: "= () => {", cls: "punc" }] },
  { indent: 1, t: "return", cls: "kw", after: [{ t: " (", cls: "punc" }] },
  { indent: 2, t: "<", cls: "punc", after: [{ t: "div", cls: "tag" }, { t: " className", cls: "attr" }, { t: "=", cls: "punc" }, { t: '"portfolio"', cls: "str" }, { t: ">", cls: "punc" }] },
  { indent: 3, t: "<", cls: "punc", after: [{ t: "h1", cls: "tag" }, { t: ">", cls: "punc" }, { t: "Building digital products" }, { t: "</", cls: "punc" }, { t: "h1", cls: "tag" }, { t: ">", cls: "punc" }] },
  { indent: 3, t: "<", cls: "punc", after: [{ t: "p", cls: "tag" }, { t: ">", cls: "punc" }, { t: "that users love." }, { t: "</", cls: "punc" }, { t: "p", cls: "tag" }, { t: ">", cls: "punc" }] },
  { indent: 2, t: "</", cls: "punc", after: [{ t: "div", cls: "tag" }, { t: ">", cls: "punc" }] },
  { indent: 1, t: ");", cls: "punc" },
  { t: "};", cls: "punc" },
  { t: " " },
  { t: "export default ", cls: "kw", after: [{ t: "Arafat" }, { t: ";", cls: "punc" }] },
];

export function CodeWindow() {
  const [step, setStep] = useState(0);
  const done = step >= CODE_LINES.length;
  useEffect(() => {
    if (step >= CODE_LINES.length) return;
    const delay = step === 0 ? 600 : 320;
    const t = setTimeout(() => setStep((s) => s + 1), delay);
    return () => clearTimeout(t);
  }, [step]);

  const renderLine = (line: Line, idx: number, isLast: boolean) => {
    const indent = "  ".repeat(line.indent || 0);
    const parts: Part[] = [{ t: line.t, cls: line.cls }, ...(line.after || [])];
    return (
      <div key={idx} style={{ display: "block" }}>
        <span>{indent}</span>
        {parts.map((p, i) =>
          p.cls ? (
            <span key={i} className={p.cls}>{p.t}</span>
          ) : (
            <span key={i}>{p.t}</span>
          )
        )}
        {isLast && !done && <span className="code-cursor" />}
      </div>
    );
  };

  return (
    <div className="code-window" data-cursor="hover" data-cursor-label="index.tsx">
      <div className="code-header">
        <div className="traffic"><span className="r" /><span className="y" /><span className="g" /></div>
        <div className="code-title">index.tsx</div>
      </div>
      <div className="code-body">
        {CODE_LINES.slice(0, step).map((l, i) => renderLine(l, i, i === step - 1))}
      </div>
      <div className="code-badge"><Zap size={14} className="zap" /> <span>Fast · Scalable · Clean</span></div>
    </div>
  );
}
