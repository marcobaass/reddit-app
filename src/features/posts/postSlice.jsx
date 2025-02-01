import { createSlice } from "@reduxjs/toolkit";
import { mapImageURL } from "../../utils/mapImageURL";
import { fetchPosts } from "../../api/api";

const initialState = {
  postArray: [],
  isLoading: true,
  errMsg: "",
};

export const fetchPostsAsync = fetchPosts;

export const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errMsg = "";
        state.postArray = mapImageURL(action.payload);
      })
      .addCase(fetchPostsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.error?.message || "Fetch failed";
      });
  },
});

export default postSlice.reducer;
export const selectAllPosts = (state) => {
  return state.posts.postArray;
};
