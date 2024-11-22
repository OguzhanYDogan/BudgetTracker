import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import budgetReducer from "./budgetSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
    reducer: {
        modal: modalReducer, // Modal slice
        budget: budgetReducer, // Budget slice
        theme: themeReducer,
    },
});

export default store;
