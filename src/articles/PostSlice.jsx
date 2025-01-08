import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchPost = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await fetch(baseUrl + 'r/popular/.json');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        const posts = data.data.children;

        posts.forEach((post) => {
            if(post.kind === 't3') {
                const { title, author, num_comments, subreddit } = post.data;

                console.log(`Author: ${author}`);
                console.log(`Title: ${title}`);
                console.log(`Comments: ${num_comments}`);
                console.log(`Subreddit: ${subreddit}`);
            }
        })
    }
);

const initialState = {
    postArray: [],
    isLoading: true,
    errMsg: ''
};

export const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{},
    extraReducers: {
        [fetchPost.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPost.fulfilled]: (state) => {
            state.isLoading = false;
            state.errMsg = '';
            state.postArray = mapImageURL(isAction.payload);
        },
        [fetchPost.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const postReducer = postSlice.reducer;
export const selectAllPosts = (state) => {
    return state.posts.postArray;
};