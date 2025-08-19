import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Shoe from "./Shoe";

export default function App() {
  return (
    <Canvas shadows camera={{ position: [2, 2, 4], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <Stage environment="city" intensity={0.6}>
        <Shoe />
      </Stage>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
