import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bg-white text-black -bottom-[70px] left-[calc(50%_+_60px)] translate-x-[-50%] md:left-[100px] md:translate-x-[0] slider-btn z-10 w-[50px] h-[50px] rounded-full flex items-center justify-center"
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
      className="absolute bg-white text-black -bottom-[70px] left-[calc(50%_-_60px)] translate-x-[-50%] md:left-[20px] md:translate-x-[0] slider-btn z-10 w-[50px] h-[50px] rounded-full flex items-center justify-center"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowLeft size={40} />
      </button>
    </div>
  );
}

const settings = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function TestimonialsLogic() {
  return [settings];
}

export default TestimonialsLogic;
