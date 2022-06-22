import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { INewsBlock, INewsState } from '../../interfaces/interfaces';

const fetchNews = createAsyncThunk<Array<INewsBlock>, undefined, { rejectValue: string }>(
    'news/fetchNews',
    async (_, { rejectWithValue }) => {
        const response = await fetch('http://localhost:3000/news');
        if (!response.ok) {
            return rejectWithValue('Ошибка сервера!');
        }
        const data = await response.json();
        return data;
    }
);

const initialState: INewsState = {
    news: [],
    loading: false,
    error: null,
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state: INewsState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchNews.fulfilled,
                (state: INewsState, action: PayloadAction<Array<INewsBlock>>) => {
                    state.news = action.payload;
                    state.loading = false;
                }
            )
            .addCase(fetchNews.rejected, (state: INewsState, action) => {
                state.error = action.payload;
            });
    },
});

export { fetchNews };
export default newsSlice.reducer;
