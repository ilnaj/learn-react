import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpense = (props) => {
  const [showForm,setShowForm] = React.useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData
    }

    props.onAddExpense(expenseData)
    showFormHandler()
  }

  function showFormHandler(){
    setShowForm((prevShowForm)=>!prevShowForm)
  }

  let addContent = <button onClick={showFormHandler}>Add New Expense</button>
  if(showForm){
    addContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  }

  return (
    <div className="new-expense">
       {addContent}
    </div>
  );
};

export default NewExpense;
