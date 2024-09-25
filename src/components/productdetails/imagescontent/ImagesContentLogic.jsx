import React from "react";

function ImagesContentLogic(images) {

  const CustomSlider = ({ index, onClick }) => (
    <div className="w-14 h-14 sm:w-28 sm:h-28">
      <img src={images[index].image} alt="Slider Img" onClick={onClick} />
    </div>
  );

  const settings = {
    customPaging: (i) => <CustomSlider index={i} />,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return [settings];
}

export default ImagesContentLogic;
