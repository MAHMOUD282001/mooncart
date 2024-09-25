import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../store/slice/cartSlice";
import StripeCheckout from "react-stripe-checkout";

function CheckoutForm({ total }) {
  let dispatch = useDispatch();

  let handleToken = (token) => {
    dispatch(clearCart());
  };

  return (
    <>
      <StripeCheckout
        token={handleToken}
        stripeKey="pk_test_51MVuJAKO1vEm3tFYd53jewAueCIbt7x6AigXUJK8csA0wlkbvj524a2Q4nKRgsV6wGeMhQuw0j8MouNjK25eEPgU00KWKux1ms"
        name="Mooncart Ecommerce"
        amount={total * 100}
        email="mahmoud.khallaf2001@gmail.com"
        description="Payment Using Stripe"
      >
        <button className="secondary-btn w-full bg-gray-400 my-3">
          Pay ${total}
        </button>
      </StripeCheckout>
    </>
  );
}

export default CheckoutForm;
