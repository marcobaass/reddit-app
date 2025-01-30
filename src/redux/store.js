import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../features/comments/commentSlice";
import searchReducer from "../features/search/searchSlice";
import postReducer from "../features/posts/postSlice";
import subredditsReducer from "../features/subreddits/subredditsSlice";

const store = configureStore({
  reducer: {
    // adding slice reducers here
    comments: commentsReducer,
    posts: postReducer,
    search: searchReducer,
    subreddits: subredditsReducer,
  },
});

export default store;
