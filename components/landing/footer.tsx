import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/shared/brand-icons";
import { NAV_LINKS, PROFILE } from "@/lib/landing-data";

export function LandingFooter() {
  const s = PROFILE.socials;
  return (
    <footer className="lp-footer">
      <div className="lp">
        <div className="lp-footer-inner">
          <a href="#home" className="lp-logo" data-cursor="hover">
            <span className="lp-logo-mark">{PROFILE.brand.charAt(0)}</span>
            <span className="lp-logo-text">{PROFILE.brand}</span>
          </a>

          <div className="lp-footer-links">
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} data-cursor="hover">
                {l.label}
              </a>
            ))}
          </div>

          <div className="lp-footer-social">
            <a href={s.github} aria-label="GitHub" data-cursor="hover">
              <GithubIcon size={16} />
            </a>
            <a href={s.linkedin} aria-label="LinkedIn" data-cursor="hover">
              <LinkedinIcon size={16} />
            </a>
            <a href={s.twitter} aria-label="Twitter" data-cursor="hover">
              <TwitterIcon size={16} />
            </a>
            <a href={s.email} aria-label="Email" data-cursor="hover">
              <Mail size={16} />
            </a>
          </div>
        </div>
        <div className="lp-footer-copy" style={{ marginTop: 18, textAlign: "center" }}>
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
