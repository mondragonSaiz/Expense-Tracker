import React from 'react';
import './ExpenseFilter.css';


const ExpenseFilter = (props) => {
  // our function, in this case "selectedYearHandler" will take the event of our "<select><select/>" component,
  // and whenever the onChange event is triggered, it will trigger as well our "onChangeFilter" function, which is passed through props,
  // from our "ExpenseItemList" component, in this order we will pass the value of the event by drilling "event.target.value". 
    const selectedYearHandler = (event) =>{
       props.onChangeFilter(event.target.value);

    };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectedValue} onChange={selectedYearHandler} >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;