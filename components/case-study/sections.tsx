"use client";

import {
  Check,
  Quote as QuoteIcon,
  LayoutDashboard,
  ShieldCheck,
  Users,
  CreditCard,
  ScanEye,
  Newspaper,
  Layers,
  Smartphone,
  PenTool,
  Store,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { CaseStudy } from "@/lib/data";
import {
  ImageFrame,
  SectionArrow,
  GoalFlow,
  DevTimeline,
} from "@/components/case-study/animated";

/* numbered admin-capability icons, in PDF order */
const ADMIN_ICONS: readonly LucideIcon[] = [
  LayoutDashboard,
  ShieldCheck,
  Users,
  CreditCard,
  ScanEye,
  Newspaper,
];

const STRATEGY_ICONS: Record<string, LucideIcon> = {
  "Feature List Finalization": Layers,
  "Web + Mobile Approach": Smartphone,
  "Design System": PenTool,
};

const BAND_ICONS: Record<string, LucideIcon> = {
  store: Store,
  "shopping-bag": ShoppingBag,
};

/* ── reusable section heading with the red arrow marker ── */
function Head({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={`sec-head reveal ${light ? "on-dark" : ""}`}>
      <SectionArrow />
      <span>{children}</span>
    </h2>
  );
}

/* ─────────────────────────  HERO  ───────────────────────── */
export function Hero({ data }: { data: CaseStudy }) {
  return (
    <section id="overview" className="study-hero">
      <div className="deco" />
      <div className="meta-strip reveal">
        {data.metaStrip.map((m, i) => (
          <span key={m}>
            {i > 0 && <i className="dot-sep" aria-hidden>•</i>} {m}
          </span>
        ))}
      </div>
      <h1 className="reveal">
        {data.title} <span className="dash">—</span> {data.titleSuffix}
      </h1>
      <div className="hero-shot reveal">
        <span className="hero-badge">
          {data.heroBadge} <span className="badge-pin">1</span>
        </span>
        <ImageFrame src={data.heroImg} alt={`${data.brand} — product banner`} ratio="16/8.2" />
      </div>
    </section>
  );
}

/* ─────────────────────  PROJECT OVERVIEW  ───────────────── */
export function Overview({ data }: { data: CaseStudy }) {
  return (
    <section className="s sec-overview">
      <Head>Project Overview</Head>
      <div className="overview-quote reveal">
        <p>{data.overview}</p>
      </div>
    </section>
  );
}

/* ───────────────────────  PROJECT INFO  ─────────────────── */
export function Info({ data }: { data: CaseStudy }) {
  return (
    <section id="info" className="s sec-info">
      <h3 className="info-head reveal">
        <span className="tri" aria-hidden>▶</span> Project Info
      </h3>
      <div className="info-grid">
        <div className="info-brand reveal">
          <div className="info-logo">
            <span className="info-logo-mark" aria-hidden>{data.info.logoMark}</span>
          </div>
          <h4>
            <b>{data.info.logoText}</b>
          </h4>
          <p>{data.info.tagline}</p>
        </div>
        <div className="info-table reveal">
          {data.info.rows.map(([k, v]) => (
            <div className="info-row" key={k}>
              <span className="k">{k}:</span>
              <span className="v">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────  SET OUR GOAL (dark band)  ─────────────── */
export function Goals({ data }: { data: CaseStudy }) {
  return (
    <section id="goals" className="band band-dark">
      <div className="band-inner">
        <Head light>Set Our Goal</Head>
        <p className="band-lead reveal">{data.goalLead}</p>
        <GoalFlow steps={data.goalSteps} />
      </div>
    </section>
  );
}

/* ──────────────  CLIENT'S BUSINESS CHALLENGE  ───────────── */
export function Challenge({ data }: { data: CaseStudy }) {
  return (
    <section id="challenge" className="s sec-challenge">
      <Head>Client&apos;s Business Challenge</Head>
      <ol className="challenge-stack">
        {data.challenges.map((c, i) => (
          <li
            className="reveal"
            key={c}
            style={{ ["--i" as string]: i, marginLeft: `${i * 34}px` } as React.CSSProperties}
          >
            <span className="ch-num">{i + 1}</span>
            <span className="ch-text" dangerouslySetInnerHTML={{ __html: emph(c, data.emphasize) }} />
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ─────────────────────  PROJECT MOTIVATE  ───────────────── */
export function Motivate({ data }: { data: CaseStudy }) {
  return (
    <section className="s">
      <div className="motivate-card reveal">
        <span className="motivate-tag">Project Motivate</span>
        <p>“{data.motivate}”</p>
      </div>
    </section>
  );
}

/* ─────────────────────────  OUR PROCESS  ────────────────── */
export function Process({ data }: { data: CaseStudy }) {
  return (
    <section id="process" className="s sec-process">
      <Head>Our Process</Head>
      <div className="process-stairs">
        {data.process.map((p, i) => (
          <div
            className="process-card reveal"
            key={p.title}
            style={{ ["--i" as string]: i, ["--lift" as string]: `${i * 26}px` } as React.CSSProperties}
            data-cursor="hover"
          >
            <h5>
              <Sparkles size={15} className="proc-spark" /> {p.title}
            </h5>
            <p className="proc-lead">{p.lead}</p>
            {p.points.length > 0 && (
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="insight reveal">
        <span className="insight-tag">{data.insightTag}</span>
        <p dangerouslySetInnerHTML={{ __html: smartQuotes(data.insight) }} />
      </div>
    </section>
  );
}

/* ───────────────────────  SOLUTION STRATEGY  ────────────── */
export function Strategy({ data }: { data: CaseStudy }) {
  return (
    <section id="strategy" className="s sec-strategy">
      <div className="strategy-grid">
        <div className="strategy-aside">
          <Head>Solution Strategy</Head>
          <p className="s-lead reveal">{data.strategyLead}</p>
        </div>
        <div className="strategy-main">
          <div className="strat-block reveal">
            <h5><Layers size={16} /> Platform architecture</h5>
            <ul className="strat-checks">
              {data.architecture.map((a) => (
                <li key={a}><span className="sc"><Check size={13} /></span>{a}</li>
              ))}
            </ul>
          </div>
          {data.strategyBlocks.map((b, i) => {
            const Icon = STRATEGY_ICONS[b.title] ?? Layers;
            return (
              <div
                className="strat-block reveal"
                key={b.title}
                style={{ ["--i" as string]: i + 1 } as React.CSSProperties}
              >
                <h5><Icon size={16} /> {b.title}</h5>
                <p>{b.body}</p>
                {b.points && (
                  <ul className="strat-checks">
                    {b.points.map((p) => (
                      <li key={p}><span className="sc"><Check size={13} /></span>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────  TECH STACK (dark band)  ─────────────── */
export function Tech({ data }: { data: CaseStudy }) {
  return (
    <section id="stack" className="band band-dark">
      <div className="band-inner">
        <Head light>Tech Stack</Head>
        <p className="band-lead reveal">{data.techLead}</p>
        <div className="tech-rows">
          {data.tech.map((cat, i) => (
            <div
              className="tech-cat reveal"
              key={cat.label}
              style={{ ["--i" as string]: i } as React.CSSProperties}
            >
              <span className="tech-cat-label">
                {cat.label}
                <span className="tech-cat-line" />
              </span>
              <div className="tech-chips">
                {cat.items.map(([n, c]) => (
                  <span
                    key={n}
                    className="tech-chip"
                    style={{ ["--c" as string]: c } as React.CSSProperties}
                    data-cursor="hover"
                  >
                    <span className="tech-glyph" aria-hidden>{n.slice(0, 2)}</span>
                    {n}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────  DEVELOPMENT PROCESS  ──────────────── */
export function Build({ data }: { data: CaseStudy }) {
  return (
    <section id="build" className="s sec-build">
      <Head>Development Process</Head>
      <p className="s-lead reveal">{data.devLead}</p>
      <DevTimeline phases={data.devPhases} />
    </section>
  );
}

/* ───────────────────  CHALLENGES WE SOLVED  ─────────────── */
export function Solved({ data }: { data: CaseStudy }) {
  return (
    <section id="solved" className="s sec-solved">
      <Head>Challenges We Solved</Head>
      <div className="solved-split">
        <div className="solved-black reveal">
          {data.solved.map(([t, d]) => (
            <div className="solved-row" key={t}>
              <Sparkles size={15} className="sv-spark" aria-hidden />
              <div>
                <b>{t}</b>
                <span>{d}</span>
              </div>
            </div>
          ))}
        </div>
        <ImageFrame src={data.solvedImg} alt="Challenges we solved" ratio="9/8" className="solved-img" />
      </div>
    </section>
  );
}

/* ─────────────────────  BUSINESS IMPACT  ────────────────── */
export function Impact({ data }: { data: CaseStudy }) {
  return (
    <section id="impact" className="s sec-impact">
      <Head>Business Impact</Head>
      <p className="s-lead reveal">After delivering the platform, the client gained:</p>
      <div className="impact-split">
        <div className="impact-black reveal">
          {data.impact.map((it) => (
            <div className="impact-row" key={it}>
              <Sparkles size={14} className="im-spark" aria-hidden /> {it}
            </div>
          ))}
          <p className="impact-close">{data.impactClose}</p>
        </div>
        <ImageFrame src={data.impactImg} alt="Business impact" ratio="9/8" className="impact-img" />
      </div>
    </section>
  );
}

/* ──────────────────  UI/UX DESIGN APPROACH  ─────────────── */
export function UX({ data }: { data: CaseStudy }) {
  return (
    <section id="ux" className="s sec-ux">
      <Head>UI/UX Design Approach</Head>
      <p className="s-lead reveal">We designed the platform focusing on:</p>
      <div className="ux-pills">
        {data.uxPills.map((p, i) => (
          <div
            className="ux-pill reveal"
            key={p}
            style={{ ["--i" as string]: i } as React.CSSProperties}
            data-cursor="hover"
          >
            <span className="ux-dot" aria-hidden />
            {p}
          </div>
        ))}
      </div>
      <p className="ux-statement reveal">{data.uxStatement}</p>
    </section>
  );
}

/* ───────────────────────  KEY FEATURES  ─────────────────── */
function FeatureBlock({ f }: { f: CaseStudy["features"][number]["items"][number] }) {
  return (
    <div className="feat-block reveal">
      <h4>
        <span className="tri" aria-hidden>▶</span> {f.title}
      </h4>
      <p>{f.desc}</p>
      <div className={`feat-shots ${f.wide ? "wide" : "tall"}`}>
        {f.shots.map((src, i) => (
          <ImageFrame
            key={`${src}-${i}`}
            src={src}
            alt={`${f.title} — screen ${i + 1}`}
            ratio={f.wide ? "5/4" : "9/16"}
            className="feat-shot"
          />
        ))}
      </div>
    </div>
  );
}

export function Features({ data }: { data: CaseStudy }) {
  return (
    <section id="features" className="s sec-features">
      <Head>Key Features</Head>
      {data.features.map((band) => {
        const Icon = BAND_ICONS[band.icon] ?? Store;
        return (
          <div className="feat-band" key={band.key}>
            <div className="feat-band-label reveal">
              <Icon size={15} /> {band.label}
            </div>
            <div className="feat-list">
              {band.items.map((f) => (
                <FeatureBlock key={f.title} f={f} />
              ))}
            </div>
          </div>
        );
      })}

      {/* Admin Portal band — numbered capability rows */}
      <div className="feat-band" id="admin">
        <div className="feat-band-label reveal">
          <LayoutDashboard size={15} /> Admin Portal
        </div>
        <p className="s-lead reveal" style={{ marginBottom: 8 }}>{data.adminLead}</p>
        <div className="admin-rows">
          {data.admin.map(([t, d], i) => {
            const Icon = ADMIN_ICONS[i] ?? LayoutDashboard;
            return (
              <div className="admin-row reveal" key={t} data-cursor="hover">
                <span className="admin-num">{i + 1}</span>
                <div className="admin-copy">
                  <h5><Icon size={15} className="admin-ic" /> {t}</h5>
                  <p>{d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────  CLIENT FEEDBACK (last)  ─────────────── */
export function Feedback({ data }: { data: CaseStudy }) {
  return (
    <section id="feedback" className="s sec-feedback">
      <Head>Client Feedback</Head>
      <div className="feedback-card reveal">
        <QuoteIcon className="feedback-mark" size={40} aria-hidden />
        <p className="feedback-text">“{data.feedback.text}”</p>
        <div className="feedback-author">
          <b>{data.feedback.name}</b>
          <span>{data.feedback.role}</span>
        </div>
      </div>
    </section>
  );
}

/* ── tiny helpers ──────────────────────────────────────────
   emph(): bold-ifies a couple of key phrases in challenge lines
   to mirror the reference. smartQuotes(): wraps the curly quotes
   in a styled span. Both run on trusted, static copy only. ── */
function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function emph(line: string, phrases: readonly string[] = []) {
  let out = escapeHtml(line);
  for (const phrase of phrases) {
    const safe = escapeHtml(phrase);
    out = out.replace(safe, `<b>${safe}</b>`);
  }
  return out;
}
function smartQuotes(line: string) {
  return escapeHtml(line).replace(/“([^”]+)”/g, '<em class="ins-q">“$1”</em>');
}
