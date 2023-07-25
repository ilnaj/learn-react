import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {


  return (
    <div className="expenses">
      {
        props.items.map((item,index)=>(
          <ExpenseItem
            title={item.title}
            amount={item.title}
            date={item.date}
            key={index}
          ></ExpenseItem>
        ))
      }
    </div>
  );
}

export default Expenses;
