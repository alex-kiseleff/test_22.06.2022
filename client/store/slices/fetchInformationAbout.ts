import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IInfoAbout, IInformationAboutState } from '../../interfaces/interfaces';

const fetchInformationAbout = createAsyncThunk<
    Array<IInfoAbout>,
    undefined,
    { rejectValue: string }
>('about/fetchInformationAbout', async (_, { rejectWithValue }) => {
    const response = await fetch('http://localhost:3000/info-about');
    if (!response.ok) {
        return rejectWithValue('Ошибка сервера!');
    }
    const data = await response.json();
    return data;
});

const initialState: IInformationAboutState = {
    infoAbout: [],
    loading: false,
    error: null,
};

const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInformationAbout.pending, (state: IInformationAboutState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchInformationAbout.fulfilled,
                (state: IInformationAboutState, action: PayloadAction<Array<IInfoAbout>>) => {
                    state.infoAbout = action.payload;
                    state.loading = false;
                }
            )
            .addCase(fetchInformationAbout.rejected, (state: IInformationAboutState, action) => {
                state.error = action.payload;
            });
    },
});

export { fetchInformationAbout };
export default aboutSlice.reducer;
