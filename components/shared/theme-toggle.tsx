"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      className="lp-icon-btn"
      onClick={toggle}
      data-cursor="hover"
      data-cursor-label={theme === "dark" ? "Light" : "Dark"}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
