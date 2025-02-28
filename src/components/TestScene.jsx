import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const RotatingCube = () => {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="royalblue" />
        </mesh>
    );
};

const TestScene = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <RotatingCube />
        </Canvas>
    );
};

export default TestScene;
