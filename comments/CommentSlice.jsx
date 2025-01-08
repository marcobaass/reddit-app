import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../shared/baseUrl";

const initialState = {
    commentsArray: [],
    isLoading: true,
    errMsg: ''
};

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch(baseUrl + 'comments');
        if(!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = response.json();
        const comments = data[1].data.children;

        comments.forEach((comment) => {
            const commentData = comment.data;
            const { body, author, score, replies } = commentData;

            console.log(`Author: ${author}`);
            console.log(`Comment: ${body}`);
            console.log(`Score: ${score}`);
        })
    }
);

export const CommentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
            
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.commentsArray = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});
export const commentsReducer = CommentsSlice.reducer;

fetchComments();
