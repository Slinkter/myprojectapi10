import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/CartTile";

const Cart = () => {
    const [totalCart, setTotalCart] = useState(0);
    const { cart } = useSelector((state) => state);

    useEffect(() => {
        setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    console.log(cart);
    console.log(totalCart);
    return (
        <div className="flex justify-center">
            {cart && cart.length ? (
                <>
                    <div className=" grid grid-cols-1  md:grid-cols-2 max-w-6xl ">
                        <div className=" flex flex-col justify-center items-center p-3 ">
                            {cart.map((item, idx) => (
                                <CartTile key={idx} cartItem={item} />
                            ))}
                        </div>
                        <div className=" border-red-600">
                            <div className="flex flex-col justify-center items-start p-5 space-y-5">
                                <h1 className="font-bold text-lg text-red-800">
                                    Your Cart Summary
                                </h1>
                                <p>
                                    <span className="text-gray-800  font-bold ">
                                        Total Item
                                    </span>
                                    <span> :{cart.length}</span>
                                </p>
                                <p>
                                    <span className="text-gray-800  font-bold ">
                                        Total Amount
                                    </span>
                                    <span>:{totalCart}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="min-h-[80vh] w-full mx-auto  max-w-6xl flex flex-col items-center justify-center">
                        <h1 className="text-gray-800 font-bold text-xl mb-2">
                            Your cart is empty
                        </h1>
                        <Link to={"/myprojectapi10/"}>
                            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4 shadow-lg">
                                Shop Now
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
