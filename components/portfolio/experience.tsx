import type { ExperienceData } from "@/lib/models/experience.model";

type Props = { experience: ExperienceData[] };

export function Experience({ experience }: Props) {
  return (
    <section id="experience" className="section">
      <div className="exp-wrap">
        <div className="section-head" style={{ display: "block" }}>
          <h3>Experience</h3>
        </div>
        <div className="timeline reveal">
          {experience.map((item) => (
            <div className="exp-item" key={item._id ?? item.title}>
              <span
                className="node"
                style={{
                  background: item.nodeColor || undefined,
                  boxShadow: item.nodeShadow || undefined,
                }}
              />
              <div className="when" style={{ color: item.whenColor || undefined }}>{item.when}</div>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
              <div className="tag-row">
                {item.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
