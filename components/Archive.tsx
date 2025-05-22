import Link from "next/link";
import { SiGithub } from "react-icons/si";
import Card from "./ui/Card";
import HorizentalLine from "./ui/HorizentalLine";

function Archive() {
  return (
    <section id="Archive" className="flex flex-col gap-10">
      <HorizentalLine text="Archive" />

      <Link
        className="flex flex-col  items-center"
        href="https://github.com/Iam-Sunghyun"
        target="_blank"
      >
        <Card className="flex flex-col justify-center w-[20rem]  sm:w-[43rem] sm:h-[14rem] md:w-[50rem] lg:w-[60rem] p-8 hover:border-blue-400 hover:bg-gray-50 gap-10">
          <div className="flex items-center gap-4 text-[4rem]">
            <SiGithub />
            <p>Github</p>
          </div>
          <p className="ml-4 text-left text-[1.3rem]">TIL 및 프로젝트 코드 저장소</p>
        </Card>
      </Link>
    </section>
  );
}

export default Archive;
