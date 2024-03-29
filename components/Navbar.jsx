import { useRouter } from "next/router";

import Styles from "../styles/styles.module.sass";

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="w-full min-h-[75px] border-b border-t border-secondaryColor">
      <nav className="w-full min-h-[75px] flex relative justify-center items-center gap-[22px]">
        <button
          className={Styles.buttonCartoon}
          onClick={() => router.push("/#projects")}
        >
          My Projects
        </button>
        <button
          className={Styles.buttonCartoon}
          onClick={() => router.push("/#skills")}
        >
          My Skills
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
