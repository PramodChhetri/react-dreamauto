import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-2 m-0 p-0"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2.5 h-2.5 bg-red rounded-full opacity-70"></div>
    ),
  };

  return (
    <div className=" relative">
      <Slider {...settings}>
        <div className="xl:h-[40rem] relative">
          <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" className="w-full h-full object-cover " />
        </div>
        <div className="xl:h-[40rem] relative">
          <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" className="w-full h-full object-cover" />
        </div>
        <div className="xl:h-[40rem] relative">
          <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" className="w-full h-full object-cover" />
        </div>
        <div className="xl:h-[40rem] relative">
          <img src="https://via.placeholder.com/800x400?text=Slide+4" alt="Slide 4" className="w-full h-full object-cover" />
        </div>
      </Slider>
    </div>
  );
};
