import React, { useEffect, useState } from "react";
import { useShowModal } from "../../../context/ShowProductDataContext";
import { addToFavourites } from "../../../store/slice/favouriteSlice";
import { addToCart } from "../../../store/slice/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function ProductDetailsContentLogic(
  id,
  discount,
  title,
  description,
  color,
  rating,
  price,
  images
) {
  let [selectedColor, setSelectedColor] = useState(color[0].value);
  let [selectedPrice, setSelectedPrice] = useState(
    price.find((priceItem) => priceItem.color == color[0].value)
  );

  let handleChooseColor = (color) => {
    setSelectedColor(color);
    const newSelectedPrice = price.find(
      (priceItem) => priceItem.color == color
    );

    setSelectedPrice(newSelectedPrice);
  };

  const {
    isModalOpen,
    handleModal,
    modalData,
    getModalData,
    renderRatingStars,
  } = useShowModal();

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

  return [
    selectedColor,
    selectedPrice,
    handleChooseColor,
    renderRatingStars,
    addItemToCart,
    addItemToFavourites,
  ];
}

export default ProductDetailsContentLogic;
