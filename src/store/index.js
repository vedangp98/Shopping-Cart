import { configureStore } from "@reduxjs/toolkit";

import uiSliceOpen from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiSliceOpen.reducer, cart: cartSlice.reducer },
});

export default store;
