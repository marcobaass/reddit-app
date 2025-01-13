import { createAsyncThunk } from '@reduxjs/toolkit'
import api from './api'

export const fetchCommentsAsync = createAsyncThunk(
  'comments/fetchComments',
  async () => {
    const response = await api.fetchComments()
    return response.data;
  }
);
