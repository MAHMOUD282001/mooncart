import React, { useEffect } from "react";
import cartImg from "../../assets/common/Frame.png";
import { CustomNavLink, Title } from "../../components/common/CustomComponents";
import {
  cartItems,
  totalPrice,
} from "../../store/slice/cartSlice";
import { useSelector } from "react-redux";
import CartTableItem from "../../components/cart/carttableitem/CartTableItem";
import CheckoutDetails from "../../components/cart/checkoutdetails/CheckoutDetails";
import emptyImg from "../../assets/common/empty cart.svg";

export const Cart = () => {
  // Get Data From Redux
  const allCartItems = useSelector(cartItems);
  const cartTotalPrice = useSelector(totalPrice);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mb-20">
      <div className="h-[50vh] relative">
        <img
          src={cartImg}
          alt="Cart Img"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <Title level={1}>Cart</Title>
        </div>
      </div>

      {allCartItems.length > 0 ? (
        <div className="container flex flex-col xl:flex-row items-center justify-between gap-10 my-20">
          <div className="w-full xl:w-2/3 overflow-x-auto table-container">
            <table className="text-sm">
              <thead className="text-primary bg-gray-50">
                <tr>
                  <th className="px-6 py-5">Thumbonail</th>
                  <th className="px-16 py-5">Product</th>
                  <th className="px-6 py-5">Price</th>
                  <th className="px-10 py-5">Quantity</th>
                  <th className="px-6 py-5">Subtotal</th>
                  <th className="px-6 py-5"></th>
                </tr>
              </thead>
              <tbody>
                {allCartItems.map((item) => (
                  <CartTableItem item={item} key={item.id} />
                ))}
              </tbody>
            </table>
          </div>

          <CheckoutDetails cartTotalPrice={cartTotalPrice} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full my-20">
          <img src={emptyImg} alt="empty cart" className="max-w-[300px]" />
          <h2 className="text-xl font-bold mt-5">Your cart is empty</h2>
          <CustomNavLink href={"/shop"} className="primary-btn mt-5">
            Shop Now
          </CustomNavLink>
        </div>
      )}
    </section>
  );
};
