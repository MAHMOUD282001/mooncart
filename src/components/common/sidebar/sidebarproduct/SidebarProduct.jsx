import React from "react";
import { BodyOne } from "../../CustomComponents";
import { IoCloseOutline } from "react-icons/io5";
import { removeProductWithItsCountFromCart } from "../../../../store/slice/cartSlice";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../../store/slice/favouriteSlice";
import { toast } from "react-toastify";

function SidebarProduct({ id, name, quantity, price, images, isFavourite }) {
  let dispatch = useDispatch();

  const removeProduct = (cat) => {
    if (cat === "cart") {
      dispatch(removeProductWithItsCountFromCart(id));
      toast.success("Product Removed From Cart");
    } else if (cat === "wishlist") {
      dispatch(removeFromCart(id));
      toast.success("Product Removed From Favourite");
    }
  };

  return (
    <>
      <div className="mt-5 border-b-2 border-gray-200 pb-5">
        <div className="flex items-center justify-between">
          <div className="w-20 h-20">
            <img
              src={images[0].image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="details w-1/2">
            <BodyOne>{name}</BodyOne>
            <p className="text-primary-green">
              {isFavourite
                ? `$${price?.toFixed(2)}`
                : `${quantity} X $${price?.toFixed(2)}`}
            </p>
          </div>

          <button
            className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-full text-white"
            onClick={
              isFavourite
                ? () => removeProduct("wishlist")
                : () => removeProduct("cart")
            }
          >
            <IoCloseOutline size={25} />
          </button>
        </div>
      </div>
    </>
  );
}

export default SidebarProduct;
