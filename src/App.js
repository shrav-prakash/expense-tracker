import AddExpense from "./components/AddExpense/AddExpense";
import Expenses from "./components/Expenses/Expenses";

import { useState } from "react";

const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export default function App() {
  const [expenses, setExpenses] = useState(initialExpenses)

  const addExpense = newExpense => {
    newExpense.id = 'e' + expenses.length + 1
    newExpense.date = new Date(newExpense.date)
    setExpenses(prevExpenses => [newExpense, ...prevExpenses])
  }

  return (
    <div>
      <AddExpense onFormSubmit={addExpense} />
      <Expenses expenses={expenses} />
    </div>

  )
}
