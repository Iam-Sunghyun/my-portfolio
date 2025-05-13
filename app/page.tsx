"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSectionOne from "@/components/Hero-Section";
import Info from "@/components/Info";
import Projects from "@/components/Projects";
import Skils from "@/components/Skils";
import NavBar from "@/components/ui/NavBar";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { useScrolls } from "@/context/ScrollProvider";
import { useThemes } from "@/context/ThemeProvider";
import { useEffect } from "react";

export default function Home() {
  const { theme } = useThemes();
  const { setScroll } = useScrolls();

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
  }, [setScroll]); // 페이지 초기 렌더링 시에만 실행

  return (
    // 다크모드를 위한 전체 랩핑 div
    <div
      className={`${
        theme ? "text-stone-700" : "bg-black-400 text-stone-300 border-white"
      }  flex flex-col text-center`}
    >
      <NavBar />
      <main
        className={`flex flex-col mx-12 md:px-20 lg:px-48 xl:px-[18rem] overflow-hidden text-2xl sm:text-3xl gap-40 lg:gap-28 flex-grow`}
      >
        {/* <Landing /> */}
        <HeroSectionOne />
        <Info />
        <Skils />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
