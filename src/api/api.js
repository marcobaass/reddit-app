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

export const fetchPopularPosts = createAsyncThunk(
  "post/fetchPopularPosts",
  async (limit = 8) => {
    const response = await fetch(`${baseUrl}r/popular/.json?limit=${limit}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.children.map((post) => post.data);
  }
);

export const fetchSubreddits = createAsyncThunk(
  "subreddits/",
  async (limit = 10) => {
    const response = await fetch(
      `${baseUrl}subreddits/popular.json?limit=${limit}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status ${response.status}`);
    }
    const data = await response.json();
    console.log("fetch popular subreddits ", data);
    return data.data.children.map((subreddit) => subreddit.data);
  }
);
