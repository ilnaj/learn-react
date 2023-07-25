import Expenses from "./components/Expenses";
import "./App.css";

function App() {
  const expenses = [
    { title: "Car Insurance A", amount: 18901000, date: new Date() },
    { title: "Car Insurance B", amount: 18901000, date: new Date() },
    { title: "Car Insurance C", amount: 18901000, date: new Date() },
    { title: "Car Insurance D", amount: 18901000, date: new Date() },
    { title: "Car Insurance E", amount: 18901000, date: new Date() },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
