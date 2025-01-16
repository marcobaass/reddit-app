import { createSlice } from "@reduxjs/toolkit";
import { mapImageURL } from "../utils/mapImageURL";
import { fetchPopularPosts } from "../api/api";

const initialState = {
  postArray: [],
  isLoading: true,
  errMsg: "",
};

export const fetchPopularPostsAsync = fetchPopularPosts;

export const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularPostsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPopularPostsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errMsg = "";
        state.postArray = mapImageURL(action.payload);
      })
      .addCase(fetchPopularPostsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.error?.message || "Fetch failed";
      });
  },
});

export default postSlice.reducer;
export const selectAllPosts = (state) => {
  return state.posts.postArray;
};
