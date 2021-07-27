import React, { useState, useEffect } from "react";
// import BillInput from "./components/BillInput";
// import TipButtons from "./components/TipButtons";
// import GuestNumber from "./components/GuestNumber";
// import TipDisplay from "./components/TipDisplay";

const App = () => {
    // Set State for Initial Bill Amount.
    const [bill, setBill] = useState('');
    // Set State for Initial Tip Percentage.
    const [percent, setPercent] = useState('')
    // Set State for Initial Number of People.
    const [people, setPeople] = useState(1.0);

    // Set State for Initial Tip Amount.
    const [tipAmount, setTipAmount] = useState(0);
    // Set State for Total per Person
    const [splitTip, setSplitTip] = useState(0);
    // Set State for total bill plus total tip per person.
    const [splitTotal, setSplitTotal] = useState(0);

    useEffect(() => {

        if (bill !== '' && percent !== '') {
            setTipAmount(bill * percent);
            setSplitTip(tipAmount / people);
            setSplitTotal((bill / people) + splitTip)
        }
    }, [bill, people, percent, splitTip, tipAmount])

    const reset = () => {
        setBill('');
        setPercent('');
        setPeople(1);
        setTipAmount(0);
        setSplitTip(0);
    }

    return (
        <div className="App">
            <form className="bill-input">
                <label htmlFor="bill">Bill Amount</label>
                <input
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    // type="text"
                    name="bill-amount"
                    id="bill"
                    placeholder="$" />
            </form>
            <div className="tip-btn-container">
                <p>select tip %</p>
                <div className="tip-btns">
                    <button onClick={(e) => setPercent(.05)} className="tip-btn">5%</button>
                    <button onClick={(e) => setPercent(.10)} className="tip-btn">10%</button>
                    <button onClick={(e) => setPercent(.15)} className="tip-btn">15%</button>
                    <button onClick={(e) => setPercent(.10)} className="tip-btn">20%</button>
                    <button onClick={(e) => setPercent(.25)} className="tip-btn">25%</button>
                    <button onClick={(e) => setPercent(.30)} className="tip-btn">30%</button>
                </div>
            </div>
            <div className="guest-input">
                <label htmlFor="guest">Number of people</label>
                <input
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    type="text"
                    name="guest"
                    id="guest"
                    placeholder="$" />
            </div>
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
        </div>
    )
}
export default App;



        // const tipAmount = bill * percent;
        // const splitTip = tipAmount / people;