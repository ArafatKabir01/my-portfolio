// Animated aurora background — fixed, full-viewport, pure CSS.
// Server component (no interactivity).
export function AuroraBackground() {
  return (
    <div className="lp-aurora" aria-hidden="true">
      <span className="lp-aurora-layer lp-aurora-1" />
      <span className="lp-aurora-layer lp-aurora-2" />
      <span className="lp-aurora-layer lp-aurora-3" />
    </div>
  );
}
