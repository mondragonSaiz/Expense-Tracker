import React from 'react';
import { Chart } from '../Chart/Chart';

const ExpenseChart = (props) =>{
    
    const charDataPoints=[
            { label: 'Jan', value: 0},
            { label: 'Feb', value: 0},
            { label: 'Mar', value: 0},
            { label: 'Apr', value: 0},
            { label: 'May', value: 0},
            { label: 'Jun', value: 0},
            { label: 'Jul', value: 0},
            { label: 'Ago', value: 0},
            { label: 'Sep', value: 0},
            { label: 'Oct', value: 0},
            { label: 'Nov', value: 0},
            { label: 'Dec', value: 0},
        ]

        for (const expense of props.expenses) { // we use a " for (off) loop cause props.expenses is an array, not an object, hence why we wont use a "for(in) loop"
            const expenseMonth = expense.date.getMonth(); //starting at 0 for January
            charDataPoints[expenseMonth].value += expense.amount;
        }
        return <Chart dataPoints={charDataPoints}/>
}

export default ExpenseChart;