"use client";

import Link from "next/link";

function ScrollToTopButton() {
  // function toTop() {
  //   document.body.scrollTop = 0; // 사파리용
  //   document.documentElement.scrollTop = 0; // 크롬, 파폭, IE, 오페라용 <html> 요소 참조 프로퍼티
  //   // window.scroll(0, 0);
  // }

  return (
    <Link
      className={`fixed z-99 top-[85%] sm: right-4 md:right-12 border-2 rounded-full py-3 px-5 bg-stone-50  hover:bg-white text-3xl text-stone-500 `}
      // onClick={toTop}
      href="/#Home"
    >
      ⭡
    </Link>
  );
}

export default ScrollToTopButton;
