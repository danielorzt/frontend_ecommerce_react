import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Environment } from "@react-three/drei";

const Model = () => {
    const modelRef = useRef();
    const gltf = useLoader(GLTFLoader, import.meta.env.BASE_URL + "models/barbers_pole.glb");
    console.log("Modelo cargado:", gltf);

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.30;
        }
    });

    return <primitive ref={modelRef} object={gltf.scene} scale={0.7} position={[0, -1, 0]} />;
};

const TestScene = () => {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[2, 4, 3]} intensity={1.5} />

            {/* Se carga solo la iluminación sin cambiar el fondo */}
            <Suspense fallback={null}>
                <Environment files="/textures/studio.hdr" background={false} />
            </Suspense>
            <Suspense fallback={null}>
                <Model />
            </Suspense>

            <OrbitControls enableZoom={true} enablePan={false} />
        </Canvas>
    );
};

export default TestScene;
