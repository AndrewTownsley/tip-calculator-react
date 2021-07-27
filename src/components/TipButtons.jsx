
const TipButtons = ({ setPercent }) => {

    return (
        <div className="tip-btn-container">
            <p>select tip %</p>
            <div className="tip-btns">
                <button onClick={(e) => setPercent(.05)} className="tip-btn">5%</button>
                <button onClick={(e) => setPercent(.10)} className="tip-btn">10%</button>
                <button onClick={(e) => setPercent(.15)} className="tip-btn">15%</button>
                <button onClick={(e) => setPercent(.10)} className="tip-btn">20%</button>
                <button onClick={(e) => setPercent(.25)} className="tip-btn">25%</button>
                <button onClick={(e) => setPercent(.30)} className="tip-btn">30%</button>
                <input type="number" placeholder="custom" />
            </div>
        </div>
    )
}

export default TipButtons;