"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/ui/NavBar";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { useThemes } from "@/context/ThemeProvider";

function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useThemes();

  return (
    <div
      className={`${
        theme ? "text-stone-700" : "bg-black-400 text-stone-300 border-white"
      } flex flex-col min-h-screen text-center`}
    >
      {/* <NavigationBar /> */}
      <NavBar />
      <main
        className={`mx-6  md:px-28 lg:px-40 xl:px-60 2xl:px-96 overflow-hidden text-lg sm:text-xl flex-grow`}
      >
        {children}
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Layout;
