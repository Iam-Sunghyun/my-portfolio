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
    <section id="About" className="flex flex-col  gap-4 ">
      <HorizentalLine text="About" />

      <div className="flex flex-col gap-10  ">
        <motion.h2
          variants={framerVariants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          className="text-[2.5rem] font-bold mb-5 leading-[1.2]"
        >
          <p className="border-b-2 border-blue-200 inline-block px-4 mx-auto">Info</p>
        </motion.h2>
      </div>

      <div className="grid sm:grid-cols-2 sm:grid-rows-2 max-md:gap-10 gap-8 mx-auto mb-20">
        <div className="flex gap-10 items-center  ">
          <IoPerson className="text-4xl" />
          <div className="flex flex-col mt-2 items-start gap-1">
            <h2 className="text-lg">이름</h2>
            <span className="text-gray-500 text-xl tracking-wider">전성현</span>
          </div>
        </div>
        <div className="flex gap-10 items-center sm:pl-12">
          <FaPhone className="text-4xl" />
          <div className="flex flex-col mt-2 items-start gap-1">
            <h2 className="text-lg">연락처</h2>
            <span className="text-gray-500 text-[1.1rem] text-start">010. 1224. 5678</span>
          </div>
        </div>
        <div className="flex gap-10 items-center ">
          <MdEmail className="text-4xl" />
          <div className="flex flex-col mt-2 items-start gap-1">
            <h2 className="text-lg">이메일</h2>
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
            <h2 className="text-lg">GitHub</h2>
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
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          className="text-[2.5rem] font-bold mb-5 leading-[1.2]"
        >
          <p className="border-b-2 border-blue-200 inline-block px-4 mx-auto">Introduce</p>
        </motion.h2>
        <p className="text-xl text-start max-w-[50rem] mx-auto pl-6 leading-9">
          {/* 프론트 시작 계기 */}
          '인터랙티브 디벨로퍼'라는 유튜버의 프론트엔드 프로젝트를 보고 사용자와 상호작용 하는 웹
          사이트에 매력을 느껴 웹 프론트엔드 개발자가 되기로 결심했습니다.
          <br />
          <br />
          {/* 가치관 */}
          변화무쌍한 프론트엔드에서 기술에 치중되지 않는 것의 중요성을 알고, 겸손한 태도로 동료들과
          시너지를 낼 수 있는 개발자가 되야겠다고 항상 생각합니다.
          <br />
          <br />
          React와 Nextjs, Tailwind를 이용한 코드 작성에 익숙하며 express 쿠키 세션으로 회원가입.
          mongodb CRUD, 파이어베이스 인증, 이미지 및 텍스트 저장, 가져오기 수정 등 구현 경험, ejs
          템플릿 엔진 사용 경험 있음.
          <br />
          <br />
          주로 웹을 통해 공부하지만 책으로 공부하는 것을 선호합니다. Github TIL 레포지토리에 공부한
          내용을 기록하며 잊지 않으려고 노력하고 있습니다.
          {/* 목표 */}
          <br /> <br />
          사용자에게 쾌적하고 인터렉션이 있는 웹 사이트를 제공하는 웹 프론트엔드 개발자가 되고 싶고
          경험이 누적되면 프레임워크를 개발하여 상용화 해보는 것이 목표입니다.
        </p>
      </div>
    </section>
  );
}

export default About;
