import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

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
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
};

export default Expenses;