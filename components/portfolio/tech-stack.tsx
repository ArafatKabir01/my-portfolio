import { Code2, Layers, Wrench, Sparkles } from "lucide-react";
import type { StackData } from "@/lib/models/stack.model";

const ICONS = {
  code: Code2,
  layers: Layers,
  tools: Wrench,
  sparkles: Sparkles,
} as const;

function StackCard({ s }: { s: StackData }) {
  const Icon = ICONS[s.iconName];
  return (
    <div
      className="stack-card reveal"
      style={{ ["--c" as string]: s.color } as React.CSSProperties}
      data-cursor="hover"
      data-cursor-label={s.title}
    >
      <div className="stack-head">
        <span className="stack-ico"><Icon size={18} /></span>
        <span className="title">{s.title}</span>
      </div>
      {s.skills.map((skill) => (
        <div key={skill.name} className="skill-row">
          <span className="name">{skill.name}</span>
          <div className="skill-dots">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className={i <= skill.level ? "on" : ""} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

type Props = { stack: StackData[] };

export function TechStack({ stack }: Props) {
  return (
    <section id="stack" className="section">
      <div className="section-head">
        <h3>Tech Stack</h3>
        <span className="meta">Always learning new things 🚀</span>
      </div>
      <div className="stack-grid">
        {stack.map((s) => (
          <StackCard key={s._id ?? s.title} s={s} />
        ))}
      </div>
    </section>
  );
}
