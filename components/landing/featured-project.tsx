import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/landing-data";

export function FeaturedProject() {
  return (
    <section className="lp-section" id="projects">
      <div className="lp-featured-stack">
        {FEATURED_PROJECTS.map((project, i) => (
          <div key={project.title} className="lp-featured-sticky" style={{ zIndex: i + 1 }}>
            <div className="glass glow lp-featured">
              <div className="lp-featured-meta">
                <span className="lp-eyebrow">
                  <span className="dot" /> {project.label}
                </span>
                <h3>{project.title}</h3>
                <p className="sub">{project.subtitle}</p>
                <p className="desc">{project.desc}</p>

                <div className="lp-metric-grid">
                  {project.info.map((row) => (
                    <div key={row.label} className="lp-metric">
                      <div className="l">{row.label}</div>
                      <div className="v">{row.value}</div>
                    </div>
                  ))}
                </div>

                <div className="lp-chip-row">
                  {project.tags.map((t) => (
                    <span key={t} className="lp-chip">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.caseStudyHref}
                  className="lp-case-btn"
                  data-cursor="hover"
                  data-cursor-label="Read"
                >
                  View Case Study <ArrowRight size={15} />
                </Link>
              </div>

              {/* Project banner */}
              <div className="lp-dash" data-cursor="hover" data-cursor-label={project.title}>
                <Image
                  src={project.banner.src}
                  alt={project.banner.alt}
                  width={project.banner.width}
                  height={project.banner.height}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="lp-featured-banner"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
