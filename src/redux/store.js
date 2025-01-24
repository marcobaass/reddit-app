import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../features/comments/CommentSlice";
import postReducer from "../features/articles/PostSlice";
import searchReducer from "./slices/searchSlice"

export default configureStore({
  reducer: {
    // adding slice reducers here
    comments: commentsReducer,
    posts: postReducer,
    search: searchReducer,
  },
});
