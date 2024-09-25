import React from "react";
import BannerCard from "./BannerCard";
import bannerImg1 from "../../../assets/hero/product1-1.png";
import bannerImg2 from "../../../assets/hero/product2.png";
import bannerImg3 from "../../../assets/hero/product3.png";

export const Banner = () => {
  return (
    <section className="my-28">
      <div className="max-w-[80%] mx-auto flex flex-col lg:flex-row items-center gap-5">
        <div className="lg:w-1/2">
          <BannerCard
            title={"Wodden Water Bottles"}
            desc={"Up To 60% off"}
            cover={bannerImg1}
          />
        </div>

        <div className="flex flex-col justify-between gap-5 lg:w-1/2">
          <BannerCard
            title={"Wodden Water Bottles"}
            desc={"Up To 60% off"}
            cover={bannerImg2}
            isRight={true}
          />
          <BannerCard
            title={"Wodden Water Bottles"}
            desc={"Up To 60% off"}
            cover={bannerImg3}
            isRight={true}
            isRightBottom={true}
          />
        </div>
      </div>
    </section>
  );
};

