import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    incomeList: [],
    expenseList: [],
    selectedYear: new Date().getFullYear(),
    selectedMonth: new Date().getMonth() + 1,
};

const budgetSlice = createSlice({
    name: "budget",
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
        setSelectedYear: (state, action) => {
            state.selectedYear = action.payload;
        },
        setSelectedMonth: (state, action) => {
            state.selectedMonth = action.payload;
        },
    },
});

export const {
    addIncome,
    addExpense,
    setIncomeList,
    setExpenseList,
    setSelectedYear,
    setSelectedMonth,
} = budgetSlice.actions;

export default budgetSlice.reducer;
