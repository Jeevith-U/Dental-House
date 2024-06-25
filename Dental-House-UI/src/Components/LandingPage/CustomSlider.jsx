import React from "react";
import Slider from 'react-slick';
import SlideContent from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = ({slides}) => {
//   const slides = [
//     { id: 1, content: "Slide 1" },
//     { id: 2, content: "Slide 2" },
//     { id: 3, content: "Slide 3" },
//   ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />
  };

  return (
    <div className="h-screen">
      <Slider/>
    </div>
  );
};

export default CustomSlider;