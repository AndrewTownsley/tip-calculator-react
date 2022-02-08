
const TipButtons = ({ setPercent }) => {

    return (
        <div className="tip-btn-container">
            <p>select tip %</p>
            <div className="tip-btns">

                <button onClick={(e) => setPercent(.15)} className="tip-btn">15%</button>
                <button onClick={(e) => setPercent(.18)} className="tip-btn">18%</button>
                <button onClick={(e) => setPercent(.20)} className="tip-btn">20%</button>
                <button onClick={(e) => setPercent(.25)} className="tip-btn">25%</button>
                <button onClick={(e) => setPercent(.30)} className="tip-btn">30%</button>
                <input onChange={(e) => setPercent(e.target.value * .01)} type="number" placeholder="Custom %" />
            </div>
        </div>
    )
}

export default TipButtons;
