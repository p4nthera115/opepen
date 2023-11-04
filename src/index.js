import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { OrbitControls, Grid } from "@react-three/drei";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Canvas
    camera={{
      fov: 15,
      near: 0.1,
      far: 2000,
      position: [0, 0, -30],
    }}
  >
    {/* <Perf position="top-left" /> */}

    {/* <Grid
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
    /> */}

    <App />
  </Canvas>
);
