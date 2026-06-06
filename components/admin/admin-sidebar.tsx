"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  FolderOpen,
  Briefcase,
  Layers,
  Lightbulb,
} from "lucide-react";

const NAV = [
  { href: "/auth/arafat/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/auth/arafat/admin/hero", label: "Hero", icon: User },
  { href: "/auth/arafat/admin/projects", label: "Projects", icon: FolderOpen },
  { href: "/auth/arafat/admin/experience", label: "Experience", icon: Briefcase },
  { href: "/auth/arafat/admin/stack", label: "Tech Stack", icon: Layers },
  { href: "/auth/arafat/admin/wid", label: "What I Do", icon: Lightbulb },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-logo">
        <span className="admin-sidebar-dot" />
        <span>Portfolio Admin</span>
      </div>
      <nav className="admin-nav">
        {NAV.map(({ href, label, icon: Icon, exact }) => {
          const active = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`admin-nav-item${active ? " active" : ""}`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="admin-sidebar-footer">
        <Link href="/" className="admin-nav-item" target="_blank" rel="noopener">
          <span className="admin-view-site">↗ View Site</span>
        </Link>
      </div>
    </aside>
  );
}
