import React, { useState } from 'react';
import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';
export const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);

    const onSaveExpenseData = (enteredExpenseData) =>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setEditing(false);
    };

    const editingHandler = () =>{
        setEditing(true);
    };

   const cancelButtonHandler = () =>{
       setEditing(false);
   }
    return (
        <div className='new-expense'>
            {!isEditing && <button  onClick={editingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={cancelButtonHandler}/>}
        </div>
    );
};
