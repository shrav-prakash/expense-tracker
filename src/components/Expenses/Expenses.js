import { useState } from "react";

import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

export default function Expenses({ expenses }) {
    const [year, setYear] = useState('2022')
    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === year)
    return (
        <Card className="expenses">
            <ExpenseFilter onYearSelect={selectedYear => setYear(selectedYear)} />
            {
                filteredExpenses.map(expense => (
                    <ExpenseItem
                        title={expense.title}
                        price={expense.amount}
                        date={expense.date}
                        key={expense.id}
                    />
                ))
            }
        </Card>
    )
}