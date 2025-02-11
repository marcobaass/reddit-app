import { createSlice } from "@reduxjs/toolkit";
import { mapImageURL } from "../../utils/mapImageURL";
import { fetchPostById, fetchPosts } from "../../api/api";

const initialState = {
  posts: [],
  isLoading: true,
  errMsg: "",
};

export const fetchPostsAsync = fetchPosts;

export const postSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    setScore: (state, action) => {
      const { postId, newScore } = action.payload;
      const post = state.posts.find((p) => p.id === postId);
      if (post) {
        post.score = newScore;
      }
    },
    setVoteState: (state, action) => {
      const { postId, voteState } = action.payload;
      const post = state.posts.find((p) => p.id === postId);
      if (post) {
        post.voteState = voteState;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errMsg = "";
        state.posts = mapImageURL(action.payload).map(post => ({
          ...post,
          voteState: "neutral",
        }));
      })
      .addCase(fetchPostsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.error?.message || "Fetch failed";
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        console.log("Fetched post data:", action.payload);
        const existingPost = state.posts.find(post => post.id === action.payload.id);
        if (!existingPost) {
          state.posts.push({ ...action.payload, voteState: "neutral" });
        }
      });
  },
});

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);

export const { setScore, setVoteState } = postSlice.actions;
export default postSlice.reducer;

export const selectAllPosts = (state) => {
  return state.posts.posts;
};
