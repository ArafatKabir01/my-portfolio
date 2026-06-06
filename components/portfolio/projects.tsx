import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/brand-icons";
import { PORTFOLIO_MOCKS } from "@/components/mocks/portfolio-mocks";
import type { ProjectData } from "@/lib/models/project.model";

function ProjectCard({ p }: { p: ProjectData }) {
  const Mock = PORTFOLIO_MOCKS[p.mock];
  const caseHref = p.caseStudy ? `/case-study/${p.caseStudy}` : "#";
  return (
    <article className="project-card reveal" data-cursor="hover" data-cursor-label={p.title}>
      <div className="project-thumb">
        {p.useImage && p.image ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            style={{ objectFit: "cover", borderRadius: "inherit" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <Mock />
        )}
      </div>
      <div className="project-body">
        <h4>{p.title}</h4>
        <p>{p.desc}</p>
        <div className="tag-row">
          {p.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="project-actions">
          <Link
            href={caseHref}
            className="project-link"
            data-cursor="hover"
            data-cursor-label={p.caseStudy ? "Read case" : "Coming soon"}
          >
            <span>{p.caseStudy ? "Case study" : "Live Demo"}</span>
            <ExternalLink size={12} />
          </Link>
          <a className="project-link bare" href="#" data-cursor="hover">
            <span>GitHub</span>
            <GithubIcon size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

type Props = { projects: ProjectData[] };

export function Projects({ projects }: Props) {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <h3>Featured Projects</h3>
        <span className="meta">
          <a href="#" data-cursor="hover">View all projects →</a>
        </span>
      </div>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p._id ?? p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
