import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    message: '',
};

const messengerSlice = createSlice({
    name: 'messenger',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload;
        },
    },
});

export const { setMessage } = messengerSlice.actions;
export default messengerSlice.reducer;
