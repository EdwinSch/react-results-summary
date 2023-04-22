import "./App.css";
import stats from "./data.json";
import Totals from "./components/Totals";
import Summary from "./components/Summary";

function App() {
  return (
    <main>
      <Totals />
      <Summary />
    </main>
  );
}

export default App;
