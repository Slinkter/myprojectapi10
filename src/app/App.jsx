import { useEffect } from "react";
import { Header } from "@/widgets/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
import Projects from "@/pages/Projects";
import ReclamationBook from "@/pages/ReclamationBook";
import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/lib/cn";

/**
 * @component App
 * @description Main application component with routing.
 * Integrates Header and global layout.
 * @returns {JSX.Element} The rendered App.
 */
export default function App() {
  useEffect(() => {
    window.document.title = "Proyecto 10 - Luis j Cueva - Premium V.1.0";
  }, []);

  return (
    <div
      className={cn(
        "min-h-screen bg-bg-page font-sans text-text-primary transition-colors duration-500 selection:bg-primary-50 selection:text-primary"
      )}
    >
      <Header />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path={ROUTES.RECLAMATION_BOOK} element={<ReclamationBook />} />
        </Routes>
      </main>
    </div>
  );
}
