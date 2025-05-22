import { motion, Variants } from "framer-motion";
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import { SiGithub } from "react-icons/si";
import HorizentalLine from "./ui/HorizentalLine";
import Link from "next/link";

const framerVariants: Variants = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

function About() {
  return (
    <section id="About" className="flex flex-col  gap-10 ">
      <HorizentalLine text="About" />

      <div className="grid sm:grid-cols-2 sm:grid-rows-2 max-md:gap-10 gap-8 mx-auto mb-20">
        <div className="flex gap-10 items-center  ">
          <IoPerson className="text-4xl" />
          <div className="flex flex-col mt-2 items-start gap-1">
            <h3 className="text-lg">이름</h3>
            <span className="text-gray-500 text-xl tracking-wider">전성현</span>
          </div>
        </div>
        <div className="flex gap-10 items-center sm:pl-12">
          <FaPhone className="text-4xl" />
          <div className="flex flex-col mt-2 items-start gap-1">
            <h3 className="text-lg">연락처</h3>
            <span className="text-gray-500 text-[1.1rem] text-start">010. 1234. 5678</span>
          </div>
        </div>
        <div className="flex gap-10 items-center ">
          <MdEmail className="text-4xl" />
          <div className="flex flex-col mt-2 items-start gap-1">
            <h3 className="text-lg">이메일</h3>
            <span className="text-gray-500 text-[1.1rem] text-start">
              sunghyun1148
              <br />
              @gmail.com
            </span>
          </div>
        </div>
        <div className="flex gap-10 items-center sm:pl-12 ">
          <SiGithub className="text-4xl" />
          <div className="flex flex-col mt-2 items-start gap-1">
            <h3 className="text-lg">GitHub</h3>
            <Link
              href="https://github.com/Iam-sunghyun"
              className="text-gray-500 text-[1.1rem] text-start hover:text-blue-500"
              target="_blank"
            >
              링크
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10  mt-28">
        <motion.h2
          variants={framerVariants}
          initial="initial"
          whileInView={"animate"}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          className="text-[2.5rem] font-bold mb-5 leading-[1.2]"
        >
          <p>Introduce</p>
        </motion.h2>
        <p className="text-xl text-start max-w-[50rem] mx-auto pl-6 leading-9">
          인터랙티브 디벨로퍼를 보고 사용자와 상호작용 하는 웹 사이트에 매력을 느껴 프론트엔드
          가기로 마음먹음.
          <br />
          졸업 후 진로를 웹 프론트엔드 개발자로 정함.
          <br />
          Git hub에 TIL 기록하며 공부
          <br />
          변화무쌍한 프론트에서 기술에 치중되지 않는 것의 중요성 인식.
          <br />
          협업 중요성?
        </p>
      </div>
    </section>
  );
}

export default About;
