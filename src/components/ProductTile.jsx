import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";
import PropTypes from "prop-types";

const ProductTile = ({ product }) => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    function handleAddToCart() {
        dispatch(addToCart(product));
    }

    function handleRemoveFromCart() {
        dispatch(removeFromCart(product?.id));
    }

    return (
        <>
            <div className="cardProduct">
                <div className="h-[160px]">
                    <img
                        className=" object-container h-full w-full"
                        src={product?.image}
                        alt={product?.title}
                    />
                </div>
                <div>
                    <h1 className="w-56 text-center px-2 mb-4 truncate mt-3 text-gray-700 font-bold text-lg">
                        {product?.title}
                    </h1>

                    <div className="flex flex-col bg-gray-100 justify-center items-center w-full">
                        <h1 className=" text-gray-700  ">
                            $ {product?.price.toFixed(2)}
                        </h1>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full my-2">
                    <button
                        onClick={
                            cart.some((item) => item.id === product?.id)
                                ? handleRemoveFromCart
                                : handleAddToCart
                        }
                        className={
                            cart.some((item) => item.id === product.id)
                                ? "bg-red-600 w-full md:w-3/4 text-white border-2 rounded-lg font-bold p-4"
                                : "bg-gray-700 w-full md:w-3/4 text-white border-2 rounded-lg font-bold p-4"
                        }
                    >
                        {cart.some((item) => item.id === product?.id)
                            ? "Remove "
                            : "Add to cart"}
                    </button>
                </div>
            </div>
        </>
    );
};

ProductTile.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
    }).isRequired,
};

export default ProductTile;
