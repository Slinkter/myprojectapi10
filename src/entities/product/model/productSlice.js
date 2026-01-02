
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "@/shared/api/apiClient";

/**
 * @description Asynchronous thunk for fetching the product list from the API.
 * @name fetchProducts
 * @returns {Promise<Array>} A promise that resolves to an array of products.
 */
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const data = await apiService.get("/products");
  return data;
});

/**
 * @description Redux slice for managing the product state, including the product list, loading status, and errors.
 * @name productSlice
 */
const productSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;
