import { createSlice } from "@reduxjs/toolkit";

/**
 * @description Redux slice for managing the cart state.
 * @name cartSlice
 */
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        /**
         * @description Adds an item to the cart.
         * @param {Array} state - The current state of the cart.
         * @param {object} action - The action object, containing the item to add.
         */
        addToCart(state, action) {
            state.push(action.payload);
        },
        /**
         * @description Removes an item from the cart.
         * @param {Array} state - The current state of the cart.
         * @param {object} action - The action object, containing the ID of the item to remove.
         * @returns {Array} The new state of the cart.
         */
        removeFromCart(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

