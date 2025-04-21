"use client";

import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { useThemes } from "@/context/ThemeProvider";
import { useScroll } from "@/context/ScrollProvider";

function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useThemes();
  const { scroll } = useScroll();
  return (
    <div
      className={`${
        theme ? "text-stone-700" : "bg-black-400 text-stone-300 border-white"
      } flex flex-col min-h-screen text-center`}
    >
      <NavigationBar />
      <main
        className={`flex flex-col mt-16 mb-10 mx-6 md:px-28 lg:px-40 xl:px-60 2xl:px-96 overflow-hidden text-lg sm:text-xl gap-10 flex-grow`}
      >
        {children}
      </main>
      {scroll ? <ScrollToTopButton /> : null}
      <Footer />
    </div>
  );
}

export default Layout;
