import React from "react";

const InputForm = (props) => {
  const initInput = {
    "current-savings": 0,
    "yearly-contribution": 0,
    "expected-return": 0,
    'duration': 0,
  };

  const [userInput, setUserInput] = React.useState(initInput);

  function submitHandler(e) {
    e.preventDefault();
    props.onSubmit(userInput);
  }

  function resetHandler() {
    setUserInput((prevInput) => 
      prevInput = initInput
    );
  }

  function changeHandler(input, value) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  }

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(e) => {
              changeHandler("current-savings", e.target.value);
            }}
            value={userInput['current-savings']}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(e) => {
              changeHandler("yearly-contribution", e.target.value);
            }}
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(e) => {
              changeHandler("expected-return", e.target.value);
            }}
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(e) => {
              changeHandler("duration", e.target.value);
            }}
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
