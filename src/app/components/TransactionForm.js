"use client";

import { useState } from "react";
import expenseCategories from "../utils/categories";
import { addIncome, addExpense } from "../store/budgetSlice";
import { useSelector, useDispatch } from "react-redux";
import { closeIncomeModal, closeExpenseModal } from "../store/modalSlice";

const TransactionForm = ({ type }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(
    type === "expense" ? expenseCategories[0] : null
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !date || (type === "expense" && !category)) {
      alert("All fields are required.");
      return;
    }
    const transaction = {
      description,
      amount: parseFloat(amount),
      date,
      ...(type === "expense" && { category }),
    };
    if (type === "expense") {
      handleAddExpense(transaction);
    }
    else {
      handleAddIncome(transaction);
    }
    setDescription("");
    setAmount("");
    setDate("");
    if (type === "expense") setCategory(expenseCategories[0]);
    if (type === "expense") {
      closeExpenseModal();
    }
    else {
      closeIncomeModal();
    }
  };

  const handleAddIncome = (income) => {
    dispatch(addIncome(income));
    dispatch(closeIncomeModal()); // Modalı kapat
  };

  const handleAddExpense = (expense) => {
    dispatch(addExpense(expense));
    dispatch(closeExpenseModal()); // Modalı kapat
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {type === "expense" && (
        <div>
          <label className="block font-medium mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            {expenseCategories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label className="block font-medium mb-2">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block font-medium mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block font-medium mb-2">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div className="flex gap-4 justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => type === "expense" ? closeExpenseModal() : closeIncomeModal()}
          className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;
