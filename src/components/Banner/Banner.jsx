import React from 'react';

const Banner = ({ data }) => {
    return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
        <div className="container">
            <div style={{ backgroundColor: data.bgColor}}
                 className="grid grid-cols-1 md:grid-cols-3 gap-6
                 items-center text-white rounded-3xl ">
                {/* First col */}
                <div className="p-6 sm:p-8">
                    <p className="text-sm">{data.discount}</p>
                    <h1 className="uppercase text-4x lg:text-7xl font-bolc">
                        {" "}
                        {data.title}
                    </h1>
                    <p className="text-sm">{data.date}</p>
                </div>
                {/* Second col */}
                {/* Third col */}
            </div>
        </div>
    </div>
    );
};

export default Banner;