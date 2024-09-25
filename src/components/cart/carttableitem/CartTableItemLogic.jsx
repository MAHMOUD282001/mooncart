import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeItemFromCart,
  removeProductWithItsCountFromCart,
} from "../../../store/slice/cartSlice";
import { toast } from "react-toastify";

function CartTableItemLogic(item) {
  let dispatch = useDispatch();

  const removeProductFromCart = () => {
    dispatch(removeProductWithItsCountFromCart(item.id));
    toast.success("Product Removed From Cart");
  };

  const incrementCartItem = () => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        images: item.images,
      })
    );
  };

  const decrementCartItem = () => {
    dispatch(removeItemFromCart(item.id));
  };

  return [removeProductFromCart, incrementCartItem, decrementCartItem];
}

export default CartTableItemLogic;
