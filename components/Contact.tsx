import Link from "next/link";
import HorizentalLine from "./ui/HorizentalLine";
import Image from "next/image";
import githubMark from "/app/public/github-mark.png";

function Contact() {
  return (
    <div id="Contact" className="mb-12">
      <HorizentalLine text="Contact" />
      <div className="h-[22rem] flex flex-col items-center gap-5">
        <Link
          className="hover:text-blue-500 flex items-center gap-2 mx-auto"
          href="https://github.com/Iam-Sunghyun"
          target="_blank"
        >
          <Image alt="github" width={25} height={25} src={githubMark} />
          <p>Github</p>
        </Link>
        <Link href={"/"}>Mail</Link>
      </div>
    </div>
  );
}

export default Contact;
