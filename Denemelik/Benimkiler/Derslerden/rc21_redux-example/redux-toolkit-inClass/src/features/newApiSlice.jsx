import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  newsData: [],
  error: false,
  loading: false,
};

export const getNewsData = createAsyncThunk("getNews", async () => {
  const API_KEY = "435ab4a870014676bbda9501ffb47228";
  const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
  const data = await axios(url);
  return data.data.articles;
});

const newApiSlice = createSlice({
  name: "newsApi",
  initialState,
  reducers: {
    clearNewsData: (state, action) => {
      state.newsData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNewsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.newsData = action.payload;
      })
      .addCase(getNewsData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { clearNewsData } = newApiSlice.actions;

export default newApiSlice.reducer;
