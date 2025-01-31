import { baseUrl } from "../../shared/baseUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (postId) => {
    const response = await fetch(`${baseUrl}comments/${postId}.json?limit=10`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const comments = data[1].data.children.map((comment) => ({
      id: comment.data.id,
      author: comment.data.author,
      body: comment.data.body,
      score: comment.data.score,
    }));

    return comments;
  }
);

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async (subreddit = "all") => {
    const response = await fetch(`${baseUrl}r/${subreddit}/top.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.children.map((post) => post.data);
  }
);

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
