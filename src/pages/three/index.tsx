import { Canvas } from "@react-three/fiber";
import Element3D from "../../components/Element3D";

export default function Three() {
  return (
    <>
      <Canvas>
        <Element3D />
        {/* <Element3D2 /> */}
      </Canvas>
    </>
  );
}
