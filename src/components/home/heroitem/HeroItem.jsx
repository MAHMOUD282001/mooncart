import React, { useState } from "react";
import { BodyOne, Caption, Title } from "../../common/CustomComponents";
import HeroItemLogic from "./HeroItemLogic";

function HeroItem({ title, description, prices, colors, image }) {
  const [selectedColor, selectedPrice, handleSelectColor] = HeroItemLogic(
    colors,
    prices
  );

  return (
    <div className="block lg:flex lg:justify-between lg:items-center h-full">
      <div className="w-full lg:w-1/2 lg:p-36 lg:px-12 xl:px-20">
        <Title level={1} className={"leading-snug font-medium"}>
          {title}
        </Title>

        <BodyOne>{description}</BodyOne>

        <div className="flex items-center gap-8 my-5">
          <div>
            <Caption>Prices</Caption>

            <div className="mt-2">
              <Title level={5}>{selectedPrice.value}</Title>
            </div>
          </div>

          <div>
            <Caption>Colors</Caption>

            <div className="flex items-center gap-3 mt-5">
              {colors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectColor(color.value)}
                  className={`w-4 h-4 rounded-full cursor-pointer ${
                    selectedColor === color.value
                      ? "border-2 border-gray-300"
                      : ""
                  }`}
                  style={{ backgroundColor: color.value }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="primary-btn">View Details</button>
          <button className="secondary-btn">Shop Now</button>
        </div>
      </div>

      <div className="bg-white p-5 w-full lg:w-1/2 h-[35vh] sm:h-[45vh] lg:h-[calc(100vh_-_84px)] flex items-center justify-center relative z-50 mt-[20px] lg:mt-0">
        <img
          src={image}
          loading="lazy"
          alt="Hero Img"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

export default HeroItem;
