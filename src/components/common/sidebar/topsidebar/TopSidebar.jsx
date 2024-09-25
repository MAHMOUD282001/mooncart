import React from "react";
import { cartTotalQuantity } from "../../../../store/slice/cartSlice";
import { useSelector } from "react-redux";
import { favouritesItems } from "../../../../store/slice/favouriteSlice";

function TopSidebar({ handleTabClick, activeTab }) {
  const totalQuantity = useSelector(cartTotalQuantity);
  
  const allFavouriteItems = useSelector(favouritesItems);

  return (
    <div className="flex items-center justify-between relative">
      <button
        className={`flex items-center justify-center gap-2 font-medium ${
          activeTab === "cart" ? "active" : ""
        }`}
        onClick={() => handleTabClick("cart")}
      >
        Shopping Cart
        <div className="bg-primary w-[18px] h-[18px] rounded-full flex items-start justify-center text-[12px] leading-[19px] text-white">
          {totalQuantity}
        </div>
      </button>

      <button
        className={`flex items-center justify-center gap-2 font-medium ${
          activeTab === "wishlist" ? "active" : ""
        }`}
        onClick={() => handleTabClick("wishlist")}
      >
        Favourits
        <div className="bg-primary w-[18px] h-[18px] rounded-full flex items-start justify-center text-[12px] leading-[19px] text-white">
          {allFavouriteItems.length}
        </div>
      </button>

      <div className="line-container absolute bottom-[-10px] left-0 w-full h-[2px] bg-gray-100">
        <div
          className={`line line-cart ${activeTab === "cart" ? "active" : ""}`}
        ></div>

        <div
          className={`line line-wishlist ${
            activeTab === "wishlist" ? "active" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}

export default TopSidebar;
