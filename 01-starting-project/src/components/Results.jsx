import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Results({tableObject}) {
    const investmentResults = calculateInvestmentResults(tableObject);
    const initialInvestment = investmentResults[0].valueEndOfYear - investmentResults[0].interest - investmentResults[0].annualInvestment;
    
    return(
        <section>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {investmentResults.map((result) => {
                        return (
                            <tr key={result.year}>
                                <td>{result.year}</td>
                                <td>{formatter.format(result.valueEndOfYear)}</td>
                                <td>{formatter.format(result.interest)}</td>
                                <td>{formatter.format(result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment)}</td>
                                <td>{formatter.format(result.valueEndOfYear - result.interest)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}