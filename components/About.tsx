import { motion, Variants } from "framer-motion";
import { IoPerson } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";

import HorizentalLine from "./ui/HorizentalLine";

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

      <div className="grid sm:grid-cols-2 sm:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 max-md:gap-10 gap-6 mx-auto mb-20">
        <div className="flex gap-10 items-center lg:pl-0 xl:pl-12">
          <IoPerson className="text-4xl" />
          <div className="flex flex-col mt-2 items-start gap-1">
            <h3 className="text-lg">이름</h3>
            <span className="text-gray-500 text-xl tracking-wider">전성현</span>
          </div>
        </div>
        <div className="flex gap-10 items-center md:pl-12">
          <FaBirthdayCake className="text-4xl" />
          <div className="flex flex-col mt-2 items-start gap-1">
            <h3 className="text-lg">생년월일</h3>
            <span className="text-gray-500 text-[1.2rem]">1994. 11. 19</span>
          </div>
        </div>
        <div className="flex gap-10 items-center lg:pl-0 xl:pl-12 ">
          <FaPencilAlt className="text-4xl" />
          <div className="flex flex-col mt-2 items-start gap-1">
            <h3 className="text-lg">학력</h3>
            <span className="text-gray-500 text-[1.2rem] text-start">
              성결대학교 <br />
              컴퓨터공학과(졸업)
            </span>
          </div>
        </div>
        <div className="flex gap-10 items-center md:pl-12">
          <FaPhone className="text-4xl" />
          <div className="flex flex-col mt-2 items-start gap-1">
            <h3 className="text-lg">연락처</h3>
            <span className="text-gray-500 text-[1.1rem] text-start">010. 1234. 5678</span>
          </div>
        </div>
        <div className="flex gap-10 items-center lg:pl-0 xl:pl-12">
          <MdEmail className="text-4xl" />
          <div className="flex flex-col mt-2 items-start gap-1">
            <h3 className="text-lg">이메일</h3>
            <span className="text-gray-500 text-[1.1rem] ">
              sunghyun1148
              <br />
              @gmail.com
            </span>
          </div>
        </div>
        <div className="flex gap-10 items-center md:pl-12 ">
          <GiPositionMarker className="text-4xl" />
          <div className="flex flex-col mt-2 items-start gap-1">
            <h3 className="text-lg">위치</h3>
            <span className="text-gray-500 text-[1.1rem] text-start">경기도 안양시 동안구</span>
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
          웹 프론트엔드 선택 이유?
        </motion.h2>
        <p className="text-xl">
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
      {/* 
      <div className="flex flex-col gap-10  mt-28">
        <motion.h2
          variants={framerVariants}
          initial="initial"
          whileInView={"animate"}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          className="text-[2.5rem] font-bold mb-5"
        >
          가치관
        </motion.h2>
        <p className="text-xl">test</p>
      </div> */}
    </section>
  );
}

export default About;
