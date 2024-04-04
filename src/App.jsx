import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { StatsGl } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <StatsGl />
        <axesHelper args={[10]}/>
        <Scene/>
      </Canvas> 
    </>
  );
}

export default App;
