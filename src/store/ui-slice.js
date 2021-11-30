import { createSlice } from "@reduxjs/toolkit";

const uiSliceOpen = createSlice({
  name: "open",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSliceOpen.actions;

export default uiSliceOpen;
