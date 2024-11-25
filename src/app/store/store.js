import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import budgetReducer from "./budgetSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
    reducer: {
        modal: modalReducer,
        budget: budgetReducer,
        theme: themeReducer,
    },
});

export default store;
