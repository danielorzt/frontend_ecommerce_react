import React from "react";
import Heading from "../Shared/Heading.jsx";
import ProductCard from "../Products/ProductCard.jsx";

//images import
//images import
import Img1 from "../../assets/product/p-1.png";
import Img2 from "../../assets/product/p-2.png";
import Img3 from "../../assets/product/p-3.png";
import Img4 from "../../assets/product/p-4.png";
import Img5 from "../../assets/product/p-5.png";
import Img6 from "../../assets/product/p-6.png";
import Img7 from "../../assets/product/p-7.png";
import Img8 from "../../assets/product/p-8.png";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Rocky Mountain",
        price: "420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed",
        price: "600",
    },
];

const ProductsData2 = [
    {
        id: 5,
        img: Img5,
        title: "Product 5",
        price: "150",
        aosDelay: "800",
    },
    {
        id: 6,
        img: Img6,
        title: "Product 6",
        price: "250",
        aosDelay: "1000",
    },
    {
        id: 7,
        img: Img7,
        title: "Product 7",
        price: "350",
        aosDelay: "1200",
    },
    {
        id: 8,
        img: Img8,
        title: "Product 8",
        price: "450",
        aosDelay: "1400",
    },
];


const Products = () => {
    return (
        <div>
            <div className="container">
                {/* Header section */}
                <Heading title="Our Products" subtitle={"Explore Our Products"} />
                {/* Body section */}
                <ProductCard data={ProductsData} />
                <ProductCard data={ProductsData2} />
            </div>
        </div>
    );
};

export default Products;
