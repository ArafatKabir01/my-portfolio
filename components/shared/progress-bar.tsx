"use client";

import { useScrollProgress } from "@/hooks";

export function ScrollProgress() {
  useScrollProgress();
  return (
    <div className="progress">
      <span />
    </div>
  );
}
