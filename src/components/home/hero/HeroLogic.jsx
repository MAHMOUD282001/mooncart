import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-0 bg-black text-white left-[50%] slider-btn z-10"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowRight size={50} />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-0 bg-white text-primary left-[calc(50%_-_50px)] slider-btn z-10"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowLeft size={50} />
      </button>
    </div>
  );
}

function HeroLogic() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return [settings, SampleNextArrow, SamplePrevArrow];
}

export default HeroLogic;
