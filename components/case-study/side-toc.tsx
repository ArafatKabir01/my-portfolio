"use client";

import { useActiveSection } from "@/hooks";

export function SideTOC({ items }: { items: readonly (readonly [string, string])[] }) {
  const ids = items.map((t) => t[0]);
  const active = useActiveSection(ids, ids[0]);
  return (
    <aside className="toc">
      {items.map(([id, lab]) => (
        <a key={id} href={`#${id}`} className={active === id ? "active" : ""} data-cursor="hover">
          <span className="label-text">{lab}</span>
        </a>
      ))}
    </aside>
  );
}
