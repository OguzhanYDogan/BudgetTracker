"use client";

import { useSelector, useDispatch } from "react-redux";
import { addIncome, addExpense, setIncomeList, setExpenseList, setSelectedYear, setSelectedMonth, } from "./store/budgetSlice";

import { openIncomeModal, closeIncomeModal, openExpenseModal, closeExpenseModal } from "./store/modalSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import BudgetChart from "./components/BudgetChart";
import Header from "./components/Header";

export default function Home() {
  const { isIncomeModalOpen, isExpenseModalOpen } = useSelector((state) => state.modal);
  const incomeList = useSelector((state) => state.budget.incomeList);
  const expenseList = useSelector((state) => state.budget.expenseList);
  const filteredIncome = useSelector((state) => state.budget.getFilteredIncome);
  const filteredExpenses = useSelector((state) => state.budget.getFilteredExpenses);
  const selectedYear = useSelector((state) => state.budget.selectedYear);
  const selectedMonth = useSelector((state) => state.budget.selectedMonth);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedIncome = JSON.parse(localStorage.getItem('incomeList')) || [];
    const savedExpenses = JSON.parse(localStorage.getItem('expenseList')) || [];
    dispatch(setIncomeList(savedIncome));
    dispatch(setExpenseList(savedExpenses));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('incomeList', JSON.stringify(incomeList));
  }, [incomeList]);

  useEffect(() => {
    localStorage.setItem('expenseList', JSON.stringify(expenseList));
  }, [expenseList]);

  const handleAddIncome = (income) => {
    dispatch(addIncome(income));
    dispatch(closeIncomeModal()); // Modalı kapat
  };

  const handleAddExpense = (expense) => {
    dispatch(addExpense(expense));
    dispatch(closeExpenseModal()); // Modalı kapat
  };

  return (
    <div className="container mx-auto p-4 flex-1">
      <div className="flex justify-center gap-4 mb-4 rounded-xl p-3 bg-[#f2f2f2] dark:bg-[#232931] transition-colors duration-500">
        <h1 className="text-xl text-center font-normal mb-2">Select a date</h1>
        <select
          value={selectedYear}
          onChange={(e) => dispatch(setSelectedYear(Number(e.target.value)))}
          className="border p-2 rounded text-slate-900 dark:text-[#c0c7d4] transition-colors duration-500"
        >
          {Array.from({ length: 5 }, (_, i) => (
            <option key={i} value={new Date().getFullYear() - i}>
              {new Date().getFullYear() - i}
            </option>
          ))}
        </select>
        <select
          value={selectedMonth}
          onChange={(e) => dispatch(setSelectedMonth(Number(e.target.value)))}
          className="border p-2 rounded text-slate-900 dark:text-[#c0c7d4] transition-colors duration-500"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i + 1}>
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>
      </div>
      <BudgetChart />

      <div className="flex gap-3 justify-center mt-4 mb-2 ">
        <button
          onClick={() => dispatch(openIncomeModal())} // Gelir modalını aç
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Income
        </button>
        <button
          onClick={() => dispatch(openExpenseModal())} // Gider modalını aç
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Add Expense
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gelir Listesi */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-4">Income</h2>
          <TransactionList transactions={filteredIncome} type="income" />
        </div>

        {/* Gider Listesi */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-4">Expenses</h2>
          <TransactionList transactions={filteredExpenses} type="expense" />
        </div>
      </div>

      {/* Gelir Modal */}
      <Modal isOpen={isIncomeModalOpen} onClose={() => dispatch(closeIncomeModal())}>
        <h2 className="text-lg font-semibold mb-4">Add Income</h2>
        <TransactionForm type="income" onAdd={handleAddIncome} onClose={() => dispatch(closeIncomeModal())} />
      </Modal>

      {/* Gider Modal */}
      <Modal isOpen={isExpenseModalOpen} onClose={() => dispatch(closeExpenseModal())}>
        <h2 className="text-lg font-semibold mb-4">Add Expense</h2>
        <TransactionForm type="expense" onAdd={handleAddExpense} onClose={() => dispatch(closeExpenseModal())} />
      </Modal>
    </div>
  );
}
