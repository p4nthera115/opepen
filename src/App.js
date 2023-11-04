import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Opepen1";

const Ball = () => {
  return (
    <mesh position={[0.5, 1.5, 0.5]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

const Ring = () => {
  return (
    <mesh position={[-1, 5, -2]} scale={2}>
      <torusGeometry args={[0.5, 0.04, 5, 32]} />
      <meshStandardMaterial color="#bdffff" />
    </mesh>
  );
};

const App = () => {
  const ref = useRef();
  return (
    <>
      <color args={["#111"]} attach="background" />

      <OrbitControls makeDefault />

      <ambientLight intensity={0.1} />

      {/* <Ball /> */}
      {/* <Ring /> */}
      <Model />
    </>
  );
};

export default App;
