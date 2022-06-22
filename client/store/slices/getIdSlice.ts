import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
};

const getIdSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload;
        },
    },
});

export const { setId } = getIdSlice.actions;
export default getIdSlice.reducer;
