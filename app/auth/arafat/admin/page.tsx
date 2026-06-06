import Link from "next/link";
import { FolderOpen, Briefcase, Layers, Lightbulb, User, DatabaseZap } from "lucide-react";
import { getCollectionCounts } from "@/lib/seed";
import { DashboardSeedBtn } from "@/components/admin/dashboard-seed-btn";

const SECTIONS = [
  { href: "/auth/arafat/admin/hero", label: "Hero", icon: User, key: "hero" as const },
  { href: "/auth/arafat/admin/projects", label: "Projects", icon: FolderOpen, key: "projects" as const },
  { href: "/auth/arafat/admin/experience", label: "Experience", icon: Briefcase, key: "experience" as const },
  { href: "/auth/arafat/admin/stack", label: "Tech Stack", icon: Layers, key: "stack" as const },
  { href: "/auth/arafat/admin/wid", label: "What I Do", icon: Lightbulb, key: "wid" as const },
];

export default async function AdminDashboard() {
  let counts = { hero: 0, projects: 0, experience: 0, stack: 0, wid: 0 };
  let dbConnected = true;
  try {
    counts = await getCollectionCounts();
  } catch {
    dbConnected = false;
  }

  const allEmpty =
    counts.projects === 0 &&
    counts.experience === 0 &&
    counts.stack === 0 &&
    counts.wid === 0;

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <h2 className="admin-page-title">Dashboard</h2>
        <p className="admin-page-sub">Overview of your portfolio content</p>
      </div>

      {!dbConnected && (
        <div className="admin-notice admin-notice-error" style={{ marginBottom: "1.5rem" }}>
          <span>⚠ Database not connected. Check your MONGODB_URI in .env.local.</span>
        </div>
      )}

      {dbConnected && allEmpty && (
        <div className="admin-seed-banner">
          <DatabaseZap size={20} />
          <div>
            <strong>Your database is empty.</strong>
            <p>Seed it with the default portfolio data to get started instantly.</p>
          </div>
          <DashboardSeedBtn />
        </div>
      )}

      <div className="admin-stats-grid">
        {SECTIONS.map(({ href, label, icon: Icon, key }) => (
          <Link key={href} href={href} className="admin-stat-card">
            <div className="admin-stat-icon">
              <Icon size={22} />
            </div>
            <div className="admin-stat-body">
              <span className="admin-stat-count">
                {key === "hero" ? (counts.hero > 0 ? "✓" : "—") : counts[key]}
              </span>
              <span className="admin-stat-label">{label}</span>
            </div>
          </Link>
        ))}
      </div>

      {dbConnected && !allEmpty && (
        <div className="admin-reseed-row">
          <span className="admin-reseed-label">Reset all content back to defaults:</span>
          <DashboardSeedBtn force />
        </div>
      )}
    </div>
  );
}
