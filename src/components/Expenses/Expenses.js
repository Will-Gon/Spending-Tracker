import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2021');

    const selectedYearHandler = (yearData) => {
        setSelectedYear(yearData)
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter default={selectedYear} onChangeFilter={selectedYearHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
};

export default Expenses;