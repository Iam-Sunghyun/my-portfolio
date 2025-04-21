// 스크롤 위치 값 저장하는 컨텍스트
"use client";
import { createContext, useContext, useState } from "react";

const ScrollContext = createContext(null);

function ScrollProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scroll, setScroll] = useState(false);

  return <ScrollContext.Provider value={{ scroll, setScroll }}>{children}</ScrollContext.Provider>;
}

function useScroll(): {
  scroll?: boolean;
  setScroll?: Function;
} | null {
  const Context = useContext(ScrollContext);

  if (Context === undefined) {
    throw new Error("컨텍스트를 참조할 수 없습니다.");
  }
  return Context;
}

export { ScrollProvider, useScroll };
