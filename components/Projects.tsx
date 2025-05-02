import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import Card from "./ui/Card";
import HorizentalLine from "./ui/HorizentalLine";
import ItemList from "./ui/ItemList";

const Projects = () => {
  return (
    <div id="Projects">
      <HorizentalLine text="Projects" />
      <div className="flex flex-col items-center gap-10 text-[1.1rem] mb-24">
        {projects.map((project) => (
          <Link key={project.name} href={`${project.link}`}>
            <Card className="py-8 px-12 hover:border-blue-400 flex flex-col lg:flex-row lg:justify-between ">
              <div className="flex flex-col justify-center">
                <h1 className="mb-5">{project.name}</h1>
                <Image
                  className="aspect-[1.2/1.1]
                  rounded-xl"
                  src={project.image ?? ""}
                  alt="image"
                />
              </div>
              <div className="lg:ml-10 flex flex-col xl:justify-evenly ">
                <div>
                  <h2>사용 기술</h2>
                  <ItemList lists={project.skills} className="mb-5 mt-5 " />
                </div>
                <div>
                  <h2 className="mt-6">주요 기능</h2>
                  <ul className="mt-6 leading-9 ">
                    {project.description.map((des) => (
                      <li key={des}>{des}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
