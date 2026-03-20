import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { apiClient } from "@/shared/api/apiClient";
import { FETCH_STATUS } from "@/shared/constants/queryKeys";
import { z } from "zod";
import { productListSchema } from "./productSchema";

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} title
 * @property {number} price
 * @property {string} description
 * @property {string} category
 * @property {string} image
 * @property {{rate:number,count:number}} rating
 */

/**
 * @typedef {Object} ProductState
 * @property {Product[]} productList
 * @property {'idle'|'loading'|'succeeded'|'failed'} fetchStatus
 * @property {string|null} errorMessage
 */

const initialState = {
  productList: [],
  fetchStatus: FETCH_STATUS.IDLE,
  errorMessage: null,
};

/**
 * @description Asynchronous thunk for fetching the product list from the API.
 */
export const fetchProducts = createAsyncThunk("products/fetch", async (_, { rejectWithValue }) => {
  try {
    const data = await apiClient.get("/products");

    // 🛡️ Validación en tiempo de ejecución con Zod
    // Garantiza que los datos cumplen la estructura antes de llegar a la UI
    const parsedData = productListSchema.parse(data);

    return parsedData;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Zod Validation Error:", error.issues);
      return rejectWithValue("Error de validación: La estructura de datos de la API es incorrecta");
    }
    return rejectWithValue(error.message);
  }
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.fetchStatus = FETCH_STATUS.LOADING;
        state.errorMessage = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.fetchStatus = FETCH_STATUS.SUCCEEDED;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.fetchStatus = FETCH_STATUS.FAILED;
        state.errorMessage = action.payload;
      });
  },
});

export default productSlice.reducer;

// Selectors
const selectProductState = (state) => state.products;

export const selectProductList = createSelector(
  [selectProductState],
  (productsState) => productsState.productList
);

export const selectFetchStatus = createSelector(
  [selectProductState],
  (productsState) => productsState.fetchStatus
);

export const selectErrorMessage = createSelector(
  [selectProductState],
  (productsState) => productsState.errorMessage
);

export const selectIsProductsLoading = createSelector(
  [selectFetchStatus],
  (status) => status === FETCH_STATUS.LOADING
);
