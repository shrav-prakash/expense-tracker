import { useState } from "react";

import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import Chart from "./Chart/Chart";

export default function Expenses({ expenses }) {
    const [year, setYear] = useState('2022')
    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === year)

    const expensesContent = filteredExpenses.length === 0 ?
        (<h2 className="expenses-fallback">No Expenses Found</h2>) :
        (filteredExpenses.map(expense => (
            <ExpenseItem
                title={expense.title}
                price={expense.amount}
                date={expense.date}
                key={expense.id}
            />
        )))

    return (
        <Card className="expenses">
            <ExpenseFilter onYearSelect={selectedYear => setYear(selectedYear)} />
            <Chart expenses={filteredExpenses} />
            {expensesContent}
        </Card>
    )
}