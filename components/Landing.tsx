import MagicButton from "./ui/ToProjectButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import HorizentalLine from "./ui/HorizentalLine";

const Landing = () => {
  return (
    <div id="Home" className="pt-40 pb-32 text-center ">
      {/* Aceternity UI */}
      <TextGenerateEffect
        words={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iusto obcaecati mollitia nesciunt,"
        }
        className="text-[4rem]"
      />
      {/* <HorizentalLine text="" /> */}
      <MagicButton title="프로젝트" />
    </div>
  );
};

export default Landing;
