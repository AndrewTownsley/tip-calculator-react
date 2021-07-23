import BillInput from "./components/BillInput";
import TipButtons from "./components/TipButtons";
import GuestNumber from "./components/GuestNumber";
import TipDisplay from "./components/TipDisplay";

const App = () => {

    return (
        <div className="App">
            <BillInput />
            <TipButtons />
            <GuestNumber />
            <TipDisplay />
        </div>
    )
}
export default App;