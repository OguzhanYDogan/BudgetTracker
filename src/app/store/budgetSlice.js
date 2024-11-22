import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    incomeList: [],
    expenseList: [],
};

const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        addIncome: (state, action) => {
            state.incomeList.push(action.payload);
        },
        addExpense: (state, action) => {
            state.expenseList.push(action.payload);
        },
        setIncomeList: (state, action) => {
            state.incomeList = action.payload;
        },
        setExpenseList: (state, action) => {
            state.expenseList = action.payload;
        },
    },
});

export const { addIncome, addExpense, setIncomeList, setExpenseList } = budgetSlice.actions;
export default budgetSlice.reducer;
