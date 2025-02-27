import React from "react";
import Heading from "../Shared/Heading.jsx";
import ProductCard from "../Products/ProductCard.jsx";

const ProductData = [
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
    }

]

const Products = () => {
    return (
        <div>
            <div className="container">
                {/* Header section */}
                <Heading title="Our Products" subtitle={"Explore Our Products"} />

                {/* Body section */}
                <ProductCard data={ ProductsData } />
            </div>
        </div>
    );
};

export default Products;