import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <>
      <color args={["#111"]} attach="background" />

      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={0.1} />
      <ambientLight intensity={0.1} />

      <mesh scale={4} rotation-x={Math.PI * -0.5} position-y={-1}>
        <planeGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
};

export default App;
