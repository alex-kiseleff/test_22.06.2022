import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IContact, IContactsState } from '../../interfaces/interfaces';

const fetchContacts = createAsyncThunk<Array<IContact>, undefined, { rejectValue: string }>(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        const response = await fetch('http://localhost:3000/contacts');
        if (!response.ok) {
            return rejectWithValue('Ошибка сервера!');
        }
        const data = await response.json();
        return data;
    }
);

const initialState: IContactsState = {
    contacts: [],
    loading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state: IContactsState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchContacts.fulfilled,
                (state: IContactsState, action: PayloadAction<Array<IContact>>) => {
                    state.contacts = action.payload;
                    state.loading = false;
                }
            )
            .addCase(fetchContacts.rejected, (state: IContactsState, action) => {
                state.error = action.payload;
            });
    },
});

export { fetchContacts };
export default contactsSlice.reducer;
