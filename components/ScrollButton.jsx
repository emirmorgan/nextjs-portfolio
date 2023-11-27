import { useState } from "react";
import { Icons } from "../assets";

import Styles from "../styles/styles.module.sass";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  window.addEventListener("scroll", () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 1200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <a href="#">
      <div
        className={
          Styles.scrollButton +
          (visible ? " flex items-center justify-center" : " hidden")
        }
      >
        <Icons name="arrowUp" />
      </div>
    </a>
  );
};

export default ScrollButton;
