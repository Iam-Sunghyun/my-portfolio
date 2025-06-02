"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSectionOne from "@/components/Hero-Section";
import Projects from "@/components/Projects";
import Skils from "@/components/Skills";
import NavBar from "@/components/ui/NavBar";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { useThemes } from "@/context/ThemeProvider";

export default function Home() {
  const { theme } = useThemes();

  return (
    // 다크모드를 위한 전체 랩핑 div
    <div
      className={`${
        theme ? "text-stone-700" : "bg-black-400 text-stone-300 border-white"
      }  flex flex-col text-center`}
    >
      <NavBar />
      <main
        className={`flex flex-col mx-12 md:px-20 lg:px-36 xl:px-[20rem]  overflow-hidden text-2xl sm:text-3xl gap-48 flex-grow`}
      >
        {/* <Landing /> */}
        <HeroSectionOne />
        <About />
        <Skils />
        <Projects />
        {/* <Archive /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
