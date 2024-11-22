"use client";

import { useSelector, useDispatch } from "react-redux";
import { addIncome, addExpense, setIncomeList, setExpenseList } from "./store/budgetSlice";
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
  const dispatch = useDispatch();

  // Gelir ve giderleri hesapla
  const totalIncome = incomeList.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = expenseList.reduce((acc, item) => acc + item.amount, 0);

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
    <div className="container mx-auto p-4">
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
          <TransactionList transactions={incomeList} type="income" />
        </div>

        {/* Gider Listesi */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-4">Expenses</h2>
          <TransactionList transactions={expenseList} type="expense" />
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
