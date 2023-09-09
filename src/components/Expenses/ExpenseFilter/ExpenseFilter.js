import React from 'react';

import './ExpenseFilter.css';

export default function ExpenseFilter(props) {
    const years = [2022, 2021, 2020, 2019]
    return (
        <div className='expense-filter'>
            <div className='expense-filter__control'>
                <label>Filter by year</label>
                <select onChange={event => props.onYearSelect(event.target.value)}>
                    {years.map(year => (
                        <option value={year} key={year}>{year}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

