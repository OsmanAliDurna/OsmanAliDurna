import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    newsApi: newsReducer,
  },
  devTools: ProcessingInstruction.env.NODE_ENV !== "production",
});
