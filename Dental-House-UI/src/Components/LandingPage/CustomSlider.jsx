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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="relative w-full mx-auto mt-10">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <SlideContent content={slide.content} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      Next
    </button>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      Prev
    </button>
  );
};

export default CustomSlider;