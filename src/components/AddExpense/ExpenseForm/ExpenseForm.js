import { useState } from 'react';

import "./ExpenseForm.css"

export default function ExpenseForm(props) {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')

    const submitHandler = event => {
        event.preventDefault();
        const expenseData = {
            title: title,
            price: price,
            date: date
        }
        props.onFormSubmit(expenseData);
        setTitle('')
        setPrice('')
        setDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01" value={price} onChange={event => setPrice(event.target.value)} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={event => setDate(event.target.value)} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    )
}