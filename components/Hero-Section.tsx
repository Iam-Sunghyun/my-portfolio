"use client";

import { useThemes } from "@/context/ThemeProvider";
import { motion } from "motion/react";
import ToProjectButton from "./ui/ToProjectButton";

export default function HeroSectionOne() {
  const { theme } = useThemes();

  return (
    <section className="relative mx-auto mt-28 flex max-w-7xl flex-col items-center justify-center ">
      <div className=" px-4 py-10 md:py-20">
        <h1 className="mt-28 relative z-10 mx-auto max-w-4xl text-center text-4xl font-bold text-gray-800 xs:text-5xl md:text-6xl lg:text-7xl">
          {"성장하는 미래를 그리는 프론트엔드 개발자 입니다.".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className={`mr-3 mt-4 inline-block ${theme ? "" : "text-gray-300"}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        {/* <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl text-center text-lg font-normal text-neutral-600 dark:text-neutral-400 h-20"
        >
         
          With AI, you can launch your website in hours, not days. Try our best in class, state of
          the art, cutting edge AI tools to get your website up. 
        </motion.div> */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <ToProjectButton className="w-60 transform rounded-lg border border-gray-300  px-6 py-2 font-medium text-black transition-all duration-300 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900" />
        </motion.div>
      </div>
    </section>
  );
}
