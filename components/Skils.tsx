import { main, sub } from "@/data/badgeIcons";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";
import HorizentalLine from "./ui/HorizentalLine";
import Image from "next/image";

const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

function Skils() {
  return (
    <section id="Skils" className="flex-1">
      <HorizentalLine text="Skills" />
      <div className="text-[1rem] sm:text-[1.1rem] tracking-wider flex flex-col gap-4 items-center">
        {/* <h2 className="font-bold">Main</h2>
        <ItemList lists={["HTML5", "CSS3", "JavaScript", "React", "TailwindCSS"]} />
        <br />
        <h2 className="font-bold">Learning</h2>
        <ItemList
          lists={[
            "TypeScript",
            "Nextjs 14",
            "Redux (RTK)",
            "Redux-Thunk",
            "Styled-Component",
            "css-modules",
            "React-Router",
            "React-query",
            "React-hook-form",
          ]}
        /> */}

        {/* main */}
        <h1>Main</h1>
        <ul className="flex gap-14 flex-wrap justify-center mt-6">
          {main.map((icon, index) => (
            <motion.li
              key={icon.name}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              // viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                // type: "spring",
              }}
            >
              <div className="flex flex-col max-w-[50px] items-center gap-1 hover:scale-[103%] ">
                <div className="bg-[rgba(237,237,237,0.72)] rounded-full w-[6rem] aspect-square flex justify-center items-center">
                  <Image width={50} height={50} key={icon.name} src={icon.image} alt={icon.name} />
                </div>
                <p className="">{icon.name}</p>
              </div>
            </motion.li>
          ))}

          {/* sub */}
        </ul>
        <h1 className="mt-16">Sub</h1>
        <ul className="flex gap-x-10 gap-y-8 flex-wrap max-w-[40rem] justify-center  mt-6 ">
          {sub.map((icon, index) => (
            <motion.li
              key={icon.name}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              // viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                // type: "spring",
              }}
            >
              <div className="flex max-w-[80px] flex-col items-center gap-3 hover:scale-[103%] ">
                <div className="bg-[rgba(237,237,237,0.72)] rounded-full w-[6.5rem] aspect-square flex justify-center items-center">
                  <Image width={50} height={50} key={icon.name} src={icon.image} alt={icon.name} />
                </div>
                <p className="leading-6">{icon.name}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skils;
