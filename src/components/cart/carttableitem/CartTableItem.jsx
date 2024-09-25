import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import CartTableItemLogic from "./CartTableItemLogic";

function CartTableItem({ item }) {
  
  let [removeProductFromCart, incrementCartItem, decrementCartItem] = CartTableItemLogic(item);

  return (
    <tr key={item.id} className="text-center border-b hover:bg-gray-50">
      <td className="px-6 py-5">
        <img src={item.images[0].image} alt="Product" className="w-20" />
      </td>
      <td className="px-16 py-5">
        <p>{item.name}</p>
      </td>
      <td className="px-6 py-5 text-primary-green text-lg">
        <p>${item.price.toFixed(2)}</p>
      </td>
      <td className="px-10 py-5">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 flex items-center justify-center bg-gray-100 text-primary border border-gray-300 cursor-pointer"
            onClick={incrementCartItem}
          >
            <BiPlus />
          </div>

          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 text-primary border border-gray-300 cursor-pointer">
            {item.quantity}
          </div>

          <div
            className="w-12 h-12 flex items-center justify-center bg-gray-100 text-primary border border-gray-300 cursor-pointer"
            onClick={decrementCartItem}
          >
            <BiMinus />
          </div>
        </div>
      </td>
      <td className="px-6 py-5 text-primary-green text-lg">
        <p>${item.totalPrice.toFixed(2)}</p>
      </td>

      <td>
        <button
          className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-full text-white"
          onClick={removeProductFromCart}
        >
          <IoCloseOutline size={25} />
        </button>
      </td>
    </tr>
  );
}

export default CartTableItem;
