import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

/**
 * @description The header component for the application.
 * @returns {JSX.Element} The JSX for the header.
 */
const Header = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <header className="bg-surface-primary shadow-md sticky top-0 z-10 transition-shadow duration-300">
            <nav className="header-nav">
                <Link to={"/"}>
                    <div className="ml-2 sm:ml-5">
                        <h1 className="header-title">
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
                            <span className="cart-badge">
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
