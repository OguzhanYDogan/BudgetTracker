import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    incomeList: [],
    expenseList: [],
    selectedYear: new Date().getFullYear(),
    selectedMonth: new Date().getMonth() + 1,
    limits: {
        Food: { monthly: 2500, yearly: 30000 },
        Transport: { monthly: 3000, yearly: 36000 },
        Rent: { monthly: 10000, yearly: 120000 },
        Entertainment: { monthly: 1200, yearly: 14400 },
        Bill: { monthly: 4000, yearly: 48000 },
        Other: { monthly: 1000, yearly: 12000 },
    },
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
        setLimit(state, action) {
            const { category, monthly, yearly } = action.payload;
            if (state.limits[category]) {
                state.limits[category] = { monthly, yearly };
            } -
                localStorage.setItem("categoryLimits", JSON.stringify(state.limits));
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
    setLimit
} = budgetSlice.actions;

export default budgetSlice.reducer;
