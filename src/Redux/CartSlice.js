import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // ➕ Add item to cart (or update quantity if already exists)
    addToCart: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload.id);
      const cleanPrice = parseFloat(action.payload.price.toString().replace(/[^0-9.]/g, "")) || 0;

      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice = existingProduct.quantity * cleanPrice;
      } else {
        state.push({
          ...action.payload,
          price: cleanPrice,
          quantity: 1,
          totalPrice: cleanPrice,
        });
      }
    },

    // ❌ Remove item from cart
    removeItemFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    // 🔼 Increment quantity
    incrementQuantity: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload);
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
      }
    },

    // 🔽 Decrement quantity (remove if it goes below 1)
    decrementQuantity: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
          existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
        } else {
          return state.filter((item) => item.id !== action.payload);
        }
      }
    },

    // 🧹 Empty entire cart
    emptyCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
