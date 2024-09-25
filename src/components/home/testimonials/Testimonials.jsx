import React from "react";
import testMainImg from "../../../assets/hero/man.png";
import testImgOne from "../../../assets/testimonial/pic1-2.png";
import testImgTwo from "../../../assets/testimonial/pic2-2.png";

import { BodyOne, Title } from "../../common/CustomComponents";
import { TestimonialCard } from "../testimonialcard/TestimonialCard";
import TestimonialsLogic from "./TestimonialsLogic";
import Slider from "react-slick";
import { testimonials } from "../../../assets/data/data";

export const Testimonials = () => {
  const [settings] = TestimonialsLogic();

  return (
    <section className="testimonials my-28 px-4">
      <div className="testimonials-overlay"></div>
      <div className="container h-full lg:flex items-center justify-center text-center lg:text-left">
        <div className="w-full lg:w-1/2 xl:w-1/3 flex relative z-50">
          <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white-100 rounded-full">
            <img
              src={testMainImg}
              alt=""
              className="w-64 h-[340px] sm:w-80 sm:h-[400px] object-contain absolute -top-[90px] left-0 rounded-b-full"
            />
          </div>

          <div className="bg-[rgba(255,255,255,0.1)] p-5 w-[220px] backdrop-blur-sm rounded-lg absolute top-36 translate-x-[-50%] left-32 sm:left-72 z-50">
            <BodyOne className={"text-white my-0"}>Our Satisfied User</BodyOne>

            <div className="flex items-center">
              <img
                src={testImgOne}
                alt="Testimonial One"
                className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
              />

              <img
                src={testImgTwo}
                alt="Testimonial One"
                className="-ml-4 w-14 h-14 rounded-full object-cover border-2 border-gray-100"
              />

              <span className="-ml-4 w-14 h-14 rounded-full border-2 border-gray-100 bg-slate-300 flex items-center justify-center">
                +12
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 xl:w-2/3 relative z-50 mt-10 lg:mt-0">
          <Title level={2} className={"text-white"}>
            What Our Clients Say About Us
          </Title>
          <BodyOne className={"mb-8 text-white-100"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur, voluptas? Voluptatem, officiis! Tempore eum modi qui
            dicta atque ipsum cupiditate, sit veniam veritatis, molestias minima
            optio, incidunt fuga molestiae error.
          </BodyOne>

          <div className="w-full">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <TestimonialCard
                  key={index}
                  name={item.name}
                  comment={item.comment}
                  img={item.image}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
