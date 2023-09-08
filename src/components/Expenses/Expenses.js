import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

import './Expenses.css'

export default function Expenses({ expenses }) {
    return (
        <Card className="expenses">
            {
                expenses.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        price={expense.amount}
                        date={expense.date}
                    />
                ))
            }
        </Card>
    )
}