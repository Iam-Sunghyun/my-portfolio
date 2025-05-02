"use client";

import { useThemes } from "@/context/ThemeProvider";

function ThemeToggleButton() {
  const { theme, setTheme } = useThemes();

  return (
    <button
      className="border rounded-3xl hover:scale-110 hover:bg-stone-100 hover:border-gray-800 transition-all"
      onClick={() => setTheme((val: boolean) => !val)}
    >
      {theme ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggleButton;
