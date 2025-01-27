import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../features/comments/commentSlice";
import searchReducer from "../features/search/searchSlice";
import postReducer from "../features/posts/postSlice";

export default configureStore({
  reducer: {
    // adding slice reducers here
    comments: commentsReducer,
    posts: postReducer,
    search: searchReducer,
  },
});
