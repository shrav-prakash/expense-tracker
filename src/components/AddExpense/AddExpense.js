import "./AddExpense.css"

import ExpenseForm from "./ExpenseForm/ExpenseForm"

export default function AddExpense(props) {
    return (
        <div className="add-expense">
            <ExpenseForm onFormSubmit={expenseData => props.onFormSubmit(expenseData)} />
        </div>
    )
}