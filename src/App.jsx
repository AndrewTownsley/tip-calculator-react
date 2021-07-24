import React, { useState } from "react";
// import BillInput from "./components/BillInput";
// import TipButtons from "./components/TipButtons";
// import GuestNumber from "./components/GuestNumber";
// import TipDisplay from "./components/TipDisplay";

const App = () => {
    // Set State for Initial Bill Amount.
    const [bill, setBill] = useState(0);
    // Set State for Initial Tip Amount.
    const [tipAmount, setTipAmount] = useState(0);
    // Set State for Initial Tip Percentage.
    const [percent, setPercent] = useState(0)
    // Set State for Initial Number of People.
    const [people, setPeople] = useState(0);
    // Set State for Total per Person
    const [splitTip, setSplitTip] = useSTate(0);

    const calculateTip = (e) => {
        e.preventDefault();
        bill * percent = tipAmount
        tipAmount / people = splitTip;
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
                    <button className="tip-btn">5%</button>
                    <button className="tip-btn">10%</button>
                    <button className="tip-btn">15%</button>
                    <button className="tip-btn">20%</button>
                    <button className="tip-btn">25%</button>
                    <button className="tip-btn">30%</button>
                </div>
            </div>
            <div className="guest-input">
                <label htmlFor="guest">Number of people</label>
                <input
                    value={people}
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
                <button className="reset-btn">RESET</button>
            </div>
        </div>
    )
}
export default App;