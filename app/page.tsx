"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import NavigationBar from "@/components/NavigationBar";
import Projects from "@/components/Projects";
import Skils from "@/components/Skils";
import HorizentalLine from "@/components/ui/HorizentalLine";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { useScroll } from "@/context/ScrollProvider";
import { useThemes } from "@/context/ThemeProvider";
import { useEffect } from "react";

export default function Home() {
  const { theme } = useThemes();
  const { scroll, setScroll } = useScroll();
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
      <NavigationBar />
      <main
        className={`flex flex-col mx-12 md:px-20 lg:px-48 xl:px-[22rem] overflow-hidden text-2xl sm:text-3xl gap-72`}
      >
        <Landing />

        <div id="Info" className="flex flex-col md:flex-row gap-14 ">
          <div className="flex-1">
            <HorizentalLine text="Info" />
            <p className="text-xl">
              1994.11.19
              <br />
              컴퓨터공학과 졸
            </p>
          </div>
          <Skils />
        </div>

        <div>
          <HorizentalLine text="웹 프론트엔드 선택 이유?" />
          <p className="text-xl">
            인터랙티브 디벨로퍼를 보고 사용자와 상호작용 하는 웹 사이트에 매력을 느껴 프론트엔드
            가기로 마음먹음.
            <br />
            졸업 후 진로를 선택하여 다소 늦은 감이 있지만
            <br />
            Git hub에 TIL 기록하며 공부
            <br />
            변화무쌍한 프론트에서 기술에 치중되지 않는 것의 중요성 인식.
            <br />
            협업 중요성?
          </p>
        </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
      {scroll ? <ScrollToTopButton /> : null}
    </div>
  );
}
