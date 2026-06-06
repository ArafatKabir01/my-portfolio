"use client";

import { useState, useTransition } from "react";
import { DatabaseZap, Loader2, CheckCircle2, RefreshCw } from "lucide-react";

type Props = { force?: boolean };

export function DashboardSeedBtn({ force = false }: Props) {
  const [isPending, startTransition] = useTransition();
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function handleSeed() {
    if (force && !confirm("This will reset ALL portfolio data to the defaults. Continue?")) return;
    setError("");
    setDone(false);
    startTransition(async () => {
      const res = await fetch("/api/admin/seed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ force }),
      });
      if (res.ok) {
        setDone(true);
        setTimeout(() => window.location.reload(), 900);
      } else {
        setError("Seed failed. Check your database connection.");
      }
    });
  }

  if (done) {
    return (
      <span className="admin-seed-done">
        <CheckCircle2 size={16} /> {force ? "Reset!" : "Seeded!"}
      </span>
    );
  }

  return (
    <div>
      <button
        onClick={handleSeed}
        disabled={isPending}
        className={`admin-btn ${force ? "admin-btn-ghost" : "admin-btn-primary"}`}
      >
        {isPending
          ? <Loader2 size={16} className="spin" />
          : force
            ? <RefreshCw size={16} />
            : <DatabaseZap size={16} />
        }
        {isPending ? "Seeding…" : force ? "Reset to Defaults" : "Seed Data"}
      </button>
      {error && <p className="admin-login-error" style={{ marginTop: "0.5rem" }}>{error}</p>}
    </div>
  );
}
