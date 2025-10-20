import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <header className="bg-surface-primary shadow-md sticky top-0 z-10 transition-shadow duration-300">
            <nav className="flex justify-between items-center h-14 sm:h-20 max-w-6xl mx-auto px-4">
                <Link to={"/"}>
                    <div className="ml-2 sm:ml-5">
                        <h1 className="text-primary font-bold text-base sm:text-xl cursor-pointer tracking-wide transition-colors duration-300">
                            SHOPPING CART
                        </h1>
                    </div>
                </Link>
                <div className="flex items-center space-x-4 sm:space-x-6 text-primary font-semibold">
                    <Link to={"/"}>
                        <span className="cursor-pointer hover:text-primary transition-colors duration-300 focus:outline-none focus:underline">
                            Home
                        </span>
                    </Link>
                    <Link to={"/cart"} className="relative">
                        <FaShoppingCart className="text-2xl cursor-pointer hover:text-primary transition-colors duration-300" />
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-destructive text-white text-xs w-5 h-5 flex justify-center items-center rounded-full transition-all duration-300">
                                {cart.length}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
