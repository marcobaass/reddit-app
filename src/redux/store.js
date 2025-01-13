import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from '../comments/CommentSlice';
import postReducer from "../articles/PostSlice";

export default configureStore({
  reducer: {
    // adding slice reducers here
    comments: commentsReducer,
    posts: postReducer
  },
});
