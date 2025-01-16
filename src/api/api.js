import { baseUrl } from "../../shared/baseUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await fetch(`${baseUrl}comments`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
);

export const fetchPopularPosts = createAsyncThunk(
  "post/fetchPopularPosts",
  async (limit = 10) => {
    const response = await fetch(`${baseUrl}r/popular/.json?limit=${limit}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.children.map((post) => post.data);
  }
);
