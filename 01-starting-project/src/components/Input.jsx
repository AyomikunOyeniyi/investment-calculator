import { useState } from "react"

export default function Input () {
    const [userInput, setUserInput] = useState([0,0,0,0]);

    function handleUserInput(event) {
        setUserInput(event.target.value);
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="init-inv">INITIAL INVESTMENT</label>
                    <input type="number" id="init-inv" value={userInput[0]} onChange={handleUserInput}/>
                </p>
                <p>
                    <label htmlFor="ann-inv">ANNUAL INVESTMENT</label>
                    <input type="number" id="ann-inv" value={userInput[1]} onChange={handleUserInput}/>
                </p>
                <p>
                    <label htmlFor="exp-ret">EXPECTED RETURNS</label>
                    <input type="number" id="exp-ret" value={userInput[2]} onChange={handleUserInput}/>
                </p>
                <p>
                    <label htmlFor="duration">DURATION</label>
                    <input type="number" id="duration" value={userInput[3]} onChange={handleUserInput}/>
                </p>
            </div>
        </section>   
    )
}