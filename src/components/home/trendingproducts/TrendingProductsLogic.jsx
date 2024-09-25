import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] translate-y-[-50%] bg-black text-white right-0 slider-btn z-10 w-[50px] h-[50px] rounded-full flex items-center justify-center"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowRight size={40} />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] translate-y-[-50%] bg-black text-white left-0 slider-btn z-10 w-[50px] h-[50px] rounded-full flex items-center justify-center"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowLeft size={40} />
      </button>
    </div>
  );
}

function TrendingProductsLogic() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return [settings, SampleNextArrow, SamplePrevArrow];
}

export default TrendingProductsLogic;
