import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";

const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div>
      <div className="flex items-center p-5 justify-center bg-red-500  mt-2 mb-2 rounded-xl">
        <div className="grid grid-cols-3 justify-center items-center ">
          <img
            src={cartItem.image}
            alt={cartItem.title}
            className="h-28 rounded-lg w-28  mx-auto"
          />
          <div className=" ml-0 self-center  space-y-5">
            <h1 className="text-xl text-white font-bold truncate">
              {cartItem?.title}
            </h1>
            <p className="text-white font-extrabold "> {cartItem?.price}</p>
          </div>
          <div>
            <button
              onClick={handleRemoveFromCart}
              className="bg-red-950 text-white border-2  rounded-lg  font-bold p-4"
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTile;
