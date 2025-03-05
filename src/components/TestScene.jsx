import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Environment } from '@react-three/drei';

const Model = () => {
    const gltf = useLoader(GLTFLoader, 'model');
    const modelRef = useRef();

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.02;
        }
    });

    return (
        <primitive
            ref={modelRef}
            object={gltf.scene}
            scale={0.7}
            position={[0, -1, 0]}
            castShadow
            receiveShadow
        />
    );
};

const TestScene = () => {
    return (
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[2, 4, 3]} intensity={1.5} castShadow />
            <Environment preset="studio" background />
            {/* Usa carpeta public */}

            <Suspense fallback={null}>
                <Model />
            </Suspense>
            <OrbitControls enableZoom={true} enablePan={false} />
            <EffectComposer>
                <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} />
            </EffectComposer>
        </Canvas>
    );
};

export default TestScene;
