import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Loading from "./Loading";
import Model from "./Model";

const Sculpture = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} />
        <Model />
      </Canvas>
    </Suspense>
  );
};

export default Sculpture;
