import { createSlice, createSelector } from "@reduxjs/toolkit";

/**
 * @typedef {import('../../product/model/productSlice').Product} Product
 */

/**
 * @typedef {Object} CartItem
 * @property {Product} product
 * @property {number} quantity
 */

/**
 * @typedef {Object} CartState
 * @property {CartItem[]} cartItems
 */

/** @type {CartState} */
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.product.id !== productId);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.product.id === id);
      if (existingItem) {
        if (quantity > 0) {
          existingItem.quantity = quantity;
        } else {
          state.cartItems = state.cartItems.filter((item) => item.product.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// Selectors
const selectCartState = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartState],
  (cartState) => cartState.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)
);

export const selectCartItemCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
);

export const selectIsInCart = (productId) =>
  createSelector([selectCartItems], (cartItems) =>
    cartItems.some((item) => item.product.id === productId)
  );
