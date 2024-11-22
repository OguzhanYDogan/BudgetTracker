import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isIncomeModalOpen: false,
    isExpenseModalOpen: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openIncomeModal(state) {
            state.isIncomeModalOpen = true;
        },
        closeIncomeModal(state) {
            state.isIncomeModalOpen = false;
        },
        openExpenseModal(state) {
            state.isExpenseModalOpen = true;
        },
        closeExpenseModal(state) {
            state.isExpenseModalOpen = false;
        },
    },
});

export const {
    openIncomeModal,
    closeIncomeModal,
    openExpenseModal,
    closeExpenseModal,
} = modalSlice.actions;

export default modalSlice.reducer;
