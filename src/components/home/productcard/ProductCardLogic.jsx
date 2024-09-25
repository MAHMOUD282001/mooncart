import React, { useState } from "react";
import { useShowModal } from "../../../context/ShowProductDataContext";
import {
  addToFavourites,
  favouritesItems,
} from "../../../store/slice/favouriteSlice";
import { addToCart } from "../../../store/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function ProductCardLogic(
  id,
  title,
  description,
  images,
  price,
  discount,
  rating
) {
  const {
    isModalOpen,
    handleModal,
    modalData,
    getModalData,
    renderRatingStars,
  } = useShowModal();

  const handleQuickViewBtn = () => {
    getModalData(title, description, images, price, discount, rating);
    handleModal("open");
  };

  let disatch = useDispatch();

  let discountedPrice = (
    price[0].value -
    (price[0].value * discount) / 100
  ).toFixed(2);

  const addItemToCart = () => {
    disatch(
      addToCart({
        id,
        title,
        price: discountedPrice,
        images,
      })
    );
    toast.success("Product Added To Cart");
  };

  const addItemToFavourites = () => {
    disatch(
      addToFavourites({
        id,
        title,
        price: discountedPrice,
        images,
      })
    );
    
    toast.success("Product Added To Favourites");
  };

  let favourites = useSelector(favouritesItems);

  return [
    handleQuickViewBtn,
    renderRatingStars,
    addItemToCart,
    addItemToFavourites,
    favourites,
  ];
}

export default ProductCardLogic;
