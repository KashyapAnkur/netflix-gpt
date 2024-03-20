import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en",
        loader: false
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
        setLoader: (state, action) => {
            state.loader = !state.loader;
        }
    }
});

export const { changeLanguage, setLoader } = configSlice.actions;
export default configSlice.reducer;