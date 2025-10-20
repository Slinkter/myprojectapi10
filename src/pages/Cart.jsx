import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/CartTile";
import { formatPrice } from "../utils/format";

const Cart = () => {
    const cart = useSelector((state) => state.cart);

    const totalCart = useMemo(() => {
        return cart.reduce((acc, curr) => acc + curr.price, 0);
    }, [cart]);

    return (
        <div className="max-w-6xl mx-auto p-4 min-h-[80vh]">
            {cart && cart.length ? (
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Summary Column (appears first on mobile) */}
                    <div className="lg:w-1/3 lg:order-2">
                        <div className="bg-base-100 rounded-lg shadow-md p-6 sticky top-24">
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
                            <button className="w-full mt-6 bg-brand text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand">
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
                        <button className="bg-brand text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand">
                            Shop Now
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
