import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isIncomeModalOpen: false,
    isExpenseModalOpen: false,
    isCategoryLimitModalOpen: false, // Yeni eklenen durum
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
        openCategoryLimitModal(state) {
            state.isCategoryLimitModalOpen = true;
        },
        closeCategoryLimitModal(state) {
            state.isCategoryLimitModalOpen = false;
        },
    },
});

export const {
    openIncomeModal,
    closeIncomeModal,
    openExpenseModal,
    closeExpenseModal,
    openCategoryLimitModal,
    closeCategoryLimitModal,
} = modalSlice.actions;
export default modalSlice.reducer;
