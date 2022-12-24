import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model3 = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("./model/scene.gltf");

  //Frame animation
  useFrame((state, delta) => (group.current.rotation.y += 0.011));

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1} position={[0, -2.3, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.x_low_x_low_0.geometry}
              material={materials.x_low}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export default Model3;
