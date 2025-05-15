import Image, { StaticImageData } from "next/image";
import Card from "./Card";

interface ProjectProps {
  name: string;
  image: StaticImageData | string;
  skills: string[];
  description: string;
  link?: string;
  theme: boolean;
}

function Project({ name, image, skills, description, theme }: ProjectProps) {
  return (
    <article>
      <Card
        className={`p-8 mx-2 ${
          theme ? "bg-gray-50 hover:bg-gray-100" : " hover:bg-gray-800"
        } hover:border-blue-400 flex flex-col sm:flex-row items-center text-lg  min-w-[20rem] sm:w-[43rem] sm:h-[24rem] md:w-[50rem] lg:w-[60rem] overflow-hidden relative  group`}
      >
        <div className="flex items-center flex-col gap-8  lg:gap-10 sm:w-[17rem] md:w-[19rem] lg:w-[20rem]">
          <Image
            className="w-[27rem] sm:w-[31rem] sm:h-[27rem] md:w-[35rem] md:h-[31rem] lg:w-[37rem] lg:h-[33rem] sm:absolute sm:-right-40 sm:top-8 md:-right-36 lg:-right-10 shadow-[0_0_15px_0_rgba(82,82,82,0.298)] rounded-xl group-hover:rotate-[-4deg] group-hover:-translate-x-6 transition"
            src={image}
            alt={name}
          />
          <p className="text-3xl">{name}</p>
          <p className="flex justify-center gap-1 flex-wrap">
            {skills.map((skill) => (
              <Card
                key={skill}
                className={`text-[0.9rem] px-3 hover:scale-[103%] ${theme && "bg-white"}`}
              >
                {skill}
              </Card>
            ))}
          </p>
          <p className="sm:mt-10">{description}</p>
        </div>

        {/* <p>{link}</p> */}
      </Card>
    </article>
  );
}

export default Project;
