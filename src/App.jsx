import React, { useState } from "react";
import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Results from "./components/Results";
import { CalcualteFutureValue, formatter } from "./utils/Investment";

function App() {
  const [values, setValues] = useState({
    InitialInvestment: 10000,
    AnnualInvestment: 1000,
    ExpectedReturn: 6,
    Duration: 10,
  });

  const inputIsValid = values.Duration > 0;

  // function to handle calculate button
  function SetValues(inputIdentifier, newValue) {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [inputIdentifier]: +newValue,
      };
    });
    console.log(values);
  }

  return (
    <div className=" space-y-5 ">
      <Header />
      <UserInputs OnChange={SetValues} values={values} />
      {inputIsValid ? (
        <Results values={values} />
      ) : (
        <p className=" text-black font-bold text-lg text-center ">
          Please Enter a Valid Duration
        </p>
      )}
    </div>
  );
}

export default App;
