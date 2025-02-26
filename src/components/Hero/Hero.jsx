import React from "react";
import Slider from "react-slick";

const Hero = () => {

    const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
               //autoplay: true,
                 autoplaySpeed: 4000,
                 cssEase: 'ease-in-out',
                 pauseOnHover: false,
                pauseOnFocus: true,
    };
    return (
        <div>
        <div>
            {/*Hero section*/}
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
        </div>
    )
}

export default Hero;