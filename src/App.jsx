import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TipButtons from "./components/TipButtons";
import TipDisplay from "./components/TipDisplay";

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
            <Header />
            <div className="calculator">
                <div className="bill-input-container">
                    <TipButtons setPercent={setPercent} />
                    <form className="bill-input">
                        <div className="input-section-bill">
                            <label htmlFor="bill">Bill Amount</label>
                            <input
                                value={bill}
                                onChange={(e) => setBill(e.target.value)}
                                // type="text"
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
                </div>
            </div>
            <TipDisplay
                tipAmount={tipAmount}
                splitTip={splitTip}
                splitTotal={splitTotal}
                reset={reset}
            />
        </div>
    )
}
export default App;



        // const tipAmount = bill * percent;
        // const splitTip = tipAmount / people;