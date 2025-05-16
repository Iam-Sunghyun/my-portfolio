import Image from "next/image";
import Link from "next/link";
import Card from "./ui/Card";
import HorizentalLine from "./ui/HorizentalLine";
import githubMark from "/app/public/github-mark.png";
import { SiGithub } from "react-icons/si";

function Archive() {
  return (
    <section id="Archive" className="flex flex-col gap-10">
      <HorizentalLine text="Archive" />

      <article>
        <Link
          className="hover:text-blue-500 flex items-center gap-2 "
          href="https://github.com/Iam-Sunghyun"
          target="_blank"
        >
          <Card className="flex-col sm:flex-row items-center text-lg  min-w-[20rem] sm:w-[43rem] sm:h-[24rem] md:w-[50rem] lg:w-[60rem] overflow-hidden  mx-auto">
            <div className="flex items-center  gap-2">
              <SiGithub />
              <p>Github</p>
            </div>
          </Card>
        </Link>
      </article>
    </section>
  );
}

export default Archive;
