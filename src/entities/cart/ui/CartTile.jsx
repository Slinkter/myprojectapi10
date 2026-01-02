import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/entities/cart/model/cartSlice";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import { formatPrice } from "@/shared/lib/priceFormatter";

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
    <div className="flex flex-col sm:flex-row items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 gap-6 transition-all duration-300 hover:shadow-md hover:border-indigo-100 group">
      <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-gray-50 rounded-lg p-3 flex items-center justify-center border border-gray-50">
        <img
          src={cartItem.image}
          alt={cartItem.title}
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex-grow flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
        <h1 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-indigo-600 transition-colors">
          {cartItem?.title}
        </h1>
        <p className="text-sm text-gray-500 capitalize px-2 py-1 bg-gray-100 rounded-md">
          Category: {cartItem?.category || "General"}
        </p>
        <p className="text-xl font-bold text-gray-900 mt-2">
          {formatPrice(cartItem?.price)}
        </p>
      </div>

      <button
        onClick={handleRemoveFromCart}
        className="p-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        aria-label="Remove item"
        title="Remove from cart"
      >
        <FaTrash className="text-lg" />
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
    category: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CartTile;
