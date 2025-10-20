import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import { formatPrice } from "../utils/format";

const CartTile = ({ cartItem }) => {
    const dispatch = useDispatch();

    const handleRemoveFromCart = useCallback(() => {
        dispatch(removeFromCart(cartItem.id));
    }, [dispatch, cartItem.id]);

    return (
        <div className="flex flex-col sm:flex-row items-center p-4 bg-base-100 rounded-lg shadow-md gap-4 w-full transition-shadow duration-300 hover:shadow-lg hover:-translate-y-1 transform-gpu">
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-white rounded-lg flex items-center justify-center">
                <img
                    src={cartItem.image}
                    alt={cartItem.title}
                    className="w-full h-full object-contain p-2 transition-all duration-300 ease-in-out group-hover:scale-105"
                />
            </div>
            <div className="flex-grow flex flex-col text-center sm:text-left">
                <h1 className="text-base font-bold text-text-main truncate">
                    {cartItem?.title}
                </h1>
                <p className="text-lg font-bold text-brand mt-1">
                    $ {formatPrice(cartItem?.price)}
                </p>
            </div>
            <button
                onClick={handleRemoveFromCart}
                className="text-danger hover:text-red-700 transition-colors duration-300 ease-in-out p-2 rounded-full mt-2 sm:mt-0 focus:outline-none focus:ring-2 focus:ring-danger"
                aria-label="Remove item"
            >
                <FaTrash className="text-xl" />
            </button>
        </div>
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
