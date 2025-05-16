// 다크모드 Context provider
"use client";
import { useContext, useState, createContext, useEffect } from "react";

const ThemeContext = createContext<{
  theme: boolean | null;
  setTheme: React.Dispatch<React.SetStateAction<boolean | null>>;
}>({
  theme: true,
  setTheme: () => {},
});

function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<boolean | null>(null); // 초기에는 null

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      setTheme(storedTheme === "true");
    } else {
      setTheme(true); // 기본값
    }
  }, []);

  if (theme === null) {
    return null; // hydration 오류 방지를 위해 초기 렌더링을 생략
  }

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
