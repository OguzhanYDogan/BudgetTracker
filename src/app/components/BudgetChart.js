"use client";

import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, LabelList } from 'recharts';

const BudgetChart = () => {
    const incomeList = useSelector((state) => state.budget.incomeList);
    const expenseList = useSelector((state) => state.budget.expenseList);

    // Gelir ve giderleri hesapla
    const totalIncome = incomeList.reduce((acc, item) => acc + item.amount, 0);
    const totalExpenses = expenseList.reduce((acc, item) => acc + item.amount, 0);
    const remainingIncome = totalIncome - totalExpenses;

    // Gelir ve gider grafiği için veri
    const incomeExpenseData = [
        { name: "Remaining Income", value: remainingIncome, color: "#00cc00" },  // Yeşil
        { name: "Expenses", value: totalExpenses, color: "#E3120B" },  // Kırmızı
    ];

    const totalIncomeData = [{ name: "Total Income", value: totalIncome, color: "#676Ef1" }]; // Mavi

    // Gider kategorileri
    const expenseCategories = expenseList.reduce((acc, expense) => {
        const category = expense.category || 'Uncategorized';
        if (!acc[category]) {
            acc[category] = 0;
        }
        acc[category] += expense.amount;
        return acc;
    }, {});

    // Gider kategorilerinin Pie grafiği için veri
    const expenseCategoryData = Object.keys(expenseCategories).map((category) => ({
        name: category,
        value: expenseCategories[category],
    }));

    // Grafik renkleri
    const EXPENSECOLORS = ['#C0C022', '#FF0000', '#9B86BD', '#005792', '#FF8042', '#5F8D4E'];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 gap-3">
            <div className="w-full rounded-xl p-3 bg-[#f2f2f2] dark:bg-[#232931] transition-colors duration-500">
                <h2 className="text-center text-2xl font-semibold">Income vs Expenses</h2>
                <ResponsiveContainer width="100%" height={450}>
                    <PieChart>
                        {/* Gelir ve Gider Pie Grafiği */}
                        <Pie
                            data={incomeExpenseData}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={115}
                            fill="#0088FE"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {incomeExpenseData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                            ))}
                        </Pie>
                        <Pie
                            data={totalIncomeData}
                            cx="50%"
                            cy="50%"
                            innerRadius={140}
                            outerRadius={150}
                            fill="#0088FE"
                            paddingAngle={3}
                            dataKey="value"
                        >
                            {totalIncomeData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="w-full rounded-xl p-3 bg-[#f2f2f2] dark:bg-[#232931] transition-colors duration-500">
                <h2 className="text-center text-2xl font-semibold">Expense Categories</h2>
                <ResponsiveContainer width="100%" height={450}>
                    <PieChart>
                        {/* Gider Kategorilerinin Pie Grafiği */}
                        <Pie
                            data={expenseCategoryData}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={115}
                            fill="#FF8042"
                            paddingAngle={5}
                            dataKey="value"
                            label
                        >
                            {expenseCategoryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={EXPENSECOLORS[index % EXPENSECOLORS.length]} stroke={EXPENSECOLORS[index % EXPENSECOLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BudgetChart;
