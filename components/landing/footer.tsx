import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/brand-icons";
import { NAV_LINKS, PROFILE } from "@/lib/landing-data";

export function LandingFooter() {
  const s = PROFILE.socials;
  return (
    <footer className="lp-footer" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background Map Watermark */}
      <svg 
        viewBox="0 0 24 24" 
        fill="#00a87d" 
        style={{ 
          position: "absolute", 
          right: "5%", 
          top: "50%", 
          width: "160px", 
          height: "160px", 
          opacity: 0.15, 
          pointerEvents: "none",
          transform: "translateY(-50%) rotate(-5deg)"
        }}
      >
        <path d="M20.735,18.397L20.653,21.336L19.324,20.714L19.57,24L18.488,21.876L18.269,19.792L17.543,17.813L15.953,15.415L12.445,15.254L12.788,16.95L11.596,19.237L9.979,18.404L9.417,19.154L8.348,18.703L6.869,18.334L6.279,14.946L4.964,11.833L5.608,9.324L3.265,8.2L4.114,6.675L6.485,5.111L3.744,2.877L5.087,0L8.102,1.831L9.924,2.046L10.253,4.976L13.884,5.552L17.406,5.495L19.598,6.214L17.844,9.755L16.145,9.995L14.967,12.36L17.049,14.506L17.68,11.861L18.721,11.847Z" />
      </svg>
      <div className="lp" style={{ position: "relative", zIndex: 1 }}>
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
            <a href={s.email} aria-label="Email" data-cursor="hover">
              <Mail size={16} />
            </a>
          </div>
        </div>
        <div className="lp-footer-copy" style={{ marginTop: 18, textAlign: "center", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.9em", opacity: 0.8 }}>
            Architected with <span style={{ color: "#f42a41" }}>♥</span> in Bangladesh
          </div>
        </div>
      </div>
    </footer>
  );
}
