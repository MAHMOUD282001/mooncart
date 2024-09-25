import React from "react";
import { Title } from "../../common/CustomComponents";
import CheckoutForm from "../checkoutform/CheckoutForm";

function CheckoutDetails({ cartTotalPrice }) {
  return (
    <div className="w-full xl:w-1/3">
      <div className="bg-gray-50 p-5 rounded">
        <Title level={5} className={"py-3 border-b"}>
          Cart Totals
        </Title>
        <div className="flex items-center justify-between border-b py-3">
          <Title level={5}>Subtotal</Title>
          <p className="text-gray-600 text-lg">${cartTotalPrice.toFixed(2)}</p>
        </div>

        <div className="flex items-center justify-between gap-10 border-b py-3">
          <Title level={5}>Shipping</Title>
          <p className="text-gray-600 text-sm">
            Enter Your Address To View Shipping Options
          </p>
        </div>

        <div className="flex items-center justify-between py-3">
          <Title level={5}>Total</Title>
          <p className="text-gray-600 text-lg">${cartTotalPrice.toFixed(2)}</p>
        </div>

        <div className="mt-3">
          <CheckoutForm total={cartTotalPrice} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutDetails;
