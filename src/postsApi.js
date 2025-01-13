import { createAsyncThunk } from "@reduxjs/toolkit"
import api from './api'

export const fetchPostAsync = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await api.fetchPost()
    console.log('post fetch posts', response)
    return response.data;
  }
)

export const fetchPopularPostsAsyncApi = createAsyncThunk(
  'post/fetchPopularPosts',
  async (limit) => {
    const response = await api.fetchPopularPosts(limit);
    return response;
  }
)
