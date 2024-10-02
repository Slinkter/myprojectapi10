import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exac path="/myprojectapi10/" element={<Home />} />
                <Route path="/myprojectapi10/cart" element={<Cart />} />
            </Routes>
        </>
    );
};

export default App;
