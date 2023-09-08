import ExpenseDate from "./ExpenseDate/ExpenseDate"
import Card from "../../Card/Card";

import './ExpenseItem.css'

export default function ExpenseItem({ title, price, date }) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${price}</div>
            </div>
        </Card>
    )
}