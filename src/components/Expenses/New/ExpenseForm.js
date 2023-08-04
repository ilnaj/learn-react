import React, { useState } from "react";
import "./NewExpenses.css";

const ExpenseForm = (props) => {
  // const [title,setTitle] = useState('');
  // const [amount,setAmount] = useState('');
  // const [date,setDate] = useState('');

  // ALTERNATIVE WAYS
  // setTitle(e.target.value)
  // setValue({
  //     ...value,
  //     inputTitle:e.target.value
  // })

  // const titleChangeHandler = (e) => {
  //     setValue((prevState)=>{
  //         return { ...prevState , inputTitle:e.target.value };
  //     })
  // };

  // const amountChangeHandler = (e) => {
  //     setValue((prevState)=>{
  //         return { ...prevState , inputAmount:e.target.value };
  //     })
  // };

  // const dateChangeHandler = (e) => {
  //     setValue((prevState)=>{
  //         return { ...prevState , inputDate:e.target.value };
  //     })
  // };

  const [value, setValue] = useState({
    titleValue: "",
    amountValue: "",
    dateValue: "",
  });

  const inputChangeHandler = (identifier, value) => {
    setValue((prevState) => {
      return { ...prevState, [`${identifier}Value`]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    value.dateValue = new Date(value.dateValue);

    props.onSaveExpenseData(value);

    // Reset the state values to empty
    setValue({
      titleValue: "",
      amountValue: "",
      dateValue: "",
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={value.titleValue}
            onChange={(e) => inputChangeHandler("title", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={value.amountValue}
            onChange={(e) => inputChangeHandler("amount", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2025-12-31"
            value={value.dateValue}
            onChange={(e) => inputChangeHandler("date", e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
