import React from "react";
import { useSelector } from "react-redux";
import { cartTotalQuantity } from "../../../../store/slice/cartSlice";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { favouritesItems } from "../../../../store/slice/favouriteSlice";

function CartFavouriteIcons({ handleModal, isScrolled, isHomePage }) {
  const totalQuantity = useSelector(cartTotalQuantity);

  const allFavouriteItems = useSelector(favouritesItems);

  return (
    <>
      <div
        className="flex items-center gap-6 cursor-pointer"
        onClick={() => handleModal(true)}
      >
        <div className="relative">
          <IoHeartOutline
            size={23}
            className={`
  ${
    isScrolled
      ? "text-primary"
      : isHomePage
      ? "lg:text-white text-gray-600"
      : "text-primary"
  }   `}
          />

          <div className="bg-primary-green absolute -right-1.5 -top-2 w-[18px] h-[18px] rounded-full flex items-start justify-center text-[12px] leading-[19px] text-white">
            {allFavouriteItems.length}
          </div>
        </div>

        <div className="relative">
          <IoCartOutline
            size={23}
            className={`
  ${
    isScrolled
      ? "text-primary"
      : isHomePage
      ? "lg:text-white text-gray-600"
      : "text-primary"
  }   `}
          />

          <div className="bg-primary-green absolute -right-1.5 -top-2 w-[18px] h-[18px] rounded-full flex items-start justify-center text-[12px] leading-[19px] text-white">
            {totalQuantity}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartFavouriteIcons;
