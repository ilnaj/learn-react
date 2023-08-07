import React,{ useState } from "react";
import Card from '../../UI/Card';
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpenseChart from "../../Chart/Chart"
import ExpenseList from './ExpenseList'
import '../Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState(''); 

    function yearChangeHandler(selectedYear) {
      setFilteredYear(selectedYear);
    }

    let filteredExpenses = props.expenses.filter(expense => {
      if (!filteredYear) {
        return true; // Return all expenses if no year is selected
      } else {
        return new Date(expense.date).getFullYear() === parseInt(filteredYear);
      }
    });

    let itemsChart = [
      {label:'Jan',value:0},
      {label:'Feb',value:0},
      {label:'Mar',value:0},
      {label:'Apr',value:0},
      {label:'Mei',value:0},
      {label:'Jun',value:0},
      {label:'Jul',value:0},
      {label:'Aug',value:0},
      {label:'Sep',value:0},
      {label:'Oct',value:0},
      {label:'Nov',value:0},
      {label:'Dec',value:0}
    ]

    for(let exp of filteredExpenses){
      const expenseMonth = new Date(exp.date).getMonth();
      itemsChart[expenseMonth].value += exp.amount;
    }

    return (
      <Card className="expenses">
        <ExpensesFilter onYearChange={yearChangeHandler}></ExpensesFilter>
        <ExpenseChart items={itemsChart}></ExpenseChart>
        <ExpenseList expenses={filteredExpenses}></ExpenseList>
      </Card>
    );
  }
  
export default Expenses;