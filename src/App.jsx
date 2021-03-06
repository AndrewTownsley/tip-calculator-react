import React, { useState, useEffect } from "react";
import "./App.css";
import TipButtons from "./components/TipButtons";
import TipDisplay from "./components/TipDisplay";

const App = () => {
    const [bill, setBill] = useState('');
    const [percent, setPercent] = useState('')
    const [people, setPeople] = useState(1.0);
    const [tipAmount, setTipAmount] = useState(0);
    const [splitTip, setSplitTip] = useState(0);
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
        setSplitTotal(0);
    }

    return (
        <div className="App">
            <div className="calculator">
                <h1>Quick Tipper</h1>
                <form className="bill-input">
                    <div className="input-section-bill">
                        <label htmlFor="bill">Bill Amount</label>
                        <input
                            value={bill}
                            onChange={(e) => setBill(e.target.value)}
                            name="bill-amount"
                            id="bill"
                            placeholder="$" />
                    </div>
                    <div className="input-section-guest">
                        <label htmlFor="guest">Number of people</label>
                        <input
                            value={people}
                            onChange={(e) => setPeople(e.target.value)}
                            type="text"
                            name="guest"
                            id="guest"
                            placeholder="$" />
                    </div>
                </form>
                <div className="bill-input-container">
                    <TipButtons setPercent={setPercent} />

                </div>
                <TipDisplay
                    tipAmount={tipAmount}
                    splitTip={splitTip}
                    splitTotal={splitTotal}
                    reset={reset}
                />
            </div>
        </div>
    )
}
export default App;
