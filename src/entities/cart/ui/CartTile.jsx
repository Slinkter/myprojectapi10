import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "@/entities/cart/model/cartSlice";
import PropTypes from "prop-types";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { formatPrice } from "@/shared/lib/formatters";
import { cn } from "@/shared/lib/cn";

/**
 * @component CartTile
 * @description A component that displays a single item in the shopping cart.
 * @param {object} props - The props for the component.
 * @param {import('../model/cartSlice').CartItem} props.cartItem - The cart item object to display.
 * @returns {JSX.Element} The JSX for the cart tile.
 */
export function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  const { product, quantity } = cartItem;

  const handleRemove = useCallback(() => {
    dispatch(removeFromCart(product.id));
  }, [dispatch, product.id]);

  const handleIncrease = useCallback(() => {
    dispatch(updateQuantity({ id: product.id, quantity: quantity + 1 }));
  }, [dispatch, product.id, quantity]);

  const handleDecrease = useCallback(() => {
    dispatch(updateQuantity({ id: product.id, quantity: quantity - 1 }));
  }, [dispatch, product.id, quantity]);

  return (
    <article
      className={cn(
        "group flex flex-col items-center gap-6 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-indigo-100 hover:shadow-md sm:flex-row"
      )}
    >
      <div
        className={cn(
          "flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-lg border border-gray-50 bg-gray-50 p-3 sm:h-32 sm:w-32"
        )}
      >
        <img
          src={product.image}
          alt={product.title}
          className={cn(
            "h-full w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
          )}
        />
      </div>

      <div
        className={cn(
          "flex flex-grow flex-col items-center space-y-2 text-center sm:items-start sm:text-left"
        )}
      >
        <h1
          className={cn(
            "line-clamp-1 text-lg font-bold text-gray-800 transition-colors group-hover:text-indigo-600"
          )}
        >
          {product.title}
        </h1>
        <p className={cn("rounded-md bg-gray-100 px-2 py-1 text-sm capitalize text-gray-500")}>
          Categoría: {product.category || "General"}
        </p>
        <p className={cn("mt-2 text-xl font-bold text-gray-900")}>{formatPrice(product.price)}</p>
      </div>

      <div className={cn("mt-4 flex items-center gap-4 sm:mt-0")}>
        <div className={cn("flex items-center overflow-hidden rounded-lg border border-gray-200")}>
          <button
            onClick={handleDecrease}
            className={cn(
              "p-2 text-gray-500 transition-colors hover:bg-gray-100 focus-visible:outline-none"
            )}
            aria-label="Disminuir cantidad"
          >
            <FaMinus className="text-xs" />
          </button>
          <span className={cn("px-4 py-2 text-sm font-semibold text-gray-800")}>{quantity}</span>
          <button
            onClick={handleIncrease}
            className={cn(
              "p-2 text-gray-500 transition-colors hover:bg-gray-100 focus-visible:outline-none"
            )}
            aria-label="Aumentar cantidad"
          >
            <FaPlus className="text-xs" />
          </button>
        </div>
        <button
          onClick={handleRemove}
          className={cn(
            "rounded-full p-3 text-gray-400 transition-all duration-300 hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          )}
          aria-label="Eliminar artículo"
          title="Eliminar del carrito"
        >
          <FaTrash className="text-lg" />
        </button>
      </div>
    </article>
  );
}

CartTile.propTypes = {
  cartItem: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartTile;
