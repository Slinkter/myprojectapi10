import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/**
 * @description Simulates adding an item to the cart asynchronously.
 * @name addToCart
 * @param {object} item - The item to add to the cart.
 * @returns {Promise<object>} A promise that resolves to the added item.
 */
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (item, { rejectWithValue }) => {
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      return item;
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

/**
 * @description Simulates removing an item from the cart asynchronously.
 * @name removeFromCart
 * @param {number} itemId - The ID of the item to remove from the cart.
 * @returns {Promise<number>} A promise that resolves to the ID of the removed item.
 */
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (itemId, { rejectWithValue }) => {
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      return itemId;
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

/**
 * @description Redux slice for managing the cart state.
 * @name cartSlice
 */
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Cases for addToCart
      .addCase(addToCart.pending, (state, action) => {
        state.status = "loading";
        // Optimistically add the item to the cart
        state.items.push(action.meta.arg);
      })
      .addCase(addToCart.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        // Revert the optimistic update
        state.items = state.items.filter(
          (item) => item.id !== action.meta.arg.id
        );
      })
      // Cases for removeFromCart
      .addCase(removeFromCart.pending, (state, action) => {
        state.status = "loading";
        // Optimistically remove the item from the cart
        state.items = state.items.filter((item) => item.id !== action.meta.arg);
      })
      .addCase(removeFromCart.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        // Revert the optimistic update (this is more complex, might need to store the item)
        // For simplicity, we're not re-adding the item here.
      });
  },
});

export default cartSlice.reducer;

/**
 * @description Selector to get the total amount of the cart.
 * @param {object} state - The Redux state.
 * @returns {number} The total amount.
 */
export const selectCartTotal = (state) =>
  state.cart.items.reduce((acc, curr) => acc + curr.price, 0);
