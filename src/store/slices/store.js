import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cart-slice";

const store = configureStore({
    reducer: {
        cart: cardReducer,
    },
});
console.log(store);

export default store;
