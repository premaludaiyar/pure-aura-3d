import { useGLTF } from "@react-three/drei";

export default function Shoe(props) {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/nike-air-white/model.gltf"
  );
  return <primitive object={scene} {...props} />;
}
