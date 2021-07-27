import React, { useState } from "react";
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
    // Set State for the reset Btn.  Sart with the button disabled, then enable it onClick.  reset all the initial values.

    const calculateTip = (e) => {
        e.preventDefault();

        if (bill !== '' && percent !== '') {
            setTipAmount((bill * percent) * 10);
            setSplitTip((tipAmount / people) * 10)
        }
    }

    const reset = () => {
        setBill('')
        setPercent('')
        setPeople(1)
    }

    return (
        <div className="App">
            <form onChange={calculateTip} className="bill-input">
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
                <div className="person-total">
                    <span>Total</span><span><h2>{splitTip}</h2></span>
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