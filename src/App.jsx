import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Category from "./components/Category/Category.jsx";
import Category2 from "./components/Category/Category2.jsx";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Products from "./components/Products/Products.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Partners from "./components/Partners/Partners.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import headphone from "./assets/hero/headphone.png";
import vr from "./assets/category/vr.png";
import AOS from "aos";
import "aos/dist/aos.css";
import TestScene from "./components/TestScene.jsx";
import { Suspense } from "react";


const BannerData = {
    discount: "30% OFF",
    title: "Fine Smile",
    date: "10 Enero al 28 de Enero",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Solo",
    title4: "Lorem ipsum dolor sit amet, consetetur adipisicing elit. Eaque reiciendis",
    bgColor: "#f42c37",
};

const BannerData2 = {
    discount: "50% OFF",
    title: "Happy Hours",
    date: "10 febrero al 28 de febrero",
    image: vr,
    title2: "Air Solo Bass",
    title3: "Winter Solo",
    title4: "Lorem ipsum dolor sit amet, consetetur adipisicing elit. Eaque reiciendis",
    bgColor: "#2dcc6f",
};

const App = () => {
    const [orderPopup, setOrderPopup] = useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-sine",
            delay: 100,
            offset: 100,
        });
    }, []); // Agregado el array de dependencias vacío para que solo se ejecute una vez

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <Navbar handleOrderPopup={handleOrderPopup} />
            <Hero handleOrderPopup={handleOrderPopup} />
            <Suspense fallback={<div>Cargando...</div>}>
                <TestScene />
            </Suspense>
            <Category />
            <Category2 />
            <Services />
            <Banner data={BannerData} />
            <Products />
            <Banner data={BannerData2} />
            <Blogs />
            <Partners />
            <Footer />
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

        </div>
    );
};

export default App;
