import { Calendar, Rocket, Zap } from "lucide-react";
import { GithubIcon } from "@/components/shared/brand-icons";
import { STATS } from "@/lib/landing-data";

const ICONS = {
  calendar: Calendar,
  rocket: Rocket,
  github: GithubIcon,
  zap: Zap,
} as const;

export function Stats() {
  return (
    <section className="lp-section" id="about">
      <div className="lp-stats">
        {STATS.map((stat, i) => {
          const Icon = ICONS[stat.icon as keyof typeof ICONS];
          return (
            <div key={i} className="glass glow lp-stat reveal" data-cursor="hover">
              <span className="lp-stat-ico">
                <Icon size={22} />
              </span>
              <div className="lp-stat-value">{stat.value}</div>
              <div className="lp-stat-label">{stat.label}</div>
              <div className="lp-stat-sub">{stat.sub}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
