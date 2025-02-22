import { baseUrl } from "../../shared/baseUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (postId) => {
    const response = await fetch(`${baseUrl}comments/${postId}.json?limit=10`);
    if (!response.ok) {
      throw new Error(`HTTP error fetching comments: ${response.status}`);
    }

    const data = await response.json();
    // Extract comments from the Reddit API response
    const comments = data[1].data.children.map((child) => child.data);

    return { postId, comments }; // Return postId along with comments
  }
);

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async (subreddit = "all") => {
    const response = await fetch(`${baseUrl}r/${subreddit}/top.json?limit=10`);
    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data.data.children.map((post) => post.data);
  }
);

export const fetchPostById = createAsyncThunk(
  "post/fetchPostById",
  async (postId) => {
    const response = await fetch(`${baseUrl}comments/${postId}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error fetching post: ${response.status}`);
    }
    const data = await response.json();
    return data[0].data.children[0].data;
  }
)

export const fetchSubreddits = createAsyncThunk("subreddits/", async () => {
  const response = await fetch(`${baseUrl}subreddits/popular.json?`);
  if (!response.ok) {
    throw new Error(
      `HTTP error fetching subreddits! status ${response.status}`
    );
  }
  const data = await response.json();
  return data.data.children.map((subreddit) => subreddit.data);
});
