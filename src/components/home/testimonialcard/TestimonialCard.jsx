import React from "react";
import { BodyOne, Title } from "../../common/CustomComponents";

export const TestimonialCard = ({ name, img, comment }) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-[30px]">
          <img
            src={img}
            alt="Person"
            className="w-16 h-16 object-cover rounded-full"
          />
        <div className="details">
          <Title level={4} className={"text-white"}>
            {name}
          </Title>

          <p className={"text-white-100"}>{comment}</p>
        </div>
      </div>
    </div>
  );
};
