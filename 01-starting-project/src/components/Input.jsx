import { useState } from "react"

export default function Input () {
    const [userInput, setUserInput] = useState({
        initialInvestment : '40000',
        annualInvestment : '10000',
        expectedReturns : '2000',
        duration : '10'
    });

    function handleUserInput(fieldIdentifier, newValue) {
        setUserInput((formerValue) => {
            return {
                ...formerValue,
                [fieldIdentifier] : newValue,
            }
        });
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="init-inv">INITIAL INVESTMENT</label>
                    <input type="number" id="init-inv" value={userInput.initialInvestment} onChange={(event) => handleUserInput('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="ann-inv">ANNUAL INVESTMENT</label>
                    <input type="number" id="ann-inv" value={userInput.annualInvestment} onChange={(event) => handleUserInput('annualInvestment', event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="exp-ret">EXPECTED RETURNS</label>
                    <input type="number" id="exp-ret" value={userInput.expectedReturns} onChange={(event) => handleUserInput('expectedReturns', event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="duration">DURATION</label>
                    <input type="number" id="duration" value={userInput.duration} onChange={(event) => handleUserInput('duration', event.target.value)}/>
                </p>
            </div>
        </section>   
    )
}