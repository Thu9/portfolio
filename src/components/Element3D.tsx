import { MeshRefractionMaterial, OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { MeshPhysicalMaterial } from "three";
import { RGBELoader } from "three/examples/jsm/Addons.js";
import { texture } from "three/examples/jsm/nodes/Nodes.js";
// import { RGBELoader } from "three/examples/jsm/Addons.js";

export default function Element3D() {
  // const mesh1 = useRef(null!);
  // const mesh2 = useRef(null!);

  // useEffect(() => {
  //   if (mesh1) {
  //     mesh2.current.material = mesh1.current.material;
  //   }
  // }, []);

  // const {
  //   roughness,
  //   metalness,
  //   clearcoat,
  //   clearcoatRoughness,
  //   transmission,
  //   thickness,
  //   ior,
  // } = useControls({
  //   roughness: { value: 0, min: 0, max: 1, step: 0.01 },
  //   metalness: { value: 0, min: 0, max: 1, step: 0.01 },
  //   clearcoat: { value: 0, min: 0, max: 1, step: 0.01 },
  //   clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.01 },
  //   transmission: { value: 0, min: 0, max: 1, step: 0.01 },
  //   thickness: { value: 0, min: 0, max: 10, step: 0.01 },
  //   ior: { value: 1.5, min: 0, max: 2.333, step: 0.01 },
  // });

  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      <axesHelper scale={10} />

      {/* <mesh ref={mesh1} position={[2, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.15, 256, 128]} />
        <meshPhysicalMaterial
          wireframe={false}
          visible={true}
          transparent={true}
          opacity={0.7}
          depthTest={true}
          depthWrite={true}
          side={THREE.DoubleSide}
          color={0xff0000}
          emissive={0x00000}
          roughness={roughness}
          metalness={metalness}
          flatShading={false}
          clearcoat={clearcoat}
          clearcoatRoughness={clearcoatRoughness}
          transmission={transmission}
          thickness={thickness}
          ior={ior}
        />
      </mesh>

      <mesh ref={mesh2} position={[-0.7, 0, 0]}>
        <torusGeometry args={[0.5, 0.2]} />
      </mesh> */}
      <mesh>
        <dodecahedronGeometry />
        <MeshRefractionMaterial
          envMap={texture}
          toneMapped={false}
          bounces={2}
        />
      </mesh>
      {/* <mesh>
        <Model />
      </mesh> */}
    </>
  );
}
