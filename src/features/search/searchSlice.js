import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (query) => {
    const response = await fetch(
      `https://www.reddit.com/search.json?q=${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.children.map(child => child.data);
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: '',
    results: [],
    status: 'idle',
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
     .addCase(fetchSearchResults.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchSearchResults.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.results = action.payload;
    })
    .addCase(fetchSearchResults.rejected, (state, action) => {
      state.status = 'failed';
      console.error('Error:', action.error);
    });
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
