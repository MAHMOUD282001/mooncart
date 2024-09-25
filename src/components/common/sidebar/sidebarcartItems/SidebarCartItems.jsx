import React from "react";
import SidebarProduct from "../sidebarproduct/SidebarProduct";
import { cartItems, totalPrice } from "../../../../store/slice/cartSlice";
import emptyImg from "../../../../assets/common/empty cart.svg";
import { useSelector } from "react-redux";
import { CustomNavLink, Title } from "../../CustomComponents";
import CheckoutForm from "../../../cart/checkoutform/CheckoutForm";

function SidebarCartItems() {
  const allCartItems = useSelector(cartItems);
  const cartTotalPrice = useSelector(totalPrice);

  return (
    <>
      {allCartItems?.length !== 0 ? (
        <>
          <div className="cart-products mt-5 overflow-y-scroll h-[58vh]">
            {allCartItems?.map((item) => (
              <SidebarProduct
                key={item.id}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                images={item.images}
              />
            ))}
          </div>

          <div className="flex items-center justify-between mt-10">
            <Title level={5}>Sub Total:</Title>
            <Title level={5}>{cartTotalPrice.toFixed(2)}</Title>
          </div>

          <CheckoutForm total={cartTotalPrice} />

          <div className="mt-3">
            <CustomNavLink href={"/cart"} className="primary-btn w-full">
              View Cart
            </CustomNavLink>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <img src={emptyImg} alt="empty cart" />
          <h2 className="text-xl font-semibold mt-5">Your cart is empty</h2>
          <CustomNavLink href={"/shop"} className="primary-btn w-full mt-5">
            Shop Now
          </CustomNavLink>
        </div>
      )}
    </>
  );
}

export default SidebarCartItems;
