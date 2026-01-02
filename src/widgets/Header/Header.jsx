import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

/**
 * @description The header component for the application.
 * @returns {JSX.Element} The JSX for the header.
 */
const Header = () => {
  const { items: cartItems } = useSelector((state) => state.cart);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <Link to={"/"} className="group">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-indigo-200 shadow-lg group-hover:scale-110 transition-transform duration-300">
              S
            </div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-indigo-600 transition-colors">
              STORE<span className="text-indigo-600">.APP</span>
            </h1>
          </div>
        </Link>

        {/* Navigation Actions */}
        <div className="flex items-center gap-8">
          <Link to={"/"}>
            <span className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors duration-200">
              Home
            </span>
          </Link>

          <Link to={"/cart"} className="relative group p-2">
            <div className="relative">
              <FaShoppingCart className="text-2xl text-gray-600 group-hover:text-indigo-600 transition-colors duration-300" />
              {cartItems.length > 0 && (
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full shadow-sm ring-2 ring-white transform group-hover:scale-110 transition-transform">
                  {cartItems.length}
                </span>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
