import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchArticle = createAsyncThunk(
    'articles/fetchArticles',
    async () => {
        const response = await fetch(baseUrl);
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
};

export const articleSlice = createSlice({
    name:'articles',
    initialState,
    reducers:{},
    extraReducers: {
        [fetchArticle.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchArticle.fulfilled]: (state) => {
            state.isLoading = false;
            state.errMsg = '';
            state.articleArray = mapImageURL(isAction.payload);
        },
        [fetchArticle.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const articleReducer = articleSlice.reducer;
export const selectAllArticles = (state) => {
    return state.articles.articleArray;
};