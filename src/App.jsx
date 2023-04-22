import "./App.css";
import stats from "./data.json";
import TotalResult from "./components/TotalResult";
import Summary from "./components/Summary";

function App() {
  return (
    <main>
      <TotalResult />
      <Summary />
    </main>
  );
}

export default App;
