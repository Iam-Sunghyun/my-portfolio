// 다크모드 Context provider
"use client";
import { useContext, useState, createContext } from "react";

const ThemeContext = createContext<{
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  theme: true,
  setTheme: () => {},
});

function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState(true);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

function useThemes() {
  const Context = useContext(ThemeContext);

  if (Context === undefined) {
    throw new Error("컨텍스트를 참조할 수 없습니다.");
  }
  return Context;
}

export { ThemeProvider, useThemes };
