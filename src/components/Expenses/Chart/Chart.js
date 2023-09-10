import ChartItem from "./ChartItem/ChartItem";

import './Chart.css'

export default function Chart({ expenses }) {
    const monthlyExpenses = [
        { month: 'Jan', value: 0 },
        { month: 'Feb', value: 0 },
        { month: 'Mar', value: 0 },
        { month: 'Apr', value: 0 },
        { month: 'May', value: 0 },
        { month: 'Jun', value: 0 },
        { month: 'Jul', value: 0 },
        { month: 'Aug', value: 0 },
        { month: 'Sep', value: 0 },
        { month: 'Oct', value: 0 },
        { month: 'Nov', value: 0 },
        { month: 'Dec', value: 0 },
    ]

    for (const expense of expenses) {
        monthlyExpenses[expense.date.getMonth()].value += expense.amount
    }

    const maxValue = Math.max(...monthlyExpenses.map(e => e.value))

    return (
        <div className="chart">
            {monthlyExpenses.map(m => <ChartItem key={m.month} month={m.month} val={m.value} maxVal={maxValue} />)}
        </div>
    )
}