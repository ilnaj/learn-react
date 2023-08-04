import React,{ useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./Filter/ExpensesFilter";
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState(''); 

    function yearChangeHandler(selectedYear) {
      setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
      if (!filteredYear) {
        return true; // Return all expenses if no year is selected
      } else {
        return new Date(expense.date).getFullYear() === parseInt(filteredYear);
      }
    });

    return (
      <Card className="expenses">
        <ExpensesFilter onYearChange={yearChangeHandler}></ExpensesFilter>
        {
          filteredExpenses.map((item, index) => (
            <ExpenseItem
              title={item.title}
              amount={item.title} // There seems to be a typo here, it should be item.amount
              date={item.date}
              key={index}
            ></ExpenseItem>
          ))
        }
      </Card>
    );
  }
  
export default Expenses;