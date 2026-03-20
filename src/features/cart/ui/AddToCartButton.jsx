import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { addToCart, removeFromCart, selectIsInCart } from "@/entities/cart/model/cartSlice";
import { cn } from "@/shared/lib/cn";

/**
 * @component AddToCartButton
 * @description Button feature to toggle a product in the cart (Add/Remove).
 * @param {object} props
 * @param {import('@/entities/product/model/productSlice').Product} props.product - The product to toggle.
 * @returns {JSX.Element} The Add to Cart / Remove button.
 * @example
 * <AddToCartButton product={{ id: 1, title: 'Product', price: 100 }} />
 */
export function AddToCartButton({ product }) {
  const dispatch = useDispatch();
  const isProductInCart = useSelector(selectIsInCart(product.id));

  const handleToggleCart = (e) => {
    e.stopPropagation();
    if (isProductInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <button
      onClick={handleToggleCart}
      className={cn(
        "relative rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95",
        isProductInCart
          ? "border border-green-200 bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700 focus-visible:ring-green-500"
          : "bg-indigo-600 text-white shadow-md hover:bg-indigo-700 hover:shadow-lg focus-visible:ring-indigo-500"
      )}
    >
      {isProductInCart ? "En el carrito" : "Añadir al carrito"}
    </button>
  );
}

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default AddToCartButton;
