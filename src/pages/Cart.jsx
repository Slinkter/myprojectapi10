import { useSelector } from "react-redux";
import CartTile from "@/entities/cart/ui/CartTile";
import CartSummary from "@/widgets/CartSummary/CartSummary";
import EmptyState from "@/shared/ui/EmptyState";

/**
 * @description The Cart page, acting as a container component.
 * @returns {JSX.Element} The JSX for the cart page.
 */
const Cart = () => {
  const { items: cartItems } = useSelector((state) => state.cart);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      {cartItems && cartItems.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Summary Column (Right/Top on desktop, Bottom on mobile) */}
          <div className="lg:w-1/3 lg:order-2 h-fit">
            <CartSummary />
          </div>

          {/* Cart Items Column */}
          <div className="lg:w-2/3 lg:order-1 flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Shopping Cart
            </h1>
            {cartItems.map((item) => (
              <CartTile key={item.id} cartItem={item} />
            ))}
          </div>
        </div>
      ) : (
        <EmptyState
          title="Your cart is empty!"
          description="Looks like you haven't added anything to your cart yet. Explore our products and find something you love."
          actionLabel="Shop Now"
          to="/"
        />
      )}
    </div>
  );
};

export default Cart;
