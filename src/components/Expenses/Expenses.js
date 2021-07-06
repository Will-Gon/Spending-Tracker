import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2021');

    const selectedYearHandler = (yearData) => {
        setSelectedYear(yearData)
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    })

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter default={selectedYear} onChangeFilter={selectedYearHandler}/>
                {filteredExpenses.map(item => {
                    return (
                        <ExpenseItem
                        key={item.id} 
                        title={item.title}
                        date={item.date}
                        amount={item.amount}
                        />
                    );
                })}
            </Card>
        </div>
    )
};

export default Expenses;