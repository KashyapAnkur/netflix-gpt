import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMovies: null,
        movieResults: null,
        movieNames: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
           state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        clearGpt: (state) => {
            state.movieNames = null;
            state.movieResults = null;
            state.gptMovies = null;
        }
    }
});

export const { toggleGptSearchView, addGptMovieResult, clearGpt } = gptSlice.actions;
export default gptSlice.reducer;