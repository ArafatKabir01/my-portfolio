import { ArrowRight } from "lucide-react";
import { SKILLS, EXPERIENCE } from "@/lib/landing-data";

// Premium vector SVG icons for each technical skill.
const ICONS: Record<string, React.ReactNode> = {
  react: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </svg>
  ),
  next: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l-6 8V8M16 16v-8" />
    </svg>
  ),
  ts: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M1.125 0h21.75c.621 0 1.125.504 1.125 1.125v21.75c0 .621-.504 1.125-1.125 1.125H1.125C.504 24 0 23.496 0 22.875V1.125C0 .504.504 0 1.125 0zm11.753 17.59c.281-.19.539-.42.772-.69.23-.27.42-.58.56-.93.14-.35.21-.74.21-1.17 0-.5-.1-.93-.3-1.28-.2-.35-.48-.63-.84-.84a4.195 4.195 0 0 0-1.25-.5c-.39-.1-.82-.2-1.28-.31-.46-.11-.9-.25-1.33-.42a2.316 2.316 0 0 1-1.07-.84c-.28-.35-.42-.8-.42-1.36 0-.48.12-.91.36-1.28.24-.37.58-.67 1.02-.88.44-.21.96-.32 1.56-.32.65 0 1.22.12 1.7.35.48.23.88.55 1.2.96l2.12-2.12c-.67-.77-1.48-1.34-2.43-1.72-.95-.38-2.01-.57-3.18-.57-1.17 0-2.22.21-3.15.63s-1.65 1.01-2.16 1.77c-.51.76-.77 1.66-.77 2.7 0 1.13.26 2.05.78 2.76.52.71 1.23 1.24 2.13 1.58.9.34 1.9.59 3 .75s1.97.35 2.58.58c.61.23 1.05.54 1.32.93a2.13 2.13 0 0 1 .41 1.28c0 .54-.15 1-.45 1.38-.3.38-.72.67-1.26.87-.54.2-1.17.3-1.89.3-.96 0-1.78-.23-2.46-.7-.68-.47-1.19-1.14-1.53-2l-2.4 2.4c.54.96 1.29 1.74 2.25 2.34.96.6 2.07.9 3.33.9 1.62 0 3.01-.32 4.17-.96zM22.8 5.76h-5.28v12.48h-2.88V5.76H9.36V3.12h13.44v2.64z" />
    </svg>
  ),
  js: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M3 3h18v18H3V3zm10.74 12.04c-.16-.62-.7-1.06-1.58-1.06-.61 0-.96.32-.96.77 0 .53.47.72 1.27.97l.64.2c1.79.55 2.44 1.34 2.44 2.77 0 1.95-1.49 2.97-3.71 2.97-2.59 0-3.72-1.17-3.96-2.83h1.99c.15.89.65 1.25 1.83 1.25.7 0 1.14-.3 1.14-.87 0-.62-.43-.81-1.34-1.11l-.65-.2c-1.55-.47-2.22-1.26-2.22-2.62 0-1.89 1.46-2.85 3.52-2.85 2.11 0 3.25 1.05 3.53 2.79h-1.96zm4.56-4.22h-1.48v6.93c0 .34-.18.52-.52.52-.34 0-.53-.18-.65-.52H14c.18.73.86 1.57 2.18 1.57 1.34 0 2.14-.78 2.14-2.03V9.82h-.02z" />
    </svg>
  ),
  html: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625 11.203.001.24-2.625H5.441l.71 8h7.886l-.283 3.007-2.753.743-2.753-.743-.176-1.988H5.617l.35 3.993 6.034 1.63 6.035-1.63.62-7.007H8.531z" />
    </svg>
  ),
  css: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.03 5.5H8.232l-.232-2.625 11.203.001.24-2.625H5.441l.71 8h10.432l-.383 4.37-4.38 2.5-4.38-2.5-.26-2.625H5.617l.35 3.993 6.034 1.63 6.035-1.63.62-7.007z" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  socketio: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <path d="m13 10-4 4h3v4l4-4h-3z" fill="currentColor" />
    </svg>
  ),
  redux: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.89-6.38a2.63 2.63 0 0 1-1.32-.35L5 13l3.79-2.27c.39-.23.87-.23 1.26 0l3.79 2.27-3.79 2.27a2.63 2.63 0 0 1-1.32.35zm3.78-6.38a2.63 2.63 0 0 1-1.32-.35L9 6.62l3.79-2.27c.39-.23.87-.23 1.26 0L17.84 6.62l-3.79 2.27a2.63 2.63 0 0 1-1.32.35zm-3.78 0a2.63 2.63 0 0 1-1.32-.35L5 6.62l3.79-2.27c.39-.23.87-.23 1.26 0l3.79 2.27-3.79 2.27a2.63 2.63 0 0 1-1.32.35z" />
    </svg>
  ),
  framer: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M0 24V12h12L0 0h24v12H12l12 12z" />
    </svg>
  ),
  shadcn: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M8 16L16 8" strokeLinecap="round" />
    </svg>
  ),
  node: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12 1.95L3.25 7.02v10.14L12 22.23l8.75-5.07V7.02L12 1.95zm7.3 14.33L12 20.57l-7.3-4.29V8.04L12 3.75l7.3 4.29v8.24zM12 5.86l-5.32 3.12v6.24L12 18.34l5.32-3.12V8.98L12 5.86zm3.56 5.56l-3.56 2.08-3.56-2.08V8.22l3.56-2.08 3.56 2.08v3.2z" />
    </svg>
  ),
  express: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12.5 15.5H18v-2h-3.5v-1.5h3v-2h-3V8.5H18v-2h-5.5v9zm-10-9h2.5L7 11l2-4.5h2.5L8.25 12l3.25 5.5H9L7 13l-2 4.5H2.5L5.75 12 2.5 6.5z" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M23.384 11.24L12.757.616c-.82-.82-2.138-.82-2.957 0L8.71 1.706l3.197 3.197c.72-.245 1.547-.075 2.11.487.563.563.733 1.39.488 2.11l3.197 3.197c.72-.245 1.547-.075 2.11.488.795.794.795 2.083 0 2.877-.794.795-2.083.795-2.877 0-.56-.56-.73-1.383-.488-2.1L13.84 8.76c-.244.246-.584.417-.96.474v8.016c.365.114.677.348.887.658.563.563.733 1.39.488 2.11a2.09 2.09 0 0 1-2.956 0c-.563-.563-.733-1.39-.488-2.11a2.073 2.073 0 0 1 .887-.658v-8.016a2.073 2.073 0 0 1-.887-.658L7.613 5.4 1.707 11.306c-.82.82-.82 2.137 0 2.957l10.627 10.623c.82.82 2.138.82 2.957 0l10.093-10.093c.82-.82.82-2.138 0-2.957z" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
      <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z" opacity="0.6" fill="currentColor" />
      <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" opacity="0.6" fill="currentColor" />
    </svg>
  ),
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
          </div>
          <div className="lp-skill-grid">
            {SKILLS.map((sk) => (
              <div key={sk.name} className="lp-skill" data-cursor="hover">
                <span className="lp-skill-ico" style={{ color: sk.color }}>
                  {ICONS[sk.icon] ?? sk.name.charAt(0)}
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
