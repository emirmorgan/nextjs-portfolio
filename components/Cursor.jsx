import { useState } from "react";
import Styles from "../styles/styles.module.sass";

const Cursor = () => {
  const [location, setLocation] = useState({ x: null, y: null });

  document.addEventListener("mousemove", (e) => {
    setLocation({ x: e.pageX, y: e.pageY });
  });

  return (
    <div
      className={Styles.cursor}
      style={{
        left: location.x,
        top: location.y,
      }}
    ></div>
  );
};

export default Cursor;
