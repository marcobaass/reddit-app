import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchArticle = createAsyncThunk(
    'articles/fetchArticles',
    async () => {
        const response = await fetch(baseUrl + 'r/popular');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    articleArray: [],
    isLoading: true,
    errMsg: ''
}