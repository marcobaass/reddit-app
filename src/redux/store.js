import { configureStore } from "@reduxjs/toolkit";
import { commentsReducer } from "../../comments/CommentSlice";
import { postReducer } from "../articles/PostSlice";

const store = configureStore({
  reducer: {
    // adding slice reducers here
    comments: commentsReducer,
    posts: postReducer
  },
});

export default store;
