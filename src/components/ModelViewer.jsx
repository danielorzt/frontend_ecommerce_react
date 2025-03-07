import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Bounds, Environment } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

const RotatingModel = ({ modelPath }) => {
    const { scene } = useGLTF(modelPath);
    const modelRef = useRef();

    // Animación de rotación infinita
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01; // Velocidad de rotación
        }
    });

    return (
        <Bounds fit clip observe margin={1.2}>
            <primitive ref={modelRef} object={scene} />
        </Bounds>
    );
};

const ModelViewer = ({ modelPath }) => {
    return (
        <Canvas style={{ width: "100%", height: "600px" }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1} />

                {/* Entorno HDR sin mostrar de fondo */}
                <Environment files="/textures/studio.hdr" />

                {/* Modelo con rotación */}
                <RotatingModel modelPath={modelPath} />

                <OrbitControls />
            </Suspense>
        </Canvas>
    );
};

export default ModelViewer;
