import React from "react";
import Heading from "../Shared/Heading";

import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
    {
        title: "How to choose the perfect smartwatch",
        subtitle:
            "Minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "Jan 20, 2024 by Dilshad",
        image: Img1,
    },
    {
        title: "How to choose the perfect gadget",
        subtitle:
            "Minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "Jan 20, 2024 by Satya",
        image: Img2,
    },
    {
        title: "How to choose the perfect VR headset",
        subtitle:
            "Minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "Jan 20, 2024 by Sahir",
        image: Img3,
    },
];

const Blogs = () => {
    return (
        <div>
            <div className="container">
                {/* Header section */}
                <Heading title="Recent News" subtitle="Explore Our Blogs" />

                {/* Blog section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                    {/* Blog card */}
                    {BlogData.map((data, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-md">
                            {/* Image section */}
                            <div className="overflow-hidden rounded-2xl mb-2">
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                                />
                            </div>

                            {/* Content section */}
                            <div className="space-y-2">
                                <p className="text-xs text-gray-500">{data.published}</p>
                                <p className="font-bold line-clamp-1">{data.title}</p>
                                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
