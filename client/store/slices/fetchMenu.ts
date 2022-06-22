import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IItemMenu, IMenuState } from '../../interfaces/interfaces';

const fetchMenu = createAsyncThunk<Array<IItemMenu>, undefined, { rejectValue: string }>(
    'menu/fetchMenu',
    async (_, { rejectWithValue }) => {
        const response = await fetch('http://localhost:3000/menu');
        if (!response.ok) {
            return rejectWithValue('Ошибка сервера!');
        }
        const data = await response.json();
        return data;
    }
);

const initialState: IMenuState = {
    itemsMenu: [],
    loading: false,
    error: null,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenu.pending, (state: IMenuState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchMenu.fulfilled,
                (state: IMenuState, action: PayloadAction<Array<IItemMenu>>) => {
                    state.itemsMenu = action.payload;
                    state.loading = false;
                }
            )
            .addCase(fetchMenu.rejected, (state: IMenuState, action) => {
                state.error = action.payload;
            });
    },
});

export { fetchMenu };
export default menuSlice.reducer;
