import React from "react";
import { herolist } from "../../../assets/data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroItem from "../heroitem/HeroItem";
import HeroLogic from "./HeroLogic";



export const Hero = () => {
  
  let [settings] = HeroLogic();
  
  return (
    <section className="h-[calc(100vh_-_96px)] lg:h-[calc(100vh_-_84px)] bg-white-100 relative px-4">
      <div className="lg:bg-black lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/3"></div>
      <div className="container h-full w-full">
        <Slider {...settings} className="h-full w-full">
          {herolist.map((heroItem) => (
            <HeroItem
              key={heroItem.id}
              title={heroItem.title}
              description={heroItem.description}
              prices={heroItem.price}
              colors={heroItem.color}
              image={heroItem.image}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};
