"use client";

import { useThemes } from "@/context/ThemeProvider";
import { useEffect } from "react";

function ThemeToggleButton() {
  const { theme, setTheme } = useThemes();

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", "true");
    } else {
      localStorage.setItem("theme", "false");
    }
  }, [theme]);

  return (
    <button
      className="border rounded-3xl hover:scale-110 hover:bg-stone-100 hover:border-gray-800 transition-all"
      onClick={() => setTheme((val) => !val)}
    >
      {theme ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggleButton;
