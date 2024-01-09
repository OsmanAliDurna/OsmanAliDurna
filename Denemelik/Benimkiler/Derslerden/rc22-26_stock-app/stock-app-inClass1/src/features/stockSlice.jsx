import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firms: [],
  products: [],
  purchases: [],
  brands: [],
  
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    add: () => {},
  },
});

export const { add } = stockSlice.actions;

export default stockSlice.reducer;
