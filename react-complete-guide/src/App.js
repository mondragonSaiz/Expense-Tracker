import React, { useState } from 'react';
import ExpenseItemList from "./components/Expenses/ExpenseItemList";
import { NewExpense } from './components/NewExpense/NewExpense';

//our "initial state"
const DUMMY_EXPENSES= [
  { 
    id:'e1',
    title: "Figures",
    amount: 500, 
    date: new Date(2019, 2, 1) 
  },
  { id:'e2',
    title: "Gas", 
    amount: 400, 
    date: new Date(2021, 3, 8) 
},
  { id:'e3',
    title: "Power",
    amount: 200, 
    date: new Date(2022, 4, 7) 
  },
  { id:'e4',
    title: "Otaku Figures",
    amount:1000,
    date: new Date(2022, 4, 30)
  },
];


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

//New data incoming Handler
  const addExpenseHandler = (expense) =>{
  setExpenses(prevState => {
    return [expense, ...prevState];
  });
};

  

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseItemList expenses={expenses}/>
    </div> 
  );
};

export default App;

//onAddExpense is a function which will be triggered whenever data is saved on
// "<NewExpense/>", this function is called on NewExpense component.-"props.onAddExpense()" 