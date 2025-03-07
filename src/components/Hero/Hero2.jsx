import React, { Suspense } from "react";
import Slider from "react-slick";
import Button from "../Shared/Button.jsx";

// Importación dinámica del ModelViewer para mejorar el rendimiento
const ModelViewer = React.lazy(() => import("../ModelViewer.jsx"));

const HeroData = [
    {
        id: 1,
        model: "/models/barbers_pole.glb",
        subtitle: "Barber Pole",
        title: "Classic Decoration",
        service: "Nuestro icónico Barber Pole representa la tradición y el arte del barbero clásico.",
    },
    {
        id: 2,
        model: "/models/barbers_scissors.glb",
        subtitle: "Scissors",
        title: "Professional Tools",
        service: "Usamos tijeras de precisión para cortes perfectos y estilos personalizados.",
    },
];

// Generar un servicio aleatorio
const getRandomService = () => {
    const services = [
        "Afeitado con navaja y toalla caliente para un acabado impecable.",
        "Corte de cabello con técnicas modernas y personalizadas.",
        "Diseño y perfilado de barba con productos premium.",
        "Masaje capilar relajante con aceites esenciales.",
    ];
    return services[Math.floor(Math.random() * services.length)];
};

const Hero2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
    };

    return (
        <div className="relative w-full h-[700px] flex items-center justify-center bg-gray-900 text-white px-6">
            <Slider {...settings} className="w-full max-w-6xl mx-auto">
                {HeroData.map((item) => (
                    <div key={item.id} className="flex flex-col md:flex-row items-center justify-between gap-12">
                        {/* Hexágono con el Modelo */}
                        <div className="relative w-[400px] h-[460px] flex items-center justify-center">
                            <div className="w-[100%] h-[100%] bg-blue-500 clip-hexagon flex items-center justify-center shadow-2xl">
                                <Suspense fallback={<div className="text-lg">Loading Model...</div>}>
                                    <ModelViewer modelPath={item.model} />
                                </Suspense>
                            </div>
                        </div>

                        {/* Descripción del Servicio */}
                        <div className="max-w-lg text-left">
                            <h3 className="text-lg uppercase tracking-widest text-gray-300 animate-fade-in">
                                {item.subtitle}
                            </h3>
                            <h2 className="text-5xl font-extrabold text-white drop-shadow-lg animate-slide-in">
                                {item.title}
                            </h2>
                            <p className="mt-4 text-lg text-gray-300 animate-fade-in">
                                {getRandomService()}
                            </p>
                            <Button className="mt-6 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg text-lg font-bold uppercase transition-all duration-300">
                                Agendar Cita
                            </Button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Hero2;
