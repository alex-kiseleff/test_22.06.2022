import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
};

const titleSlice = createSlice({
    name: 'titles',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
    },
});

export const { setTitle } = titleSlice.actions;
export default titleSlice.reducer;
