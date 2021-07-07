import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = (value) => {
        setShowForm(value);
        //console.log(value)
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
    };

    return (
        <div className="new-expense">
            {!showForm && <button onClick={() => handleShowForm(true)}>Add New Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClose={handleShowForm}/>}
        </div>
    )
};

export default NewExpense;