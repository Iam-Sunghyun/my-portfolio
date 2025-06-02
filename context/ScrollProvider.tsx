// 스크롤 위치 값 저장하는 컨텍스트
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ScrollContext = createContext<{
  scroll: boolean;
  setScroll: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  scroll: false,
  setScroll: () => {},
});

function ScrollProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scroll, setScroll] = useState(false);

  // 페이지 맨 위에서 300픽셀 초과 스크롤되면 scroll = true
  useEffect(() => {
    function scrolled() {
      // 사파리 용 || 크롬, 파폭, IE, 오페라 용 <html> 요소 참조 프로퍼티
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
    window.onscroll = scrolled;
  }, [setScroll]);

  return <ScrollContext.Provider value={{ scroll, setScroll }}>{children}</ScrollContext.Provider>;
}

function useScrolls() {
  const Context = useContext(ScrollContext);

  if (Context === undefined) {
    throw new Error("컨텍스트를 참조할 수 없습니다.");
  }
  return Context;
}

export { ScrollProvider, useScrolls };
