import SingleResult from "./SingleResult";
import stats from "../data.json";

function handleClick() {
  console.log("clicked");
}

const Summary = () => {
  return (
    <section className="summary-container">
      <h3>summary</h3>
      <SingleResult />
      <button type="button" onClick={handleClick}>
        Continue
      </button>
    </section>
  );
};

export default Summary;
