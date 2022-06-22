import { createSlice } from '@reduxjs/toolkit';
import { IUrlImage } from '../../interfaces/interfaces';

const initialState: IUrlImage = {
    currentSrc: '',
};

const urlImageSlice = createSlice({
    name: 'urlImage',
    initialState,
    reducers: {
        setSrc: (state, action) => {
            state.currentSrc = action.payload;
        },
    },
});

export const { setSrc } = urlImageSlice.actions;
export default urlImageSlice.reducer;
