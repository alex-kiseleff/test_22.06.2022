import { createSlice } from '@reduxjs/toolkit';
import { IBurgerMenu } from '../../interfaces/interfaces';

const initialState: IBurgerMenu = {
    isMenuOpen: false,
};

const openBurgerMenuSlice = createSlice({
    name: 'burgerMenu',
    initialState,
    reducers: {
        setCondition: (state, action) => {
            state.isMenuOpen = action.payload;
        },
    },
});

export const { setCondition } = openBurgerMenuSlice.actions;
export default openBurgerMenuSlice.reducer;
