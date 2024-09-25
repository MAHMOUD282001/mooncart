import React from "react";
import ImagesContentLogic from "./ImagesContentLogic";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImagesContent = ({ images, title }) => {
  
  let [settings] = ImagesContentLogic(images);
  
  return (
    <div className="w-full lg:w-1/2">
      <div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
