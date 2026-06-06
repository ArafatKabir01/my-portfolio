import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ABOUT } from "@/lib/landing-data";

export function About() {
  return (
    <section className="lp-section" id="about">
      <div className="glass glow lp-about reveal">
        {/* Text */}
        <div className="lp-about-meta">
          <span className="lp-eyebrow">
            <span className="dot" /> {ABOUT.label}
          </span>
          <h3>{ABOUT.title}</h3>

          {ABOUT.paragraphs.map((p) => (
            <p key={p} className="desc">
              {p}
            </p>
          ))}

          <ul className="lp-about-list">
            {ABOUT.highlights.map((h) => (
              <li key={h}>
                <span className="lp-about-check">
                  <Check size={13} />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <Link href={ABOUT.ctaHref} className="lp-case-btn" data-cursor="hover" data-cursor-label="Say hi">
            {ABOUT.ctaLabel} <ArrowRight size={15} />
          </Link>
        </div>

        {/* Side image */}
        <div className="lp-about-media" data-cursor="hover">
          <Image
            src={ABOUT.image.src}
            alt={ABOUT.image.alt}
            width={ABOUT.image.width}
            height={ABOUT.image.height}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="lp-about-img"
          />
        </div>
      </div>
    </section>
  );
}
