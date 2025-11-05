import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Redux/ProductSlice";
import wishlistSlice from "../Redux/WishSlice";
import cartSlice from "../Redux/CartSlice";

// 🛒 Centralized Redux store for your Art Gallery Management app
// You can easily add more slices here in the future if needed.
const CartStore = configureStore({
  reducer: {
    productReducer: productSlice,
    wishlistReducer: wishlistSlice,
    cartReducer: cartSlice,
  },
});

export default CartStore;
