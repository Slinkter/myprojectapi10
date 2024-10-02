import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className=" flex flex-col   justify-center items-center h-auto md:max-w-6xl mx-auto">
                <Link to={"/"}>
                    <div className="pt-4 mb-2  md:ml-5 text-center">
                        <h1 className="text-red-900  font-bold text-xl  sm:text-2xl md:text-3xl cursor-pointer tracking-wide mb-2">
                            SHOPPING CART
                        </h1>
                        <span className="text-red-900">
                            React + Redux + fakestore Api + Tailwind CSS
                        </span>
                    </div>
                </Link>
                <ul className="  h-10 flex flex-wrap list-none items-center space-x-6 text-gray-800 font-semibold">
                    <Link to={"/myprojectapi10/"}>
                        <li className="cursor-pointer list-none">Home</li>
                    </Link>
                    <Link to={"/myprojectapi10/cart"}>
                        <li className="cursor-pointer list-none">Cart</li>
                    </Link>
                </ul>
            </nav>
        </>
    );
};

export default Header;
