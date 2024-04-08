import Input from "./components/Input";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment : 40000,
    annualInvestment : 1000,
    expectedReturn : 5,
    duration : 10
  });

  function handleUserInput(fieldIdentifier, newValue) {
    setUserInput((formerValue) => {
        return {
          ...formerValue,
          [fieldIdentifier]: +newValue,
        }
    });
  }

  
  return (
    <div>
      <Input inputObject={userInput} changeHandler={handleUserInput}></Input>
      <Results tableObject={{...userInput}}></Results>
    </div>
  )
}

export default App
