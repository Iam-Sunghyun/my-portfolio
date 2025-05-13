"use client";

import { useScrolls } from "@/context/ScrollProvider";

function ScrollToTopButton() {
  const { scroll } = useScrolls();

  function toTop() {
    document.body.scrollTop = 0; // 사파리용
    document.documentElement.scrollTop = 0; // 크롬, 파폭, IE, 오페라용 <html> 요소 참조 프로퍼티
    // window.scroll(0, 0);
  }

  return (
    <button
      className={`${
        scroll ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-300 fixed z-99 top-[85%] right-4  md:right-12 border-2 rounded-full py-3 px-5 bg-stone-100 hover:bg-white text-3xl text-stone-500 `}
      onClick={toTop}
      // href="/#Home"
    >
      ⭡
    </button>
  );
}

export default ScrollToTopButton;
