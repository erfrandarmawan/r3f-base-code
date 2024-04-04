import {
  OrbitControls,
  PerspectiveCamera
} from "@react-three/drei";
import { Suspense, useRef } from "react";

export function Scene(){
  const cameraRef = useRef();
  const orbitRef = useRef();

  return (
    <Suspense fallback={null}>
      <directionalLight 
        color="white" 
        position={[5, 10, 20]} 
        intensity={0.5} 
        />

      <PerspectiveCamera 
        ref={cameraRef} 
        makeDefault 
        position={[20, 24.5, 35]} 
        fov={60} />

      <OrbitControls 
        ref={orbitRef}
        minDistance={10}
        maxDistance={50}/>

      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </Suspense>
  );
}