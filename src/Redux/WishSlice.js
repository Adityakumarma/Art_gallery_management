import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wishlist",
  initialState: [], // start with an empty array
  reducers: {
    // ➕ Add to wishlist
    addToWishListItem: (state, action) => {
      state.push(action.payload);
    },
    // ❌ Remove from wishlist
    removeWishListItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToWishListItem, removeWishListItem } = wishSlice.actions;
export default wishSlice.reducer;
