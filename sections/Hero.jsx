import Styles from "../styles/styles.module.sass";

//Assets
import { Icons } from "../assets";

//Constants
import { socials } from "../constants";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center w-full h-[calc(100vh-75px)] min-h-[600px]"
    >
      <div className="flex flex-col items-center justify-center h-full mb-10">
        <div className="flex flex-col items-center text-center text-[74px] sm:text-[86px] md:text-[136px] lg:text-[176px] z-10 px-4">
          <h1 className={Styles.textCartoon}>FRONT-END DEVELOPER</h1>
          <h1 className={Styles.textCartoon}>EMİR MORGAN</h1>
          <div className="flex justify-center items-center gap-3 mt-6">
            <div>
              <Icons name="designSocials" />
            </div>
            <div className="flex gap-4">
              {socials.map((item, id) => (
                <a
                  key={id}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-95 transition-all ease-linear"
                >
                  <Icons name={item.icon} />
                </a>
              ))}
            </div>
            <div className="rotate-180">
              <Icons name="designSocials" />
            </div>
          </div>
        </div>
        <div className="absolute animate-[spin_4s_infinite] max-w-[210px] sm:max-w-[380px] lg:max-w-[480px]">
          <Icons name="star" />
        </div>
      </div>
      <div className="mt-auto mb-8 animate-[bounce_1s_infinite]">
        <Icons name="arrowDown" />
      </div>
    </section>
  );
};

export default Hero;
