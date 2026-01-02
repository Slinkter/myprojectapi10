import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { addToCart, removeFromCart } from "@/entities/cart/model/cartSlice";

/**
 * @description Button feature to toggle a product in the cart (Add/Remove).
 * @param {object} props
 * @param {object} props.product - The product to toggle.
 * @returns {JSX.Element} The Add to Cart / Remove button.
 */
export const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector((state) => state.cart);
  const isProductInCart = cartItems.some((item) => item.id === product?.id);

  const handleToggleCart = (e) => {
    e.stopPropagation();
    if (isProductInCart) {
      dispatch(removeFromCart(product?.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <button
      onClick={handleToggleCart}
      className={`
                relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2
                ${
                  isProductInCart
                    ? "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 hover:text-red-700 focus:ring-red-500"
                    : "bg-gray-900 text-white shadow-md hover:bg-gray-800 hover:shadow-lg focus:ring-gray-900 transform active:scale-95"
                }
            `}
    >
      {isProductInCart ? "Remove" : "Add to Cart"}
    </button>
  );
};

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
