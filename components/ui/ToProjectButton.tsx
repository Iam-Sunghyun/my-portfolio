"use client";

import { useThemes } from "@/context/ThemeProvider";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

const ToProjectButton = ({
  title,
  // handleClick,
  otherClasses,
}: {
  title: string;
  // handleClick?: () => void;
  otherClasses?: string;
}) => {
  const { theme } = useThemes();

  return (
    // 버튼
    <Link
      href="/#Projects"
      className="relative inline-flex h-16 w-44 overflow-hidden rounded-xl p-[1px] mt-36 items-center justify-center shadow-md"
    >
      {/* 버튼 테두리를 채울 gradient spin animation */}
      <span
        className={`absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#90dafa_0%,#ffffff_50%,#93c4ff_100%)] `}
      />
      {/* gradient 위에 덮어질 하얀 배경 및 텍스트 */}
      <span
        className={`inline-flex h-[98%] w-[99%]  items-center justify-center rounded-xl text-xl font-medium ${
          theme ? "text-stone-600 bg-white" : "text-white bg-black-400"
        } backdrop-blur-3xl tracking-wide ${otherClasses} gap-3`}
      >
        {title}
        <MdKeyboardArrowDown />
      </span>
    </Link>
  );
};

export default ToProjectButton;
