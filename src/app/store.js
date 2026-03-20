import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/entities/cart/model/cartSlice";
import productReducer from "@/entities/product/model/productSlice";

/** @description Store global de Redux. Slices: products, cart */
const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;
