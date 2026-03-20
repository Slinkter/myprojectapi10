import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaStore, FaBriefcase, FaBook } from "react-icons/fa";
import { ROUTES } from "@/shared/constants/routes";
import { selectCartItemCount } from "@/entities/cart/model/cartSlice";
import { cn } from "@/shared/lib/cn";

/**
 * @component Header
 * @description Header widget that provides navigation and cart monitoring.
 * Follows 'React Artifact Designer' & 'Tailwind Advanced UI' standards.
 * Implements semantic tokens and high-fidelity transitions.
 * @returns {JSX.Element} The rendered Header component.
 */
export function Header() {
  const cartCount = useSelector(selectCartItemCount);
  const location = useLocation();

  const navLinks = [
    { name: "Tienda", path: ROUTES.HOME, icon: <FaStore className="mr-2" /> },
    { name: "Proyectos", path: ROUTES.PROJECTS, icon: <FaBriefcase className="mr-2" /> },
    { name: "Reclamaciones", path: ROUTES.RECLAMATION_BOOK, icon: <FaBook className="mr-2" /> },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-[60] w-full animate-slide-in border-b border-border bg-surface-nav shadow-premium backdrop-blur-xl transition-all duration-300"
      )}
      role="banner"
    >
      <nav
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6"
        )}
        aria-label="Navegación principal"
      >
        {/* Logo Area */}
        <Link
          to={ROUTES.HOME}
          className={cn(
            "group flex items-center gap-2 rounded-lg p-1 outline-none focus-visible:ring-2 focus-visible:ring-primary sm:gap-3"
          )}
          aria-label="Ir al inicio"
        >
          <div
            className={cn(
              "relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-glass transition-all duration-300 group-hover:scale-105 sm:h-11 sm:w-11"
            )}
          >
            <FaStore className={cn("text-lg text-white sm:text-xl")} aria-hidden="true" />
            <div
              className={cn(
                "absolute inset-0 rounded-xl bg-white/20 opacity-0 transition-opacity group-hover:opacity-100"
              )}
            />
          </div>

          <div className={cn("flex flex-col")}>
            <span
              className={cn(
                "text-lg font-black uppercase leading-none tracking-tighter text-text-primary sm:text-xl"
              )}
            >
              Store<span className={cn("text-primary-500")}>.</span>API
            </span>
            <span
              className={cn(
                "mt-1 text-[8px] font-bold uppercase leading-none tracking-widest text-text-muted sm:text-[10px]"
              )}
            >
              Premium V.1.0
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className={cn("hidden items-center gap-2 md:flex")}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center rounded-full px-4 py-2 text-sm font-bold transition-all duration-200",
                  isActive
                    ? "bg-primary-50 text-primary"
                    : "text-text-secondary hover:bg-bg-subtle hover:text-primary"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Actions: Cart */}
        <div className={cn("flex items-center gap-2 sm:gap-4")}>
          <Link
            to={ROUTES.CART}
            className={cn(
              "group relative flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-bg-subtle transition-all duration-300 hover:border-primary/10 hover:bg-primary-50 sm:h-11 sm:w-11"
            )}
            aria-label={`Ver carrito con ${cartCount} productos`}
          >
            <FaShoppingCart
              className={cn(
                "text-base transition-colors duration-300 sm:text-lg",
                cartCount > 0 ? "text-primary" : "text-text-muted group-hover:text-primary"
              )}
            />

            {cartCount > 0 && (
              <span
                className={cn(
                  "absolute -right-1 -top-1 flex h-5 min-w-[20px] animate-pulse items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-white shadow-lg ring-2 ring-white"
                )}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
