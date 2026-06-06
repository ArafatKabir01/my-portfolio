"use client";

import { Download } from "lucide-react";
import { useActiveSection } from "@/hooks";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
] as const;
const IDS = LINKS.map((l) => l.id);

export function Nav() {
  const active = useActiveSection(IDS, "home");
  return (
    <nav className="nav" data-cursor="hover">
      <a href="#home" className="logo" data-cursor="hover" data-cursor-label="Top">
        Arafat Kabir<span className="dot">.</span>
      </a>
      <div className="nav-links">
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`nav-link ${active === l.id ? "active" : ""}`}
            data-cursor="hover"
          >
            {l.label}
          </a>
        ))}
      </div>
      <div className="nav-actions">
        <a className="resume-btn" href="#" data-cursor="hover" data-cursor-label="PDF">
          <Download size={14} /> Download Resume
        </a>
      </div>
    </nav>
  );
}
