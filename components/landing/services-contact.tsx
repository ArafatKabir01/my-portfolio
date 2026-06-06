import { ArrowRight, Layout, Palette, Gauge, Sparkles, Mail, MapPin } from "lucide-react";
import { SERVICES, PROFILE } from "@/lib/landing-data";

const ICONS = {
  layout: Layout,
  palette: Palette,
  gauge: Gauge,
  sparkles: Sparkles,
} as const;

export function ServicesContact() {
  return (
    <section className="lp-section" id="services">
      <div className="lp-bottom">
        {/* Services */}
        <div className="glass glow lp-panel reveal">
          <div className="lp-panel-head">
            <span className="lp-eyebrow">
              <span className="dot" /> Services I Offer
            </span>
            <a href="#" className="lp-viewall" data-cursor="hover">
              View All <ArrowRight size={13} />
            </a>
          </div>
          <div className="lp-services-grid">
            {SERVICES.map((sv) => {
              const Icon = ICONS[sv.icon as keyof typeof ICONS];
              return (
                <div
                  key={sv.title}
                  className="lp-service"
                  style={{ ["--c" as string]: sv.color }}
                  data-cursor="hover"
                >
                  <span className="lp-service-ico">
                    <Icon size={20} />
                  </span>
                  <h5>{sv.title}</h5>
                  <p>{sv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="glass glow lp-contact reveal" id="contact">
          <h3>
            Let&apos;s Build Something
            <br />
            Amazing Together
          </h3>
          <p>Ready to bring your ideas to life? Let&apos;s discuss your next project.</p>
          <div className="lp-contact-meta">
            <span>
              <Mail size={16} /> {PROFILE.email}
            </span>
            <span>
              <MapPin size={16} /> {PROFILE.location}
            </span>
          </div>
          <a href={PROFILE.socials.email} className="lp-btn lp-btn-primary" data-cursor="hover" data-cursor-label="Email">
            Get In Touch <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
