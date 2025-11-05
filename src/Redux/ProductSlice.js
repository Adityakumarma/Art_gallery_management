import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🧩 Async thunk: fetch all artworks/products from API
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    const products = response.data.products;

    // Store in sessionStorage for temporary caching
    sessionStorage.setItem("allProducts", JSON.stringify(products));

    return products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    filteredProducts: [],
    loading: false,
    error: "",
  },

  reducers: {
    // 🔍 Search product by title (case-insensitive)
    searchProduct: (state, action) => {
      const query = action.payload.toLowerCase();
      state.allProducts = state.filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
    },
  },

  extraReducers: (builder) => {
    builder
      // ⏳ While fetching
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })

      // ✅ On success
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
        state.filteredProducts = action.payload;
        state.error = "";
      })

      // ❌ On failure
      .addCase(fetchAllProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch products from API";
      });
  },
});

export const { searchProduct } = productSlice.actions;
export default productSlice.reducer;
