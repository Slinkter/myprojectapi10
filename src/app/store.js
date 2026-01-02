import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/entities/cart/model/cartSlice";
import productReducer from "@/entities/product/model/productSlice";

/**
 * @description The Redux store for the application.
 * @name store
 */
const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
    },
});

export default store;
