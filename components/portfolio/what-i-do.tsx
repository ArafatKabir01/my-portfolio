import { Network, Gauge, Triangle, Puzzle } from "lucide-react";
import type { WIDData } from "@/lib/models/wid.model";

const ICONS = {
  arch: Network,
  perf: Gauge,
  uiux: Triangle,
  puzzle: Puzzle,
} as const;

function Card({ w }: { w: WIDData }) {
  const Icon = ICONS[w.iconName];
  return (
    <div
      className="wid-card reveal"
      style={{ ["--c" as string]: w.color } as React.CSSProperties}
      data-cursor="hover"
      data-cursor-label={w.title}
    >
      <div className="wid-head">
        <span className="ico"><Icon size={18} /></span>
        <h5>{w.title}</h5>
      </div>
      <p>{w.desc}</p>
    </div>
  );
}

type Props = { wid: WIDData[] };

export function WhatIDo({ wid }: Props) {
  return (
    <section className="section">
      <div className="section-head"><h3>What I Do</h3></div>
      <div className="wid-grid">
        {wid.map((w) => (
          <Card key={w._id ?? w.title} w={w} />
        ))}
      </div>
    </section>
  );
}
