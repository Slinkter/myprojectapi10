import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";
import PropTypes from "prop-types";
const CartTile = ({ cartItem }) => {
    //
    const dispatch = useDispatch();

    /* 
    1) useCallback: Reduce la recreación de funciones en cada renderizado, mejorando la eficiencia.
    2) React.memo: Evita renders innecesarios si las props no cambian, mejorando el rendimiento
    */

    // La función handleRemoveFromCart se envuelve en
    // useCallback para memorizarla y evitar su recreación en cada renderizado
    const handleRemoveFromCart = useCallback(() => {
        dispatch(removeFromCart(cartItem.id));
    }, [dispatch, cartItem.id]);

    console.log(cartItem);

    return (
        <>
            <div className="p-5 flex items-center  justify-center border-2 my-2 rounded-xl w-full hover:shadow-lg ">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center items-center ">
                    <div className="h-[160px] flex items-center  justify-center ">
                        <img
                            src={cartItem.image}
                            alt={cartItem.title}
                            className="h-28 rounded-lg w-28  mx-auto"
                        />
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold  ">
                            {cartItem?.title}
                        </h1>

                        <p className="text-red-900 font-bold">
                            $ {cartItem?.price}
                        </p>
                    </div>
                    <button
                        onClick={handleRemoveFromCart}
                        className="w-full bg-red-600 text-white border-2  rounded-lg  font-bold p-4 hover:bg-red-900"
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

export default React.memo(CartTile);
