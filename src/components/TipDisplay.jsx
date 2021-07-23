
const TipDisplay = () => {

    return (
        <div className="tip-display">
            <div className="tip-amount">
                <span>Tip Amount</span><span><h2>$0.00</h2></span>
                <p>/ person</p>
            </div>
            <div className="person-total">
                <span>Total</span><span><h2>$0.00</h2></span>
                <p>/ person</p>
            </div>
            <button className="reset-btn">RESET</button>
        </div>
    )
}

export default TipDisplay;