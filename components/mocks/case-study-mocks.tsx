export function HeroDashboardMock() {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 36 }}>
      <div style={{
        width: "100%", maxWidth: 1000, aspectRatio: "16/9",
        background: "#0a0a14", borderRadius: 14, border: "1px solid #1c1c28",
        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.7), 0 0 60px -10px rgba(16, 185, 129, 0.25)",
        overflow: "hidden", display: "flex", flexDirection: "column",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 18px", background: "#0e0e18", borderBottom: "1px solid #1c1c28" }}>
          <div style={{ display: "flex", gap: 6 }}>
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
          </div>
          <div style={{ background: "#15151d", border: "1px solid #20202c", borderRadius: 6, padding: "4px 12px", fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#8b8ba0", flex: 1, maxWidth: 280 }}>
            fastshorts.app/dashboard
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#2a2a38" }} />
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", flex: 1 }}>
          <div style={{ borderRight: "1px solid #1c1c28", padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: "linear-gradient(140deg, #34d399, #10b981)" }} />
              <span style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 13, fontWeight: 700, color: "white" }}>FastShorts</span>
            </div>
            {([["Overview", true], ["Analytics", false], ["Channels", false], ["Audience", false], ["Campaigns", false], ["Reports", false], ["Settings", false]] as const).map(([n, on], i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "8px 10px", borderRadius: 8,
                background: on ? "rgba(16, 185, 129, 0.12)" : "transparent",
                border: on ? "1px solid rgba(16, 185, 129, 0.25)" : "1px solid transparent",
                color: on ? "#34d399" : "#6b6b80",
                fontSize: 11, fontWeight: 500,
              }}>
                <span style={{ width: 12, height: 12, borderRadius: 3, background: "currentColor", opacity: 0.4 }} />
                {n}
              </div>
            ))}
          </div>
          <div style={{ padding: "18px 24px", display: "flex", flexDirection: "column", gap: 14, overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 18, fontWeight: 700, color: "white" }}>Performance Overview</div>
                <div style={{ fontSize: 11, color: "#6b6b80" }}>Last 30 days · auto-refresh</div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {["1D", "7D", "30D", "90D"].map((t) => (
                  <div key={t} style={{ padding: "4px 10px", borderRadius: 6, fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", background: t === "30D" ? "rgba(16, 185, 129, 0.18)" : "#15151d", color: t === "30D" ? "#34d399" : "#8b8ba0", border: "1px solid " + (t === "30D" ? "rgba(16, 185, 129, 0.35)" : "#20202c") }}>{t}</div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
              {([
                ["Total Views", "2.84M", "#34d399", "+24%"],
                ["Engagement", "68.4%", "#60a5fa", "+8.2%"],
                ["Avg Watch", "47s", "#a78bfa", "+12%"],
                ["Revenue", "$48.2K", "#fbbf24", "+18%"],
              ] as const).map(([k, v, c, d], i) => (
                <div key={i} style={{ background: "#15151d", border: "1px solid #20202c", borderRadius: 8, padding: 12, position: "relative" }}>
                  <div style={{ fontSize: 10, color: "#8b8ba0" }}>{k}</div>
                  <div style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 18, fontWeight: 700, color: "white", marginTop: 4 }}>{v}</div>
                  <div style={{ fontSize: 9, color: c, fontFamily: "var(--font-jetbrains), monospace", marginTop: 2 }}>{d}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 10, flex: 1, minHeight: 0 }}>
              <div style={{ background: "#15151d", border: "1px solid #20202c", borderRadius: 8, padding: 14, position: "relative", overflow: "hidden" }}>
                <div style={{ fontSize: 11, color: "#8b8ba0", marginBottom: 4 }}>Views over time</div>
                <svg viewBox="0 0 300 90" preserveAspectRatio="none" style={{ width: "100%", height: "calc(100% - 16px)" }}>
                  <defs>
                    <linearGradient id="gd" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#34d399" stopOpacity="0.5" />
                      <stop offset="1" stopColor="#34d399" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gd2" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#60a5fa" stopOpacity="0.3" />
                      <stop offset="1" stopColor="#60a5fa" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,70 C20,60 40,72 60,55 C80,40 100,60 120,40 C140,28 160,50 180,32 C200,18 220,42 240,22 C260,10 280,30 300,12 L300,90 L0,90 Z" fill="url(#gd)" />
                  <path d="M0,70 C20,60 40,72 60,55 C80,40 100,60 120,40 C140,28 160,50 180,32 C200,18 220,42 240,22 C260,10 280,30 300,12" stroke="#34d399" strokeWidth="1.5" fill="none" />
                  <path d="M0,82 C20,76 40,80 60,72 C80,66 100,72 120,64 C140,58 160,68 180,58 C200,52 220,62 240,52 C260,48 280,56 300,46 L300,90 L0,90 Z" fill="url(#gd2)" />
                  <path d="M0,82 C20,76 40,80 60,72 C80,66 100,72 120,64 C140,58 160,68 180,58 C200,52 220,62 240,52 C260,48 280,56 300,46" stroke="#60a5fa" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <div style={{ background: "#15151d", border: "1px solid #20202c", borderRadius: 8, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontSize: 11, color: "#8b8ba0", marginBottom: 4 }}>Top channels</div>
                {([["Tech Daily", "420K", "#34d399"], ["Creator Hub", "312K", "#60a5fa"], ["DevTalk", "189K", "#a78bfa"], ["NewsByte", "124K", "#fbbf24"]] as const).map(([n, v, c], i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10 }}>
                    <span style={{ width: 16, height: 16, borderRadius: 4, background: c, opacity: 0.85 }} />
                    <span style={{ color: "white", flex: 1 }}>{n}</span>
                    <span style={{ color: "#8b8ba0", fontFamily: "var(--font-jetbrains), monospace" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LightDashMock() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#fafafa", padding: 18, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 18, height: 18, borderRadius: 5, background: "linear-gradient(140deg, #34d399, #10b981)" }} />
          <span style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 700, fontSize: 12, color: "#111" }}>FastShorts</span>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#e5e7eb" }} />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
        {([["Earnings", "$12.4k", "#10b981"], ["Views", "82.1k", "#3b82f6"], ["Reach", "+18%", "#f59e0b"]] as const).map(([k, v, c], i) => (
          <div key={i} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 6, padding: 6 }}>
            <div style={{ fontSize: 8, color: "#9ca3af" }}>{k}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#111", fontFamily: "var(--font-sora), sans-serif" }}>{v}</div>
            <div style={{ height: 2, background: c, borderRadius: 1, width: "60%", marginTop: 3, opacity: 0.6 }} />
          </div>
        ))}
      </div>
      <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 6, padding: 8, flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 9, color: "#6b7280", marginBottom: 6 }}>Channel growth</div>
        <svg viewBox="0 0 200 60" preserveAspectRatio="none" style={{ flex: 1 }}>
          <defs>
            <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="1" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,40 C20,32 40,45 60,30 C80,20 100,35 120,22 C140,12 160,28 200,8 L200,60 L0,60 Z" fill="url(#lg)" />
          <path d="M0,40 C20,32 40,45 60,30 C80,20 100,35 120,22 C140,12 160,28 200,8" stroke="#10b981" strokeWidth="1.2" fill="none" />
        </svg>
      </div>
    </div>
  );
}

export function WireframeMock() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#0c1e1a", padding: 14, display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 6 }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ width: 30, height: 6, background: "rgba(52, 211, 153, 0.4)", borderRadius: 2 }} />
          ))}
        </div>
        <div style={{ width: 14, height: 14, borderRadius: "50%", background: "rgba(52, 211, 153, 0.3)" }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 8, flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{ height: 14, background: "rgba(52, 211, 153, 0.2)", borderRadius: 3 }} />
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ height: 30, background: "rgba(52, 211, 153, 0.15)", borderRadius: 4, border: "1px dashed rgba(52, 211, 153, 0.3)" }} />
            ))}
          </div>
          <div style={{ flex: 1, background: "rgba(52, 211, 153, 0.1)", borderRadius: 4, border: "1px dashed rgba(52, 211, 153, 0.3)" }} />
        </div>
      </div>
    </div>
  );
}

export function FormMock() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#fafafa", padding: 18, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 13, fontWeight: 700, color: "#111" }}>Create campaign</div>
      <div style={{ fontSize: 9, color: "#9ca3af", marginBottom: 4 }}>Step 2 of 4</div>
      {["Campaign name", "Target audience", "Budget"].map((l, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <div style={{ fontSize: 8, color: "#6b7280" }}>{l}</div>
          <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 4, height: 16 }} />
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 6, marginTop: "auto" }}>
        <div style={{ background: "#f3f4f6", color: "#6b7280", padding: "4px 10px", borderRadius: 4, fontSize: 9 }}>Back</div>
        <div style={{ background: "#10b981", color: "white", padding: "4px 10px", borderRadius: 4, fontSize: 9 }}>Continue</div>
      </div>
    </div>
  );
}

export function ChatMock() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #0e1916, #0a0a14)", padding: 14, display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, paddingBottom: 6, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#34d399" }} />
        <div>
          <div style={{ fontSize: 10, color: "white", fontWeight: 600 }}>Support</div>
          <div style={{ fontSize: 8, color: "#34d399" }}>● Online</div>
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6, fontSize: 9, color: "white" }}>
        <div style={{ background: "rgba(255,255,255,0.06)", padding: "6px 8px", borderRadius: "4px 8px 8px 8px", maxWidth: "70%", alignSelf: "flex-start" }}>Hi! How can I help today?</div>
        <div style={{ background: "#10b981", padding: "6px 8px", borderRadius: "8px 4px 8px 8px", maxWidth: "70%", alignSelf: "flex-end" }}>I need to update my plan</div>
        <div style={{ background: "rgba(255,255,255,0.06)", padding: "6px 8px", borderRadius: "4px 8px 8px 8px", maxWidth: "80%", alignSelf: "flex-start" }}>Sure! Let me pull up your account…</div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "6px 8px", fontSize: 9, color: "#6b7280" }}>Type a message…</div>
    </div>
  );
}

export function TableMock() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#fafafa", padding: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <div style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 11, fontWeight: 700, color: "#111" }}>Recent campaigns</div>
        <div style={{ background: "#10b981", color: "white", padding: "3px 8px", borderRadius: 4, fontSize: 9 }}>+ New</div>
      </div>
      <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 4 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 0.7fr", gap: 8, padding: "6px 10px", borderBottom: "1px solid #e5e7eb", fontSize: 8, color: "#9ca3af" }}>
          <span>Name</span><span>Status</span><span>Spend</span><span>ROI</span>
        </div>
        {([
          ["Summer Launch", "Live", "$2.4k", "3.2x", "#10b981"],
          ["Q4 Brand", "Live", "$5.1k", "2.8x", "#10b981"],
          ["Retargeting", "Paused", "$840", "1.4x", "#f59e0b"],
          ["Cold Outreach", "Draft", "—", "—", "#9ca3af"],
          ["Holiday Promo", "Live", "$3.6k", "4.1x", "#10b981"],
        ] as const).map(([n, s, sp, r, c], i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 0.7fr", gap: 8, padding: "6px 10px", borderBottom: i < 4 ? "1px solid #f3f4f6" : "none", fontSize: 9, color: "#111", alignItems: "center" }}>
            <span>{n}</span>
            <span style={{ color: c, fontFamily: "var(--font-jetbrains), monospace", fontSize: 8 }}>● {s}</span>
            <span style={{ color: "#6b7280" }}>{sp}</span>
            <span style={{ fontWeight: 600 }}>{r}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SettingsMock() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#fafafa", padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 11, fontWeight: 700, color: "#111" }}>Account preferences</div>
      {([
        ["Email notifications", true],
        ["Weekly summary", true],
        ["Marketing emails", false],
        ["Two-factor auth", true],
      ] as const).map(([l, on], i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 10px", background: "white", border: "1px solid #e5e7eb", borderRadius: 6, fontSize: 9, color: "#111" }}>
          <span>{l}</span>
          <div style={{ width: 22, height: 12, background: on ? "#10b981" : "#e5e7eb", borderRadius: 999, position: "relative" }}>
            <div style={{ position: "absolute", width: 8, height: 8, background: "white", borderRadius: "50%", top: 2, left: on ? 12 : 2, transition: "left .2s" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function LandingMock() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#fafafa", padding: 22, display: "flex", flexDirection: "column", gap: 6, justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 10px", borderRadius: 999, background: "rgba(16, 185, 129, 0.12)", border: "1px solid rgba(16, 185, 129, 0.3)", fontSize: 9, color: "#10b981", fontWeight: 600 }}>● Now in beta</div>
      <div style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 22, fontWeight: 800, color: "#111", lineHeight: 1.05, letterSpacing: "-0.025em" }}>Analytics that<br />actually help.</div>
      <div style={{ fontSize: 10, color: "#6b7280", maxWidth: 220 }}>Track every short, every channel, every dollar — in one calm dashboard.</div>
      <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
        <div style={{ background: "#10b981", color: "white", padding: "5px 12px", borderRadius: 6, fontSize: 9, fontWeight: 600 }}>Start free</div>
        <div style={{ background: "transparent", border: "1px solid #e5e7eb", color: "#111", padding: "5px 12px", borderRadius: 6, fontSize: 9 }}>Watch demo</div>
      </div>
    </div>
  );
}

export function PhoneScreen1() {
  return (
    <div className="phone-inner">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 8, fontWeight: 600, color: "#6b7280" }}>9:41</span>
        <span style={{ fontSize: 8, color: "#6b7280" }}>●●●</span>
      </div>
      <div style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 16, fontWeight: 700, color: "#111", marginTop: 8 }}>Good morning,<br />Sam.</div>
      <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: 10, marginTop: 8 }}>
        <div style={{ fontSize: 8, color: "#6b7280" }}>This week</div>
        <div style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 16, fontWeight: 700, color: "#111" }}>$3,840</div>
        <div style={{ fontSize: 8, color: "#10b981" }}>+18% from last week</div>
        <svg viewBox="0 0 100 30" style={{ width: "100%", height: 30, marginTop: 4 }}>
          <path d="M0,22 C15,18 30,24 50,15 C70,8 85,18 100,6" stroke="#10b981" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      {([["Tech Daily", "+420", "#10b981"], ["Creator Hub", "+312", "#3b82f6"], ["DevTalk", "+189", "#a78bfa"]] as const).map(([n, v, c], i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 10px", background: "white", border: "1px solid #e5e7eb", borderRadius: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 14, height: 14, borderRadius: 4, background: c }} />
            <span style={{ fontSize: 9, color: "#111" }}>{n}</span>
          </div>
          <span style={{ fontSize: 9, color: c, fontFamily: "var(--font-jetbrains), monospace" }}>{v}</span>
        </div>
      ))}
    </div>
  );
}

export function PhoneScreen2() {
  return (
    <div className="phone-inner" style={{ background: "#0a0a14", color: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 8, fontWeight: 600, color: "#9ca3af" }}>9:41</span>
        <span style={{ fontSize: 8, color: "#9ca3af" }}>●●●</span>
      </div>
      <div style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 14, fontWeight: 700, marginTop: 8 }}>Analytics</div>
      <div style={{ display: "flex", gap: 4 }}>
        {["Views", "Revenue", "Audience"].map((t, i) => (
          <div key={t} style={{ padding: "3px 8px", borderRadius: 999, background: i === 0 ? "rgba(52, 211, 153, 0.18)" : "transparent", color: i === 0 ? "#34d399" : "#6b7280", fontSize: 8, border: "1px solid " + (i === 0 ? "rgba(52, 211, 153, 0.3)" : "rgba(255,255,255,0.08)") }}>{t}</div>
        ))}
      </div>
      <div style={{ background: "#15151d", border: "1px solid #20202c", borderRadius: 10, padding: 10 }}>
        <div style={{ fontSize: 8, color: "#9ca3af" }}>Total views</div>
        <div style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 16, fontWeight: 700 }}>2.84M</div>
        <svg viewBox="0 0 100 40" style={{ width: "100%", height: 40, marginTop: 4 }}>
          <defs>
            <linearGradient id="pg" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#34d399" stopOpacity="0.4" />
              <stop offset="1" stopColor="#34d399" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,30 C15,24 30,32 50,18 C70,8 85,22 100,4 L100,40 L0,40 Z" fill="url(#pg)" />
          <path d="M0,30 C15,24 30,32 50,18 C70,8 85,22 100,4" stroke="#34d399" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        {([["Engagement", "68%"], ["Watch", "47s"]] as const).map(([k, v], i) => (
          <div key={i} style={{ background: "#15151d", border: "1px solid #20202c", borderRadius: 8, padding: 8 }}>
            <div style={{ fontSize: 7, color: "#9ca3af" }}>{k}</div>
            <div style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 13, fontWeight: 700 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PhoneScreen3() {
  return (
    <div className="phone-inner">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 8, fontWeight: 600, color: "#6b7280" }}>9:41</span>
        <span style={{ fontSize: 8, color: "#6b7280" }}>●●●</span>
      </div>
      <div style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: 14, fontWeight: 700, color: "#111", marginTop: 8 }}>Inbox</div>
      {([
        ["Tech Daily", "New comment on…", "2m", "#10b981", true],
        ["Creator Hub", "Engagement spike", "12m", "#3b82f6", true],
        ["DevTalk", "Weekly digest", "1h", "#a78bfa", false],
        ["System", "Plan renewed", "3h", "#9ca3af", false],
        ["Sam", "You: thanks!", "1d", "#f59e0b", false],
      ] as const).map(([n, p, t, c, un], i) => (
        <div key={i} style={{ display: "flex", gap: 8, padding: "7px 8px", background: "white", border: "1px solid #e5e7eb", borderRadius: 8 }}>
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: c, flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 9, fontWeight: 600, color: "#111" }}>{n}</span>
              <span style={{ fontSize: 8, color: "#9ca3af" }}>{t}</span>
            </div>
            <div style={{ fontSize: 8, color: "#6b7280" }}>{p}</div>
          </div>
          {un && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", alignSelf: "center" }} />}
        </div>
      ))}
    </div>
  );
}
