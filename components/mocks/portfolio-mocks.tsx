export function DashboardMock() {
  return (
    <div className="mock" style={{ height: "100%" }}>
      <div className="mock-window" style={{ ["--mc" as string]: "#161330" } as React.CSSProperties}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="mock-bar"><span /><span /><span /></div>
          <div style={{ background: "#251f4a", borderRadius: 4, padding: "2px 8px", fontSize: 8, color: "#a78bfa" }}>FastShorts</div>
          <div style={{ fontSize: 7, color: "rgba(255,255,255,0.4)" }}>Insights · Stories</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 80px", gap: 6, flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ height: 8, borderRadius: 2, background: i === 1 ? "rgba(167,139,250,0.4)" : "rgba(255,255,255,0.06)" }} />
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
              {(["#a78bfa", "#60a5fa", "#22c55e"] as const).map((c, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 4, padding: 4 }}>
                  <div style={{ height: 3, width: "40%", background: "rgba(255,255,255,0.2)", borderRadius: 1, marginBottom: 3 }} />
                  <div style={{ fontSize: 10, color: c, fontWeight: 700 }}>{["2.4k", "85%", "+12%"][i]}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 4, padding: 6, flex: 1, position: "relative", overflow: "hidden" }}>
              <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
                <defs>
                  <linearGradient id="pg1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#a78bfa" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,22 C10,18 20,24 30,15 C40,8 50,20 60,12 C70,6 80,14 100,4 L100,30 L0,30 Z" fill="url(#pg1)" />
                <path d="M0,22 C10,18 20,24 30,15 C40,8 50,20 60,12 C70,6 80,14 100,4" stroke="#a78bfa" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 4, padding: 4, fontSize: 7, color: "#22c55e" }}>● 365 live</div>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 4, height: 14 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TasksMock() {
  return (
    <div className="mock" style={{ height: "100%" }}>
      <div className="mock-window" style={{ ["--mc" as string]: "#fafafa", color: "#222" } as React.CSSProperties}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "-0.02em", color: "#111" }}>
            Arafat<span style={{ color: "#7c5cff" }}>.</span>
          </div>
          <div style={{ display: "flex", gap: 6, fontSize: 7, color: "#666" }}>
            {["Home", "About", "Skills", "Contact"].map((x) => (<span key={x}>{x}</span>))}
          </div>
          <div style={{ background: "#1c1c1c", color: "white", borderRadius: 3, padding: "2px 6px", fontSize: 7 }}>Resume</div>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 4 }}>
          <div style={{ fontFamily: "var(--font-sora)", fontSize: 13, fontWeight: 700, color: "#0a0a0a", lineHeight: 1.1, textAlign: "center" }}>
            Manage your tasks<br />like a Pro
          </div>
          <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
            <div style={{ background: "#7c5cff", color: "white", fontSize: 6, padding: "2px 6px", borderRadius: 3 }}>Get Started</div>
            <div style={{ background: "transparent", border: "1px solid #ddd", color: "#222", fontSize: 6, padding: "2px 6px", borderRadius: 3 }}>Learn</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AIMock() {
  return (
    <div className="mock" style={{ height: "100%" }}>
      <div className="mock-window" style={{ ["--mc" as string]: "#0e0a26" } as React.CSSProperties}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 8, fontWeight: 700, color: "white" }}>
            Arafat<span style={{ color: "#a78bfa" }}>.</span>
          </div>
          <div style={{ fontSize: 7, color: "#a78bfa" }}>Chatbot</div>
        </div>
        <div style={{ flex: 1, padding: "4px 0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "var(--font-sora)", fontSize: 11, fontWeight: 700, color: "#a78bfa" }}>AI Assistant</div>
            <div style={{ fontFamily: "var(--font-sora)", fontSize: 11, fontWeight: 700, color: "white", marginBottom: 3 }}>For Your Work</div>
            <div style={{ fontSize: 6, color: "rgba(255,255,255,0.55)", lineHeight: 1.4, maxWidth: "70%" }}>
              Boost your team&apos;s productivity with our AI-powered assistant. Faster decisions, smarter workflows.
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}>
            <div style={{ background: "#7c5cff", color: "white", fontSize: 6, padding: "2px 6px", borderRadius: 3 }}>Get Started</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "flex-end" }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 6, padding: "2px 4px", minWidth: 30, height: 7 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const PORTFOLIO_MOCKS = {
  dashboard: DashboardMock,
  tasks: TasksMock,
  ai: AIMock,
} as const;
