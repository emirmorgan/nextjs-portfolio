import Styles from "../styles/styles.module.sass";
import Image from "next/image";

//Assets
import { Icons } from "../assets";

//Constants
import { projects } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="w-full mx-auto my-12 p-2">
      <div className="flex justify-center items-center text-[52px] px-2 mb-6">
        <div className="mr-4">
          <Icons name="designProjects" />
        </div>
        <h1 className={Styles.textCartoon + " whitespace-nowrap"}>
          MY PROJECTS
        </h1>
        <div className="ml-4 rotate-180">
          <Icons name="designProjects" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 px-4 py-2 break-words">
        {projects.map((item, id) => (
          <div key={id} className={Styles.cardCartoon + " group"}>
            <Image
              src={item.imgSrc}
              alt={item.title}
              className="object-cover"
              fill
            />
            <div className="absolute bg-primaryColor w-full h-full opacity-0 group-hover:opacity-100 flex flex-col items-center justify-around p-3 transition-all ease-linear duration-200">
              <div className="font-bold text-2xl">{item.title}</div>
              <div className="flex justify-center flex-wrap gap-3 px-3">
                {item.tags.map((tag, id) => (
                  <div
                    key={id}
                    className="bg-white border-[2px] border-black px-2 py-1"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  className={Styles.buttonCartoon}
                  onClick={() => window.open(item.live, "_blank")}
                >
                  LIVE
                </button>
                <button
                  className={Styles.buttonCartoon}
                  onClick={() => window.open(item.source, "_blank")}
                >
                  SOURCE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <button
          className={Styles.buttonCartoon + " !px-8"}
          onClick={() =>
            window.open(
              "https://github.com/emirmorgan?tab=repositories",
              "_blank"
            )
          }
        >
          MORE
        </button>
      </div>
    </section>
  );
};

export default Projects;
