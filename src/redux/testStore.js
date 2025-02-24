import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../features/comments/commentSlice";
import searchReducer from "../features/search/searchSlice";
import postReducer from "../features/posts/postSlice";
import subredditsReducer from "../features/subreddits/subredditsSlice";

const testStore = (preloadedState) => {
  return configureStore({
    reducer: {
      comments: commentsReducer,
      posts: postReducer,
      search: searchReducer,
      subreddits: subredditsReducer,
    },
    preloadedState,
  });
};

export default testStore;
