import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import { formatPrice } from "../utils/format";

/**
 * @description A component that displays a single item in the shopping cart.
 * @param {{cartItem: object}} props - The props for the component.
 * @param {object} props.cartItem - The cart item object to display.
 * @returns {JSX.Element} The JSX for the cart tile.
 */
const CartTile = ({ cartItem }) => {
    const dispatch = useDispatch();

    const handleRemoveFromCart = useCallback(() => {
        dispatch(removeFromCart(cartItem.id));
    }, [dispatch, cartItem.id]);

    return (
        <div className="cart-tile">
            <div className="cart-tile-image-container">
                <img
                    src={cartItem.image}
                    alt={cartItem.title}
                    className="cart-tile-image"
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
                className="cart-tile-remove-button"
                aria-label="Remove item"
            >
                <FaTrash className="text-xl" />
            </button>
        </div>
    );
};

CartTile.propTypes = {
    /**
     * The cart item object to display.
     */
    cartItem: PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
    }).isRequired,
};

export default CartTile;
