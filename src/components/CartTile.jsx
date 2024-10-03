import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";
import PropTypes from "prop-types";
const CartTile = ({ cartItem }) => {
    const dispatch = useDispatch();

    function handleRemoveFromCart() {
        dispatch(removeFromCart(cartItem.id));
    }

    console.log(cartItem);

    return (
        <>
            <div className="flex items-center p-5 justify-center border-2 mt-2 mb-2 rounded-xl w-full">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center items-center ">
                    <div className="h-[160px]">
                        <img
                            src={cartItem.image}
                            alt={cartItem.title}
                            className="h-28 rounded-lg w-28  mx-auto"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center ">
                        <h1 className="text-xl font-bold  ">
                            {cartItem?.title}
                        </h1>

                        <p className="text-red-900 font-bold">
                            $ {cartItem?.price}
                        </p>
                    </div>
                    <button
                        onClick={handleRemoveFromCart}
                        className="w-full bg-red-600 text-white border-2  rounded-lg  font-bold p-4"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </>
    );
};

CartTile.propTypes = {
    cartItem: PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
    }).isRequired,
};

export default CartTile;
