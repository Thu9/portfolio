import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Brass.gltf");
  console.log("nodes", nodes);
  console.log("materials", materials);
  return (
    <group ref={group} {...props} dispose={null} scale={0.4}>
      <mesh
        position={[0, 0.2, 0.2]}
        castShadow
        receiveShadow
        geometry={nodes.brass_goblet_01.geometry}
        material={materials["brass_goblets_01"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brass_goblet_02.geometry}
        material={materials["brass_goblets_02"]}
      />
      <mesh
        position={[0.2, -0.2, 0]}
        castShadow
        receiveShadow
        geometry={nodes.brass_goblet_03.geometry}
        material={materials["brass_goblets_03"]}
      />
    </group>
  );
}
