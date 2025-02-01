import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "../../api/api";

const initialState = {
  commentsByPostId: {},
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state, action) => {
        state.commentsByPostId[action.meta.arg] = {
          loading: true,
          error: null,
        };
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        const { postId, comments } = action.payload;
        state.commentsByPostId[postId] = {
          loading: false,
          error: null,
          comments: comments,
        };
      })
      .addCase(fetchComments.rejected, (state, action) => {
        const { postId, error } = action.payload;
        state.commentsByPostId[postId] = {
          loading: false,
          error: error,
          comments: [],
        };
      });
  },
});

export default commentsSlice.reducer;
