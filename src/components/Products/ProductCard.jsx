import React from "react";
import Button from "../Shared/Button.jsx";

const ProductCard = ({ data }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
            {data.map((data) => (
                <div key={data.id} className="group relative">
                    <div className="relative">
                        <img src={data.img} alt=""
                             className="h-[180px] w-[260px] object-cover rounded-md"/>

                        {/* Hover button */}
                        <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full text-center inset-0 backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                            <Button
                                text={"Add to cart"}
                                bgColor={"bg-primary"}
                                textColor={"text-white"}
                            />
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="leading-7 text-center">
                        <h2 className="font-semibold">{data.title}</h2>
                        <h2 className="font-bold">${data.price}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
