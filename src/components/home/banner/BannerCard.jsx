import React from "react";
import { Title } from "../../common/CustomComponents";

function BannerCard({ title, desc, cover, isRight, isRightBottom }) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <img
        src={cover}
        alt="Banner Img"
        className={`object-cover ${
          isRight || isRightBottom
            ? "h-[300px] lg:h-[250px] w-full"
            : "min-h-[300px] lg:h-[calc(520px)] w-full"
        }`}
      />

      <div
        className={`
        ${
          isRight
            ? "absolute bottom-0 p-8 w-full"
            : "absolute bottom-0 p-8 w-full"
        }
        ${isRight && isRightBottom ? "left-0 top-0" : ""} `}
      >
        <div>
          <Title level={3}>{title}</Title>
          <p className="text-sm md:text-lg font-normal leading-none mt-2">{desc}</p>
        </div>

        <div className="mt-5">
          <button className="secondary-btn ">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default BannerCard;
