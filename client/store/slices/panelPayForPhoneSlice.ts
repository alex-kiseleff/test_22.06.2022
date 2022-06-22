import { createSlice } from '@reduxjs/toolkit';
import { IPayForPhone } from '../../interfaces/interfaces';

const initialState: IPayForPhone = {
    isOneValid: false,
    isTwoValid: false,
    isThreeValid: false,
    isFourValid: false,
    isSumValid: false,
    oneInput: '',
    twoInput: '',
    threeInput: '',
    fourInput: '',
    sumInput: '',
    onButton: true,
};

const panelPayForPhoneSlice = createSlice({
    name: 'payForPhone',
    initialState,
    reducers: {
        checkValidOne: (state, action) => {
            state.isOneValid = action.payload;
        },
        checkValidTwo: (state, action) => {
            state.isTwoValid = action.payload;
        },
        checkValidThree: (state, action) => {
            state.isThreeValid = action.payload;
        },
        checkValidFour: (state, action) => {
            state.isFourValid = action.payload;
        },
        checkValidSum: (state, action) => {
            state.isSumValid = action.payload;
        },
        setValueInputOne: (state, action) => {
            state.oneInput = action.payload;
        },
        setValueInputTwo: (state, action) => {
            state.twoInput = action.payload;
        },
        setValueInputThree: (state, action) => {
            state.threeInput = action.payload;
        },
        setValueInputFour: (state, action) => {
            state.fourInput = action.payload;
        },
        setValueInputSum: (state, action) => {
            state.sumInput = action.payload;
        },
        toggleButton: (state, action) => {
            state.onButton = action.payload;
        },
    },
});

export const {
    checkValidOne,
    checkValidTwo,
    checkValidThree,
    checkValidFour,
    checkValidSum,
    setValueInputOne,
    setValueInputTwo,
    setValueInputThree,
    setValueInputFour,
    setValueInputSum,
    toggleButton,
} = panelPayForPhoneSlice.actions;
export default panelPayForPhoneSlice.reducer;
