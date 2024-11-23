"use client";

import { format } from "date-fns";
import { useSelector } from "react-redux";

const TransactionList = ({ type }) => {
    // Redux'tan gerekli state'leri çekiyoruz
    const incomeList = useSelector((state) => state.budget.incomeList);
    const expenseList = useSelector((state) => state.budget.expenseList);
    const selectedYear = useSelector((state) => state.budget.selectedYear);
    const selectedMonth = useSelector((state) => state.budget.selectedMonth);

    // Türüne göre doğru listeyi seçiyoruz
    const transactions = type === "income" ? incomeList : expenseList;

    // Yıl ve aya göre filtreleme işlemi
    const filteredTransactions = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        const yearMatches = transactionDate.getFullYear() === selectedYear;
        const monthMatches = transactionDate.getMonth() === selectedMonth - 1; // Aylar 0 tabanlıdır
        return yearMatches && monthMatches;
    });

    return (
        <ul className="px-4 py-2 rounded-xl  text-slate-900 dark:text-[#c0c7d4] bg-[#f2f2f2] dark:bg-[#232931] divide-y divide-gray-300 dark:divide-gray-400 transition-colors duration-500">
            {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center py-2"
                    >
                        <div className="flex items-center gap-2">
                            <span
                                className={`font-bold text-2xl ${type === "income" ? "text-green-500" : "text-red-500"
                                    }`}
                            >
                                {type === "income" ? "+" : "-"}
                            </span>
                            <span>{transaction.description}</span>
                            {type === "expense" && (
                                <span className="ml-2 text-gray-500 text-sm">
                                    ({transaction.category})
                                </span>
                            )}
                            <span>
                                -{" "}
                                {transaction.amount}₺
                            </span>
                        </div>
                        <div>
                            {transaction.date
                                ? format(new Date(transaction.date), "MM/dd/yyyy")
                                : "Invalid date"}
                        </div>
                    </li>
                ))
            ) : (
                <p className="text-gray-500">
                    {type === "income"
                        ? "No income added yet for this period."
                        : "No expenses added yet for this period."}
                </p>
            )}
        </ul>
    );
};

export default TransactionList;
