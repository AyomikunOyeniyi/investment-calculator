export default function Input ({inputObject, changeHandler}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="init-inv">INITIAL INVESTMENT</label>
                    <input type="number" id="init-inv" value={inputObject.initialInvestment} onChange={(event) => changeHandler('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="ann-inv">ANNUAL INVESTMENT</label>
                    <input type="number" id="ann-inv" value={inputObject.annualInvestment} onChange={(event) => changeHandler('annualInvestment', event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="exp-ret">EXPECTED RETURNS</label>
                    <input type="number" id="exp-ret" value={inputObject.expectedReturn} onChange={(event) => changeHandler('expectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="duration">DURATION</label>
                    <input type="number" id="duration" value={inputObject.duration} onChange={(event) => changeHandler('duration', event.target.value)} min={1}/>
                </p>   
            </div>
        </section>   
    )
}