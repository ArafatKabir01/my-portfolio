import { ArrowRight } from "lucide-react";
import { SKILLS, EXPERIENCE } from "@/lib/landing-data";

// Short glyph label for each skill icon (kept text-only — no external logos).
const GLYPH: Record<string, string> = {
  react: "⚛",
  next: "N",
  ts: "TS",
  tailwind: "≋",
  node: "⬡",
  redux: "↻",
  express: "ex",
  framer: "▲",
  shadcn: "◧",
  ai: "✦",
};

export function SkillsExperience() {
  return (
    <section className="lp-section" id="services-anchor">
      <div className="lp-2col">
        {/* Technical Skills */}
        <div className="glass glow lp-panel reveal">
          <div className="lp-panel-head">
            <span className="lp-eyebrow">
              <span className="dot" /> Technical Skills
            </span>
            <a href="#" className="lp-viewall" data-cursor="hover">
              View All <ArrowRight size={13} />
            </a>
          </div>
          <div className="lp-skill-grid">
            {SKILLS.map((sk) => (
              <div key={sk.name} className="lp-skill" data-cursor="hover">
                <span className="lp-skill-ico" style={{ color: sk.color }}>
                  {GLYPH[sk.icon] ?? sk.name.charAt(0)}
                </span>
                <div className="lp-skill-name">{sk.name}</div>
                <div className="lp-skill-pct">{sk.level}%</div>
                <div className="lp-bar">
                  <i style={{ width: `${sk.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="glass glow lp-panel reveal" id="experience">
          <div className="lp-panel-head">
            <span className="lp-eyebrow">
              <span className="dot" /> Experience Timeline
            </span>
            <a href="#" className="lp-viewall" data-cursor="hover">
              View All <ArrowRight size={13} />
            </a>
          </div>
          <div className="lp-timeline">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="lp-exp">
                <span className="lp-exp-node" />
                <div className="when">{exp.when}</div>
                <h5>{exp.title}</h5>
                <p className="co">{exp.company}</p>
                <p>{exp.desc}</p>
                <div className="lp-exp-metrics">
                  {exp.metrics.map((m) => (
                    <span key={m.k} className="lp-exp-metric">
                      <b>{m.v}</b>
                      <span>{m.k}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
