"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLimit } from "../store/budgetSlice";
import { closeCategoryLimitModal } from "../store/modalSlice";


const CategoryLimitModal = () => {
    const dispatch = useDispatch();
    const { isCategoryLimitModalOpen } = useSelector((state) => state.modal);
    const expenseCategories = [
        "Food",
        "Transport",
        "Rent",
        "Entertainment",
        "Bill",
        "Other",
    ];

    const [category, setCategory] = useState(expenseCategories[0]);
    const [monthly, setMonthly] = useState("");
    const [yearly, setYearly] = useState("");

    const handleSave = () => {
        dispatch(setLimit({ category, monthly: Number(monthly), yearly: Number(yearly) }));
        dispatch(closeCategoryLimitModal());
        setCategory(expenseCategories[0]);
        setMonthly("");
        setYearly("");
    };

    if (!isCategoryLimitModalOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-slate-50 dark:bg-[#1d232a] w-96 p-6 rounded shadow-lg relative">
                <button
                    className="absolute text-2xl top-2 right-2 text-gray-500 hover:text-gray-800"
                    onClick={() => dispatch(closeCategoryLimitModal())}
                >
                    ×
                </button>
                <h2 className="text-xl font-semibold mb-4">Set Category Limits</h2>

                <label className="block mb-2">
                    Category:
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border p-2 w-full rounded"
                    >
                        {expenseCategories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="block mb-2">
                    Monthly Limit:
                    <input
                        type="number"
                        value={monthly}
                        onChange={(e) => setMonthly(e.target.value)}
                        className="border p-2 w-full rounded"
                    />
                </label>

                <label className="block mb-2">
                    Yearly Limit:
                    <input
                        type="number"
                        value={yearly}
                        onChange={(e) => setYearly(e.target.value)}
                        className="border p-2 w-full rounded"
                    />
                </label>

                <div className="flex justify-end mt-4">
                    <button onClick={() => dispatch(closeCategoryLimitModal())} className="px-4 py-2 bg-gray-500 text-white rounded mr-2">
                        Cancel
                    </button>
                    <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoryLimitModal;
