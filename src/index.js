import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Canvas
    camera={{
      fov: 45,
      near: 0.1,
      far: 2000,
      position: [-3, 1.5, 4],
    }}
  >
    <Perf position="top-left" />
    <App />
  </Canvas>
);
