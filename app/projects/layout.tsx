"use client";

import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { useThemes } from "@/context/ThemeProvider";

function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useThemes();
  return (
    <div
      className={`${
        theme ? "text-stone-700" : "bg-black-400 text-stone-300 border-white"
      }  flex flex-col text-center`}
    >
      <NavigationBar />
      <main
        className={`flex flex-col mt-16 mb-10 mx-6 md:px-28 lg:px-40 xl:px-60 2xl:px-96 overflow-hidden text-lg sm:text-xl gap-10 `}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
