import { useEffect } from "react";
import Header from "@/widgets/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
const App = () => {
  useEffect(() => {
    window.document.title = "Proyecto 10 - Luis j Cueva";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
