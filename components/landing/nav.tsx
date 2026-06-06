"use client";

import { Download } from "lucide-react";
import { useActiveSection } from "@/hooks";
import { NAV_LINKS, PROFILE } from "@/lib/landing-data";

const IDS = NAV_LINKS.map((l) => l.id);

export function LandingNav() {
  const active = useActiveSection(IDS, "home");
  return (
    <div className="lp-nav-wrap">
      <div className="lp">
        <nav className="lp-nav" data-cursor="hover">
          <a href="#home" className="lp-logo" data-cursor="hover" data-cursor-label="Top">
            <span className="lp-logo-mark">{PROFILE.brand.charAt(0)}</span>
            <span className="lp-logo-text">{PROFILE.brand}</span>
          </a>
          <div className="lp-nav-links">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`lp-nav-link ${active === l.id ? "active" : ""}`}
                data-cursor="hover"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="lp-nav-actions">
            <a
              className="lp-cv-btn"
              href={PROFILE.resumeHref}
              download="Arafat-Kabir-Resume.pdf"
              data-cursor="hover"
              data-cursor-label="CV"
            >
              Download CV <Download size={14} />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
