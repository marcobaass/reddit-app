import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "../api/api";

const initialState = {
  commentsArray: [],
  isLoading: true,
  errMsg: "",
};
export const fetchCommentsAsync = fetchComments;

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCommentsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errMsg = "";
        state.commentsArray = action.payload;
      })
      .addCase(fetchCommentsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.error ? action.error.message : "Fetch failed";
      });
  },
});

export default commentsSlice.reducer;
