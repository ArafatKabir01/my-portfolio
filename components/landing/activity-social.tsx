import { ArrowRight } from "lucide-react";
import { GITHUB, TESTIMONIALS, ARTICLES } from "@/lib/landing-data";

// Deterministic contribution heat-grid (14 cols × 7 rows = 98 cells).
// Intensity derived from a fixed formula so SSR and client match exactly.
const CELLS = Array.from({ length: 98 }, (_, i) => {
  const v = (i * 37 + ((i % 7) * 13)) % 100;
  const intensity = v / 100; // 0..1
  return 0.08 + intensity * 0.55; // opacity range
});

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export function ActivitySocial() {
  return (
    <section className="lp-section" id="blog">
      <div className="lp-3col">
        {/* GitHub Activity */}
        <div className="glass glow lp-panel reveal">
          <div className="lp-panel-head">
            <span className="lp-eyebrow">
              <span className="dot" /> GitHub Activity
            </span>
            <span className="lp-stat-sub">{GITHUB.contributions}</span>
          </div>
          <div className="lp-gh-grid">
            {CELLS.map((op, i) => (
              <span key={i} className="lp-gh-cell" style={{ background: `rgba(124,92,255,${op})` }} />
            ))}
          </div>
          <div className="lp-gh-stats">
            <div className="lp-gh-stat">
              <div className="n">{GITHUB.longestStreak}</div>
              <div className="l">Longest Streak</div>
            </div>
            <div className="lp-gh-stat">
              <div className="n">{GITHUB.repos}</div>
              <div className="l">Repositories</div>
            </div>
            <div className="lp-gh-stat">
              <div className="n">{GITHUB.since}</div>
              <div className="l">Since</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="glass glow lp-panel reveal">
          <div className="lp-panel-head">
            <span className="lp-eyebrow">
              <span className="dot" /> What People Say
            </span>
          </div>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="lp-quote">
              <p>&ldquo;{t.quote}&rdquo;</p>
              <div className="lp-quote-foot">
                <span className="lp-avatar">{initials(t.name)}</span>
                <span>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </span>
                <span className="lp-stars">{"★".repeat(t.rating)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Latest Articles */}
        <div className="glass glow lp-panel reveal">
          <div className="lp-panel-head">
            <span className="lp-eyebrow">
              <span className="dot" /> Latest Articles
            </span>
            <a href="#" className="lp-viewall" data-cursor="hover">
              View All <ArrowRight size={13} />
            </a>
          </div>
          {ARTICLES.map((a, i) => (
            <a key={i} href="#" className="lp-article" data-cursor="hover">
              <span className="lp-article-thumb" style={{ ["--a" as string]: a.accent }} />
              <span>
                <h6>{a.title}</h6>
                <span className="meta">
                  {a.date} · {a.read}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
