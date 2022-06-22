import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IPanelService, IPanelServiceState } from '../../interfaces/interfaces';

const fetchPanelService = createAsyncThunk<
    Array<IPanelService>,
    undefined,
    { rejectValue: string }
>('panelService/fetchPanelService', async (_, { rejectWithValue }) => {
    const response = await fetch('http://localhost:3000/panels-services');
    if (!response.ok) {
        return rejectWithValue('Ошибка сервера!');
    }
    const data = await response.json();
    return data;
});

const initialState: IPanelServiceState = {
    panelService: [],
    loading: false,
    error: null,
};

const panelServiceSlice = createSlice({
    name: 'panelService',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPanelService.pending, (state: IPanelServiceState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchPanelService.fulfilled,
                (state: IPanelServiceState, action: PayloadAction<Array<IPanelService>>) => {
                    state.panelService = action.payload;
                    state.loading = false;
                }
            )
            .addCase(fetchPanelService.rejected, (state: IPanelServiceState, action) => {
                state.error = action.payload;
            });
    },
});

export { fetchPanelService };
export default panelServiceSlice.reducer;
