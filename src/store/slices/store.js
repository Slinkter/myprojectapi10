import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cart-slice";

const store = configureStore({
    reducer: {
        cart: cardReducer,
    },
});

export default store;
