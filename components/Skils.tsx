import { main, sub } from "@/data/badgeIcons";
import HorizentalLine from "./ui/HorizentalLine";

function Skils() {
  return (
    <div id="Skils" className="flex-1">
      <HorizentalLine text="Skills" />
      <section className="text-[1rem] sm:text-[1.1rem] tracking-wider flex flex-col gap-4 items-center">
        {/* <h2 className="font-bold">- Main</h2> */}
        {/* <ItemList lists={["HTML5", "CSS3", "JavaScript", "React", "TailwindCSS"]} />
        <br />
        <h2 className="font-bold">- Sub</h2>
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
        <h3>Main</h3>
        <div className="flex gap-2 flex-wrap justify-center">
          {/* 뱃지 같은 건 <img>로 처리하는 경우가 많다고 함. 만약 넥스트 이미지 최적화가 꼭 필요한 SVG가 아니면 <img>로 충분하다고 한다. */}
          {main.map((icon) => (
            <img
              className="hover:scale-[103%] shadow-md"
              key={icon.name}
              src={icon.image}
              alt={icon.name}
            />
          ))}
        </div>
        <h3 className="mt-5">Sub</h3>
        <div className="flex gap-2 flex-wrap justify-center">
          {sub.map((icon) => (
            <img className="hover:scale-[103%] shadow-md" key={icon.name} src={icon.image} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skils;
