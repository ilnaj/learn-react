import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  let expenseContent = <p>No Expense</p>;
  if (props.expenses.length > 0) {
    expenseContent = props.expenses.map((item, index) => (
      <ExpenseItem
        title={item.title}
        amount={item.amount} // There seems to be a typo here, it should be item.amount
        date={item.date}
        key={index}
      ></ExpenseItem>
    ));
  }

  return <div>{expenseContent} </div>;
}

export default ExpensesList;
