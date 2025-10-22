import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/CartTile";
import { formatPrice } from "../utils/format";

/**
 * @description The cart page component.
 * @returns {JSX.Element} The JSX for the cart page.
 */
const Cart = () => {
    const cart = useSelector((state) => state.cart);

    const totalCart = useMemo(() => {
        return cart.reduce((acc, curr) => acc + curr.price, 0);
    }, [cart]);

    return (
        <div className="page-container">
            {cart && cart.length ? (
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Summary Column (appears first on mobile) */}
                    <div className="lg:w-1/3 lg:order-2">
                        <div className="cart-summary">
                            <h2 className="text-lg font-bold mb-4 border-b pb-2">
                                Order Summary
                            </h2>
                            <div className="flex justify-between items-center mb-2">
                                <p className="text-muted">Total Items</p>
                                <p className="font-semibold">{cart.length}</p>
                            </div>
                            <div className="flex justify-between items-center font-bold text-xl mt-4 pt-4 border-t">
                                <p>Total Amount</p>
                                <p className="text-brand transition-colors duration-300">
                                    {formatPrice(totalCart)}
                                </p>
                            </div>
                            <button className="btn btn-brand w-full mt-6">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>

                    {/* Cart Items Column (appears second on mobile) */}
                    <div className="lg:w-2/3 lg:order-1 flex flex-col gap-4">
                        {cart.map((item) => (
                            <CartTile key={item.id} cartItem={item} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="min-h-[80vh] w-full flex flex-col items-center justify-center text-center">
                    <h1 className="text-2xl font-bold mb-2">
                        Your cart is empty!
                    </h1>
                    <p className="text-muted mb-6">
                        Looks like you haven&apos;t added anything to your cart
                        yet.
                    </p>
                    <Link to={"/"}>
                        <button className="btn btn-brand">
                            Shop Now
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
