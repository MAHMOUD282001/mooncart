import React from "react";
import { BodyOne, Title } from "../../common/CustomComponents";

export const ProductsHeading = ({ title, firstSubTitle, secondSubTitle }) => {
  return (
    <>
      <Title level={2}>{title}</Title>

      <div className="flex items-center gap-4">
        <BodyOne className={"text-sm"}>{firstSubTitle}</BodyOne>
        <BodyOne className={"text-sm text-primary-green"}>
          {secondSubTitle}
        </BodyOne>
      </div>
    </>
  );
};
