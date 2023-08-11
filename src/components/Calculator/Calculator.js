import React,{useState} from "react";

import Header from "./Header/Header";
import InputForm from "./InputForm/InputForm";
import ResultTable from "./ResultTable/ResultTable";
import './Calculator.css';

function Calculator() {
    const [userInput, setUserInput] = useState(null);

    const calculateHandler = (userInput) => {
      setUserInput(userInput);
    };
  
    const yearlyData = [];
  
    if (userInput) {
      let currentSavings = +userInput['current-savings'];
      const yearlyContribution = +userInput['yearly-contribution'];
      const expectedReturn = +userInput['expected-return'] / 100;
      const duration = +userInput['duration'];
  
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
    }
}
  
  return (
    <div className="calculator-body">
      <Header></Header>
      <InputForm onSubmit={calculateHandler}></InputForm>

      
      {!userInput && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
      {userInput && <ResultTable data={yearlyData} initialInvestment={userInput['current-savings']} />}
    </div>
  );
}

export default Calculator;
