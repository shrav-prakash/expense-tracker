import React from 'react';

import './ExpenseFilter.css';

export default function ExpenseFilter(props) {
    const years = [2022, 2021, 2020, 2019]
    return (
        <div className='expense-filter'>
            <div className='expense-filter__control'>
                <label htmlFor="year">Filter by year</label>
                <select id="year" onChange={event => props.onYearSelect(event.target.value)}>
                    {years.map(year => (
                        <option name={year} value={year} key={year}>{year}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

