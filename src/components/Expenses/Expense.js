import React from 'react';
import ExpenseList from './ExpenseList';
import NewExpense from "./New/NewExpense";

function Expense(){
    const arr = [
        { title: "Car", amount: 18901000, date: new Date('2022-08-01') },
        { title: "Insurance", amount: 18901000, date: new Date('2021-08-01') },
        { title: "Bike", amount: 123000, date: new Date() },
    ];
    const [expenses,setExpenses] = React.useState(arr)

    const addExpenseHandler = (expenseData) => {
    let tempObj = {
        title:expenseData.titleValue,
        amount:expenseData.amountValue,
        date:expenseData.dateValue
    }
    console.log()

    setExpenses((prevExpenses) => [...prevExpenses, tempObj]);
    }

    return (
        <div>
          <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
          <ExpenseList expenses={expenses}></ExpenseList>
        </div>
    )
}

export default Expense;