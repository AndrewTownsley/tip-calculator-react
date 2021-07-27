
const TipDisplay = ({ tipAmount, splitTip, splitTotal, reset }) => {

    return (
        <div className="tip-display">
            <div className="tip-amount">
                <span>Tip Amount</span><span><h2>{tipAmount}</h2></span>
                <p>/ person</p>
            </div>
            <div className="person-tip">
                <span>Tip</span><span><h2>{splitTip}</h2></span>
                <p>/ person</p>
            </div>
            <div className="person-total">
                <span>Total + Tip</span><span><h2>{splitTotal}</h2></span>
                <p>/ person</p>
            </div>
            <button onClick={reset} className="reset-btn">RESET</button>
        </div>
    )
}

export default TipDisplay;