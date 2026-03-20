import { useSelector } from "react-redux";
import { selectCartTotal, selectCartItemCount } from "@/entities/cart/model/cartSlice";
import { formatPrice } from "@/shared/lib/formatters";
import { cn } from "@/shared/lib/cn";

/**
 * @component CartSummary
 * @description Widget that displays the summary of the shopping cart (Total items, Total price, Checkout).
 * @returns {JSX.Element|null} The JSX for the cart summary.
 */
export function CartSummary() {
  const totalCart = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartItemCount);

  if (itemCount === 0) return null;

  return (
    <div
      className={cn(
        "sticky top-24 animate-fade-in-up rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
      )}
    >
      <h2 className={cn("mb-6 border-b border-gray-100 pb-4 text-lg font-bold text-gray-900")}>
        Resumen del pedido
      </h2>

      <div className={cn("space-y-4")}>
        <div className={cn("flex items-center justify-between")}>
          <p className={cn("text-sm text-gray-500")}>Subtotal ({itemCount} productos)</p>
          <p className={cn("font-semibold text-gray-900")}>{formatPrice(totalCart)}</p>
        </div>
        <div className={cn("flex items-center justify-between")}>
          <p className={cn("text-sm text-gray-500")}>Envío</p>
          <p className={cn("text-sm font-medium text-green-600")}>Gratis</p>
        </div>
        <div className={cn("flex items-center justify-between")}>
          <p className={cn("text-sm text-gray-500")}>Impuestos</p>
          <p className={cn("text-sm text-gray-500")}>Calculados en el pago</p>
        </div>
      </div>

      <div className={cn("mt-6 flex items-center justify-between border-t border-gray-100 pt-6")}>
        <p className={cn("text-base font-bold text-gray-900")}>Total</p>
        <p className={cn("text-2xl font-extrabold text-indigo-600")}>{formatPrice(totalCart)}</p>
      </div>

      <button
        className={cn(
          "mt-8 w-full rounded-xl bg-indigo-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:scale-95"
        )}
      >
        Proceder al pago
      </button>

      <p className={cn("mt-4 text-center text-xs text-gray-400")}>
        Pago Seguro - 100% Satisfacción Garantizada
      </p>
    </div>
  );
}

export default CartSummary;
