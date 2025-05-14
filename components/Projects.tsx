import { projects } from "@/data/projects";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import HorizentalLine from "./ui/HorizentalLine";
import Project from "./ui/Project";
import { useThemes } from "@/context/ThemeProvider";

const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.2,
    y: 200,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

const Projects = () => {
  const { theme } = useThemes(); // 다크모드 context
  return (
    <section id="Projects">
      <HorizentalLine text="Projects" />
      <div
        // className="flex flex-col items-center gap-10 text-[1.1rem] mb-24"
        className="flex flex-col gap-8 mt-20 items-center"
      >
        {projects.map((project, index) => (
          <Link key={project.name} href={`${project.link}`}>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              // viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                // type: "spring",
              }}
            >
              <Project
                name={project.name}
                skills={project.skills}
                image={project.image}
                description={project.description}
                theme={theme}
              />
              {/* <Card className="py-8 px-12 hover:border-blue-400 flex flex-col lg:flex-row lg:justify-between ">
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
            </Card> */}
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
