import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
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
