"use client";

import { useThemes } from "@/context/ThemeProvider";
import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { HiOutlineWrench } from "react-icons/hi2";
import { MdOutlinePersonOutline } from "react-icons/md";
import ThemeToggleButton from "./ui/ThemeToggleButton";

function NavigationBar() {
  const { theme } = useThemes();

  return (
    // fixed 아니고 sticky로 설정한 이유는
    // 문서 레이아웃에 배치되도록 하여 mx-auto를 적용해주기 위함(fixed로 가운데 위치시키면 살짝 애매해짐)
    <nav className="rounded-full backdrop-blur-md sticky top-2 z-[999] mx-auto">
      <div
        className={`flex justify-between py-2 px-4 text-xl items-center border border-stone-300 rounded-3xl shadow-md gap-4 ${
          theme || "bg-black-400 shadow-white"
        }`}
      >
        <div
          className={`flex gap-7 justify-center text-[0.9rem] tracking-wider pl-2 items-center ${
            theme ? "text-stone-600" : "text-white"
          }`}
        >
          <Link href="/#Home" className="hidden sm:block hover:scale-105">
            Home
          </Link>
          <Link href="/#Home" className="sm:hidden hover:scale-105">
            <AiOutlineHome />
          </Link>
          <Link href="/#Info" className="hidden sm:block hover:scale-105">
            Info
          </Link>
          <Link href="/#Info" className="sm:hidden hover:scale-105">
            <HiOutlineWrench />
          </Link>
          <Link href="/#Projects" className="hidden sm:block hover:scale-105">
            Projects
          </Link>
          <Link href="/#Projects" className="sm:hidden hover:scale-105">
            <BiBook />
          </Link>
          <Link href="/#Contact" className="hidden sm:block hover:scale-105">
            Contact
          </Link>
          <Link href="/#Contact" className="sm:hidden hover:scale-105">
            <MdOutlinePersonOutline />
          </Link>
        </div>
        <ThemeToggleButton />
      </div>
    </nav>
  );
}

export default NavigationBar;
