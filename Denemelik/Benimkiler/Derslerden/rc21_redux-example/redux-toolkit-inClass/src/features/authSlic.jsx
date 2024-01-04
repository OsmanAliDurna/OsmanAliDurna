import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { email: "", password: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reduceres: {
    // setUser: (state, action) => {
    //   state.user = action.payload;
    // },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    clearUser: (state) => {
      state.user = initialState;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
