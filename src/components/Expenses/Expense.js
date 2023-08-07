import React from 'react';
import ExpenseBody from './Body/ExpenseBody';
import NewExpense from "./New/NewExpense";

function Expense(){
    const arr = [
        { title: "Car", amount: 901000, date: new Date('2022-03-01') },
        { title: "Insurance", amount: 11000, date: new Date('2021-08-01') },
        { title: "Bike", amount: 123000, date: new Date() },
    ];
    const [expenses,setExpenses] = React.useState(arr)

    const addExpenseHandler = (expenseData) => {
    let tempObj = {
        title:expenseData.titleValue,
        amount:+expenseData.amountValue,
        date:expenseData.dateValue
    }

    setExpenses((prevExpenses) => [...prevExpenses, tempObj]);
    }

    return (
        <div>
          <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
          <ExpenseBody expenses={expenses}></ExpenseBody>
        </div>
    )
}

export default Expense;