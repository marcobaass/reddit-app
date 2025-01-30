import { createSlice } from "@reduxjs/toolkit";
import { fetchSubreddits } from "../../api/api";

const initialState = {
  subreddits: [],
  status: "idle",
  error: "",
};

export const subredditsSlice = createSlice({
  name: "subreddits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddits.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.subreddits = action.payload;
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error
          ? action.error.message
          : "Fetch subreddits failed";
      });
  },
});

export default subredditsSlice.reducer;
