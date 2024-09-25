import React from "react";
import { favouritesItems } from "../../../../store/slice/favouriteSlice";
import { useSelector } from "react-redux";
import SidebarProduct from "../sidebarproduct/SidebarProduct";
import emptyImg from "../../../../assets/common/empty cart.svg";
import { CustomNavLink } from "../../CustomComponents";

function SidebarFavouriteItems() {
  const allFavouriteItems = useSelector(favouritesItems);

  return (
    <>
      {allFavouriteItems?.length !== 0 ? (
        <div className="cart-products mt-5 overflow-y-scroll h-[58vh]">
          {allFavouriteItems?.map((item) => (
            <SidebarProduct
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              images={item.images}
              isFavourite={true}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <img src={emptyImg} alt="empty Favourite" />
          <h2 className="text-xl font-semibold mt-5">
            Your Favourite is empty
          </h2>
          <CustomNavLink href={"/shop"} className="primary-btn w-full mt-5">
            Shop Now
          </CustomNavLink>
        </div>
      )}
    </>
  );
}

export default SidebarFavouriteItems;
