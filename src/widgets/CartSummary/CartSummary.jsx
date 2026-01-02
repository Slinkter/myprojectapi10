import { useSelector } from "react-redux";
import { selectCartTotal } from "@/entities/cart/model/cartSlice";
import { formatPrice } from "@/shared/lib/priceFormatter";

/**
 * @description Widget that displays the summary of the shopping cart (Total items, Total price, Checkout).
 * @returns {JSX.Element} The JSX for the cart summary.
 */
const CartSummary = () => {
  const { items: cartItems } = useSelector((state) => state.cart);
  const totalCart = useSelector(selectCartTotal);

  if (!cartItems || cartItems.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
      <h2 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            Subtotal ({cartItems.length} items)
          </p>
          <p className="font-semibold text-gray-900">
            {formatPrice(totalCart)}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">Shipping</p>
          <p className="text-green-600 text-sm font-medium">Free</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">Tax</p>
          <p className="text-gray-500 text-sm">Calculated at checkout</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
        <p className="text-base font-bold text-gray-900">Total</p>
        <p className="text-2xl font-extrabold text-indigo-600">
          {formatPrice(totalCart)}
        </p>
      </div>

      <button className="w-full mt-8 bg-indigo-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Proceed to Checkout
      </button>

      <p className="text-xs text-center text-gray-400 mt-4">
        Secure Checkout - 100% Satisfaction Guaranteed
      </p>
    </div>
  );
};

export default CartSummary;
