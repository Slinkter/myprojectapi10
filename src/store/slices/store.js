import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cart-slice";
import productReducer from "./product-slice";

/**
 * @description The Redux store for the application.
 * @name store
 */
const store = configureStore({
    reducer: {
        cart: cardReducer,
        products: productReducer,
    },
});

export default store;
