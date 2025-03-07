import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Slider from "react-slick";


// Componente para cargar un modelo GLB
const Model = ({ path }) => {
    const { scene } = useGLTF(path);
    return <primitive object={scene} scale={1.5} />;
};

// Datos de los modelos
const HeroData = [
    {
        id: 1,
        modelPath: "/models/barbers_pole.glb",
        subtitle: "Barber Shop",
        title: "Classic",
        title2: "Pole",
        description: "The traditional barber pole for your shop.",
    },
    {
        id: 2,
        modelPath: "/models/barbers_scissors.glb",
        subtitle: "Precision Tools",
        title: "Professional",
        title2: "Scissors",
        description: "High-quality barber scissors for a perfect cut.",
    },
    {
        id: 3,
        modelPath: "/models/spa_cream.glb",
        subtitle: "Skin Care",
        title: "Luxury",
        title2: "Cream",
        description: "Premium spa cream for smooth and healthy skin.",
    },
];

const Hero = ({ handleOrderPopup }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className="container">
            <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
                <div className="container pb-8 sm:pb-0">
                    {/* Hero Section */}
                    <Slider {...settings}>
                        {HeroData.map((data) => (
                            <div key={data.id}>
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    {/* Text Content */}
                                    <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                        <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                                            {data.subtitle}
                                        </h1>
                                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                            {data.title}
                                        </h1>
                                        <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                                            {data.title2}
                                        </h1>
                                        <div>
                                            <Button
                                                text="Shop By Category"
                                                bgColor="bg-primary"
                                                textColor="text-white"
                                                handleOrderPopup={handleOrderPopup}
                                            />
                                        </div>
                                    </div>

                                    {/* Modelo 3D en lugar de imagen */}
                                    <div className="order-1 sm:order-2 flex justify-center">
                                        <Canvas
                                            camera={{ position: [0, 1, 3] }}
                                            className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px]"
                                        >
                                            <ambientLight intensity={0.5} />
                                            <directionalLight position={[2, 2, 2]} />
                                            <Model path={data.modelPath} />
                                            <OrbitControls enableZoom={false} />
                                        </Canvas>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Hero;
