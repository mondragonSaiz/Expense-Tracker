import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';
import ExpenseFilter from './ExpenseFilter';
import './ExpenseItemList.css';
import ExpenseList from './ExpenseList';
const ExpenseItemList = (props) => {

    //our initial state "filteredYear" will initialize on '2020'
    const [filteredYear, setEnteredYear] = useState('2020');

    const filterChangeHandler = (enteredYear) =>{
       setEnteredYear(enteredYear);
       console.log(enteredYear);
    };

    
    // fucntion to render our items or expenses depending on our condition that the date of the expense should match the filtered year to display it.
    //our array of expenses "expenses" will pass from App.js to ExpenseItemList.js by the method of "props.expenses, inthis order, we will pass this fucntion
    //to both of our components "ExpenseChart" and "ExpenseList".
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;

    })

 // we'll display our content, so we can see a message of "No content added" when there's nothing in our string of expenses.
    

   
    return (
        <div>
           
        <Card className='expenses'>
           <ExpenseFilter onChangeFilter={filterChangeHandler} selectedValue={filteredYear}/>
           <ExpenseChart expenses={filteredExpenses}/>
           <ExpenseList expenses={filteredExpenses}/>
        </Card>
        </div>
        //<ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}/>
        //<ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}/>
        //<ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}/>
        //<ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}/>
    )
}

export default ExpenseItemList


//OPTION 1
//{filteredExpenses.length === 0 ? <p>No expenses added</p> 
//  : filteredExpenses.map((expense) => 
//  <ExpenseItem 
//   key={expense.id}
//   title={expense.title} 
//   amount={expense.amount} 
//  date={expense.date}/>
//  )}


//OPTION 2
//{filteredExpenses.length === 0 && <p>No expenses added</p>}
//           {filteredExpenses.length > 0 &&
//             filteredExpenses.map((expense) => 
//             <ExpenseItem 
//             key={expense.id}
//             title={expense.title} 
//             amount={expense.amount} 
//             date={expense.date}/>
//           )}