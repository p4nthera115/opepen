import { OrbitControls, Grid } from "@react-three/drei";

const Ball = () => {
  return (
    <mesh position={[-0.5, 1.5, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="white" wireframe />
    </mesh>
  );
};

const App = () => {
  return (
    <>
      <color args={["#111"]} attach="background" />

      <OrbitControls makeDefault />
      <Grid
        infiniteGrid
        rotation={[Math.PI * -0.5, 0, 0]}
        sectionColor="red"
        sectionThickness={1.3}
        sectionSize={1}
        cellColor="white"
      />
      <Grid
        infiniteGrid
        rotation={[0, 0, Math.PI * -0.5]}
        sectionColor="red"
        sectionThickness={1.3}
        sectionSize={1}
        cellColor="white"
      />

      <ambientLight intensity={1} />

      <Ball />
    </>
  );
};

export default App;
