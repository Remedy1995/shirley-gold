"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "shirleys-theme";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const preferred =
      saved ??
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

    applyTheme(preferred);
    setTheme(preferred);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle-button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <span className="theme-toggle-orb" aria-hidden="true">
        {theme === "dark" ? "◐" : "◑"}
      </span>
      <span>{theme === "dark" ? "Light theme" : "Dark theme"}</span>
    </button>
  );
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}
