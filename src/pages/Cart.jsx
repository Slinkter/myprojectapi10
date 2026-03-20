import { useSelector } from "react-redux";
import { selectCartItems } from "@/entities/cart/model/cartSlice";
import { CartTile } from "@/entities/cart/ui/CartTile";
import { CartSummary } from "@/widgets/CartSummary/CartSummary";
import { StateBoundary } from "@/shared/ui/StateBoundary";
import { cn } from "@/shared/lib/cn";

/**
 * @page Cart
 * @description The Cart page, acting as a container component.
 * @returns {JSX.Element} The JSX for the cart page.
 */
export default function Cart() {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className={cn("mx-auto min-h-screen max-w-7xl px-4 py-12 sm:px-6 lg:px-8")}>
      <StateBoundary
        isLoading={false}
        hasError={false}
        isEmpty={!cartItems || cartItems.length === 0}
        emptyMessage="Tu carrito está vacío"
      >
        <div className={cn("flex flex-col gap-12 lg:flex-row")}>
          {/* Summary Column */}
          <div className={cn("h-fit lg:order-2 lg:w-1/3")}>
            <CartSummary />
          </div>

          {/* Cart Items Column */}
          <div className={cn("flex flex-col gap-6 lg:order-1 lg:w-2/3")}>
            <h1 className={cn("mb-2 text-2xl font-bold text-gray-900")}>Carrito de Compras</h1>
            {cartItems.map((item, index) => (
              <div
                key={item.product.id}
                className={cn("animate-fade-in-up")}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CartTile cartItem={item} />
              </div>
            ))}
          </div>
        </div>
      </StateBoundary>
    </div>
  );
}
