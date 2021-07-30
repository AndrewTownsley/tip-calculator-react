
const TipDisplay = ({ tipAmount, splitTip, splitTotal, reset }) => {

    return (
        <div className="tip-display">
            <div className="tip-amount">
                <span>
                    <h4>Tip Amount</h4>
                    <p>/ person</p>
                </span>
                <span><h2>${tipAmount}</h2></span>
            </div>
            <div className="person-tip">
                <span>
                    <h4>Tip</h4>
                    <p>/ person</p>
                </span>
                <span><h2>${splitTip}</h2></span>
            </div>
            <div className="person-total">
                <span>
                    <h4>Total + Tip</h4>
                    <p>/ person</p>
                </span>
                <span><h2>${splitTotal}</h2></span>
            </div>
            <button onClick={reset} className="reset-btn">RESET</button>
        </div>
    )
}

export default TipDisplay;