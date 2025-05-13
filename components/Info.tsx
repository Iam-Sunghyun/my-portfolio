import HorizentalLine from "./ui/HorizentalLine";
import { motion, Variants } from "framer-motion";

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

function Info() {
  return (
    <section id="Info" className="flex flex-col  gap-20 ">
      <HorizentalLine text="Info" />
      <div>
        <p className="text-xl">
          컴퓨터공학과 졸
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda corrupti doloribus
          alias ipsam quod necessitatibus, magni suscipit repellat at ducimus dignissimos officia
          voluptatum sequi, provident beatae nobis, ipsum dolorum.
        </p>
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
          className="text-[2.5rem] font-bold mb-5"
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
      </div>
    </section>
  );
}

export default Info;
