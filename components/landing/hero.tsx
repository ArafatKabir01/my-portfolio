import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/brand-icons";
import { LiveCode } from "./live-code";
import { PROFILE } from "@/lib/landing-data";

// Simple person silhouette used until a real portrait is dropped in /public.
function Silhouette() {
  return (
    <div className="lp-portrait-ph">
      <svg viewBox="0 0 200 200" fill="currentColor" aria-hidden="true">
        <circle cx="100" cy="70" r="42" />
        <path d="M20 200c0-44 36-72 80-72s80 28 80 72H20z" />
      </svg>
    </div>
  );
}

export function Hero() {
  const s = PROFILE.socials;
  return (
    <section id="home" className="lp-hero">
      <div className="lp-hero-copy reveal">
        <span className="lp-pill">
          <span className="lp-pulse" /> {PROFILE.status}
        </span>
        <h1>
          {PROFILE.headlineLine1}
          <br />
          <span className="lp-grad">{PROFILE.headlineLine2}</span>
        </h1>
        <p className="lp-lead">{PROFILE.lead}</p>

        <div className="lp-btn-row">
          <a href="#projects" className="lp-btn lp-btn-primary" data-cursor="hover" data-cursor-label="See work">
            View Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className="lp-btn lp-btn-ghost" data-cursor="hover" data-cursor-label="Say hi">
            <MessageCircle size={16} /> Let&apos;s Talk
          </a>
        </div>

        <div className="lp-socials">
          <a href={s.github} aria-label="GitHub" data-cursor="hover" data-cursor-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={s.linkedin} aria-label="LinkedIn" data-cursor="hover" data-cursor-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href={s.email} aria-label="Email" data-cursor="hover" data-cursor-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="lp-hero-visual reveal">
        <div className="lp-portrait">
          {PROFILE.portrait ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={PROFILE.portrait} alt={`${PROFILE.name}, ${PROFILE.role}`} />
          ) : (
            <Silhouette />
          )}
          <div className="lp-portrait-aurora" />
        </div>
        <LiveCode />
      </div>
    </section>
  );
}
