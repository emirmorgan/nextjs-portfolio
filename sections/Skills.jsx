import Styles from "../styles/styles.module.sass";
import { useInView } from "react-intersection-observer";

//Constants
import { mySkills } from "../constants";

//Components
import Sculpture from "../components/Sculpture";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section id="skills" className="w-full mx-auto my-32 p-2">
      <div
        ref={ref}
        className={
          "flex flex-col lg:flex-row justify-center items-center w-full px-10 " +
          (inView ? Styles.slideIn : " ")
        }
      >
        <div className="flex-1 px-3">
          <div className="flex items-center text-[52px]">
            <span className={Styles.textCartoon + "  whitespace-nowrap"}>
              My Skills
            </span>
            <div className="w-full h-[1px] ml-4 bg-black" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-3">
            {mySkills.map((item, id) => (
              <div key={id} className="flex items-center text-2xl gap-3">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div style={{ width: "320px", height: "450px" }}>
            <Sculpture />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
