import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Element3D() {
  const refMesh = useRef<any>();
  useFrame((state, delta) => {
    refMesh.current.rotation.y += delta;
  });

  return (
    <>
      <directionalLight position={[1, 1, 1]} />

      <axesHelper scale={10} />
      <OrbitControls />

      <mesh
        ref={refMesh}
        position-y={2}
        rotation-y={(45 * Math.PI) / 180}
        rotation-z={THREE.MathUtils.degToRad(45)}
        scale={[2, 1, 1]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#e67e22"
          opacity={0.1}
          transparent={true}
        />
        <axesHelper />

        <mesh scale={[0.1, 0.1, 0.1]} position-y={2}>
          <sphereGeometry />
          <meshStandardMaterial color="red" />
          <axesHelper scale={5} />
        </mesh>
      </mesh>
    </>
  );
}
