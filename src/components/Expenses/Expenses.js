import React from 'react';
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import './Expenses.css'

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.expenses.map(item => {
                return (
                    <ExpenseItem 
                    title={item.title}
                    date={item.date}
                    amount={item.amount}
                    />
                );
            })};
        </Card>
    )
};

export default Expenses;