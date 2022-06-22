import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IOperator, IOperatorsContentState } from '../../interfaces/interfaces';

const fetchOperatorsList = createAsyncThunk<Array<IOperator>, undefined, { rejectValue: string }>(
    'operatorList/fetchOperatorsList',
    async (_, { rejectWithValue }) => {
        const response = await fetch('http://localhost:3000/operators');
        if (!response.ok) {
            return rejectWithValue('Ошибка сервера!');
        }
        const data = await response.json();
        return data;
    }
);

const initialState: IOperatorsContentState = {
    operators: [],
    loading: false,
    error: null,
};

const operatorListSlice = createSlice({
    name: 'operatorList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOperatorsList.pending, (state: IOperatorsContentState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchOperatorsList.fulfilled,
                (state: IOperatorsContentState, action: PayloadAction<Array<IOperator>>) => {
                    state.operators = action.payload;
                    state.loading = false;
                }
            )
            .addCase(fetchOperatorsList.rejected, (state: IOperatorsContentState, action) => {
                state.error = action.payload;
            });
    },
});

export { fetchOperatorsList };
export default operatorListSlice.reducer;
