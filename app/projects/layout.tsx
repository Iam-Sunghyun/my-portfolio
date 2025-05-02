"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { useScrolls } from "@/context/ScrollProvider";
import { useThemes } from "@/context/ThemeProvider";

function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useThemes();
  const { scroll } = useScrolls();

  return (
    <div
      className={`${
        theme ? "text-stone-700" : "bg-black-400 text-stone-300 border-white"
      } flex flex-col min-h-screen text-center`}
    >
      {/* <NavigationBar /> */}
      <NavBar />
      <main
        className={`flex flex-col pt-16 mb-10 mx-6 md:px-28 lg:px-40 xl:px-60 2xl:px-96 overflow-hidden text-lg sm:text-xl gap-10 flex-grow`}
      >
        {children}
      </main>
      {scroll ? <ScrollToTopButton /> : null}
      <Footer />
    </div>
  );
}

export default Layout;
