
const TipDisplay = ({ tipAmount, splitTip, splitTotal, reset }) => {

    return (
        <div className="tip-display">
            <div className="tip-amount">
                <span>
                    <h3>Tip Amount</h3>
                    <p>/ person</p>
                </span>
                <span><h3>${tipAmount}</h3></span>
            </div>
            <div className="person-tip">
                <span>
                    <h3>Tip</h3>
                    <p>/ person</p>
                </span>
                <span><h3>${splitTip}</h3></span>
            </div>
            <div className="person-total">
                <span>
                    <h3>Total + Tip</h3>
                    <p>/ person</p>
                </span>
                <span><h3>${splitTotal}</h3></span>
            </div>
            <button onClick={reset} className="reset-btn">RESET</button>
        </div>
    )
}

export default TipDisplay;