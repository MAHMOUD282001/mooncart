import React, { useState } from "react";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import { BodyOne, Caption, Title } from "../../common/CustomComponents";
import { useShowModal } from "../../../context/ShowProductDataContext";
import ProductDetailsContentLogic from "./ProductDetailsContentLogic";

export const ProductDetailsContent = ({
  id,
  discount,
  title,
  description,
  color,
  rating,
  price,
  images,
}) => {
  let [
    selectedColor,
    selectedPrice,
    handleChooseColor,
    renderRatingStars,
    addItemToCart,
    addItemToFavourites,
  ] = ProductDetailsContentLogic(
    id,
    discount,
    title,
    description,
    color,
    rating,
    price,
    images
  );

  return (
    <div className="product-details w-full lg:w-1/2 p-6">
      <button className="bg-indigo-500 px-5 py-2 text-white font-medium mb-3">
        Sale {discount}% OFF
      </button>

      <Title level={3}>{title}</Title>

      <div className="flex items-center gap-2 mt-2">
        {renderRatingStars(rating)}
      </div>

      <BodyOne className={"leading-6 mt-7"}>{description}</BodyOne>

      <div className="mt-3">
        <Caption>Colors</Caption>

        <div className="flex items-center gap-3 mt-3">
          {color.map((colorItem, index) => (
            <div
              key={index}
              onClick={() => handleChooseColor(colorItem.value)}
              className={`w-5 h-5 rounded-full cursor-pointer ${
                selectedColor == colorItem.value
                  ? "border-[3px] border-gray-300"
                  : "border"
              }`}
              style={{ backgroundColor: colorItem.value }}
            ></div>
          ))}
        </div>

        <div className="mt-7">
          <Caption>Prices</Caption>

          <div className="flex items-center gap-3">
            {price.slice(0, 1).map((priceItem, index) => (
              <div key={index} className="flex items-center gap-3">
                <BodyOne className={"line-through"}>
                  ${selectedPrice.value}
                </BodyOne>

                <Title level={3} className={"text-primary-green"}>
                  $
                  {(
                    selectedPrice.value -
                    (priceItem.value * discount) / 100
                  ).toFixed(2)}
                </Title>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center flex-col sm:flex-row gap-3 mt-5">
          <button
            className="primary-btn sm:w-1/2 w-full"
            onClick={addItemToCart}
          >
            Add To Cart
          </button>

          <button
            className="secondary-btn flex items-center gap-2  sm:w-1/2 w-full"
            style={{ padding: "12px 7px" }}
            onClick={addItemToFavourites}
          >
            <BiHeart size={20} /> Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
