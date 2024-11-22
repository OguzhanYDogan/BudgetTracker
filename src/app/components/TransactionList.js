"use client";

import { format } from "date-fns";

const TransactionList = ({ transactions = [], type }) => { // Varsayılan değer boş dizi
    return (
        <ul className="px-4 rounded-xl bg-[#f2f2f2] dark:bg-[#232931] divide-y divide-gray-300 dark:divide-gray-400 transition-colors duration-500">
            {transactions.length > 0 ? (
                transactions.map((transaction, index) => (
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
                        ? "No income added yet."
                        : "No expenses added yet."}
                </p>
            )}
        </ul>
    );
};

export default TransactionList;
