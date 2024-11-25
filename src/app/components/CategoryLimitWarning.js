"use client";

import { useSelector } from "react-redux";

const CategoryLimitWarning = () => {

    const expenseList = useSelector((state) => state.budget.expenseList);
    const selectedYear = useSelector((state) => state.budget.selectedYear);
    const selectedMonth = useSelector((state) => state.budget.selectedMonth);
    const limits = useSelector((state) => state.budget.limits);

    const categoryExpenses = expenseList.reduce((acc, expense) => {
        const expenseDate = new Date(expense.date);
        const isSameMonth =
            expenseDate.getFullYear() === selectedYear &&
            expenseDate.getMonth() + 1 === selectedMonth;
        if (!isSameMonth) return acc;

        const category = expense.category || "Other";
        if (!acc[category]) {
            acc[category] = 0;
        }
        acc[category] += expense.amount;
        return acc;
    }, {});

    const warnings = Object.keys(categoryExpenses).map((category) => {
        const totalExpense = categoryExpenses[category];
        const monthlyLimit = limits[category]?.monthly || 0;
        const yearlyLimit = limits[category]?.yearly || 0;

        const isNearMonthlyLimit =
            monthlyLimit > 0 && totalExpense >= 0.8 * monthlyLimit && totalExpense < monthlyLimit;
        const isOverMonthlyLimit = monthlyLimit > 0 && totalExpense >= monthlyLimit;

        const isNearYearlyLimit =
            yearlyLimit > 0 && totalExpense >= 0.8 * yearlyLimit && totalExpense < yearlyLimit;
        const isOverYearlyLimit = yearlyLimit > 0 && totalExpense >= yearlyLimit;

        return {
            category,
            isNearMonthlyLimit,
            isOverMonthlyLimit,
            isNearYearlyLimit,
            isOverYearlyLimit,
            monthlyLimit,
            yearlyLimit,
        };
    });

    const hasActiveWarnings = warnings.some(
        ({ isNearMonthlyLimit, isOverMonthlyLimit, isNearYearlyLimit, isOverYearlyLimit }) =>
            isNearMonthlyLimit || isOverMonthlyLimit || isNearYearlyLimit || isOverYearlyLimit
    );


    return (
        <div>
            {/* Aktif bir uyarı varsa başlık gösterilecek */}
            {hasActiveWarnings && (
                <div className="warning-divider">
                    Warnings
                </div>
            )}
            {warnings.map(({ category, isNearMonthlyLimit, isOverMonthlyLimit, isNearYearlyLimit, isOverYearlyLimit, monthlyLimit, yearlyLimit }) => (
                <div key={category} className="text-red-500 text-sm">
                    {/* Aylık limit yaklaşıyor */}
                    {isNearMonthlyLimit && !isOverMonthlyLimit && (
                        <div className="alert">
                            <strong>Warning:</strong> {category} category is nearing its **monthly limit** of {monthlyLimit}₺!
                        </div>
                    )}
                    {/* Aylık limit aşıldı */}
                    {isOverMonthlyLimit && (
                        <div className="alert">
                            <strong>Warning:</strong> {category} category has exceeded its **monthly limit** of {monthlyLimit}₺!
                        </div>
                    )}
                    {/* Yıllık limit yaklaşıyor */}
                    {isNearYearlyLimit && !isOverYearlyLimit && (
                        <div className="alert">
                            <strong>Warning:</strong> {category} category is nearing its **yearly limit** of {yearlyLimit}₺!
                        </div>
                    )}
                    {/* Yıllık limit aşıldı */}
                    {isOverYearlyLimit && (
                        <div className="alert">
                            <strong>Warning:</strong> {category} category has exceeded its **yearly limit** of {yearlyLimit}₺!
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CategoryLimitWarning;