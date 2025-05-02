import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ToProjectButton from "./ui/ToProjectButton";
// import HorizentalLine from "./ui/HorizentalLine";

const Landing = () => {
  return (
    <div id="Home" className="pt-40 pb-32 text-center ">
      {/* Aceternity UI */}
      <TextGenerateEffect
        words="안녕하세요! 프론트엔드 개발자 입니다. 예시 문구 예시 문구 예시 문구"
        className="xs:leading-[4rem] lg:leading-[6rem] text-3rem lg:text-[4rem] xs:text-[3.2rem]"
      />
      {/* <HorizentalLine text="" /> */}
      <ToProjectButton />
    </div>
  );
};

export default Landing;
