"use client";

import { useThemes } from "@/context/ThemeProvider";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { HiOutlineWrench } from "react-icons/hi2";
import { MdOutlinePersonOutline } from "react-icons/md";
import ThemeToggleButton from "./ThemeToggleButton";

// 작은 화면용 네비게이션바
function NavigationBar() {
  const { theme } = useThemes();

  return (
    // fixed, top-0 left-0 right-0 mx-auto로 중앙 정렬
    <nav className="xs:hidden rounded-full backdrop-blur-md fixed top-4 left-0 right-0 mx-auto z-[999] w-[21rem] ">
      <div
        className={`flex justify-between py-3 px-8 text-xl items-center border border-stone-300 rounded-full shadow-md gap-6 ${
          theme || "bg-black-400 shadow-white"
        }`}
      >
        <div
          className={`flex gap-10 justify-center text-[1.1rem] tracking-wider pl-2 items-center ${
            theme ? "text-stone-600" : "text-white"
          }`}
        >
          <Link href="/#Home" className="sm:hidden hover:scale-110">
            <AiOutlineHome />
          </Link>
          <Link href="/#About" className="sm:hidden hover:scale-110">
            <MdOutlinePersonOutline />
          </Link>
          <Link href="/#Skills" className="sm:hidden hover:scale-110">
            <HiOutlineWrench />
          </Link>
          <Link href="/#Projects" className="sm:hidden hover:scale-110">
            <BiBook />
          </Link>
        </div>
        <ThemeToggleButton />
      </div>
    </nav>
  );
}

export default NavigationBar;
