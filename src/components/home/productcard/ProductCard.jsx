import React, { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { IoCart, IoClose } from "react-icons/io5";
import { BodyOne, Title } from "../../common/CustomComponents";
import { NavLink } from "react-router-dom";
import ProductCardLogic from "./ProductCardLogic";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../store/slice/cartSlice";
import {
  addToFavourites,
  favouritesItems,
} from "../../../store/slice/favouriteSlice";

function ProductCard({
  id,
  title,
  description,
  images,
  price,
  discount,
  rating,
  featured,
  color,
  isTrending,
}) {
  const [
    handleQuickViewBtn,
    renderRatingStars,
    addItemToCart,
    addItemToFavourites,
    favourites,
  ] = ProductCardLogic(id, title, description, images, price, discount, rating);

  return (
    <>
      <div className={`product-card ${isTrending ? "px-2" : ""}`}>
        <div className="content overflow-hidden relative h-80">
          <img
            src={images[0].image}
            alt="Product Img"
            className="w-full h-full object-cover"
          />

          <div className="flex justify-between absolute top-0 left-0 w-full p-4">
            {discount && (
              <button className="py-1.5 px-5 bg-black text-white">
                %{discount}
              </button>
            )}
            {featured === true && (
              <button className="py-1.5 px-5 bg-red-900 text-white">
                Featured
              </button>
            )}
          </div>

          <div className="overlay flex items-center justify-center gap-2 absolute bottom-[-100px] left-0 right-0 my-5  transition-all duration-500">
            <button
              className="primary-btn"
              style={{ padding: "8px 13px" }}
              onClick={handleQuickViewBtn}
            >
              Quick View
            </button>
            <button
              className="primary-btn"
              style={{ padding: "8px 13px" }}
              onClick={addItemToCart}
            >
              <IoCart size={23} />
            </button>
            <button
              className="primary-btn"
              style={{ padding: "8px 13px" }}
              onClick={addItemToFavourites}
            >
              <IoMdHeart
                size={23}
                color={favourites.some((item) => item.id === id) ? "red" : ""}
              />
            </button>
          </div>
        </div>

        <div className="product-datails flex flex-col items-center bg-white pt-6">
          <NavLink to={`/product-details/${id}`}>
            <BodyOne>{title}</BodyOne>
          </NavLink>

          <div className="flex items-center gap-2 -mt-2 mb-0">
            {renderRatingStars(rating)}
          </div>

          {price.slice(0, 1).map((priceItem, index) => (
            <div className="flex items-center gap-3" key={index}>
              <BodyOne className={"line-through"}>${priceItem.value}</BodyOne>

              <BodyOne className={"text-primary-green"}>
                $
                {(priceItem.value - (priceItem.value * discount) / 100).toFixed(
                  2
                )}
              </BodyOne>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
