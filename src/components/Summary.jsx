import SingleResult from "./SingleResult";
import { stats } from "../data.js";

function handleClick() {
  console.log("clicked");
}

const Summary = () => {
  return (
    <section className="summary-container">
      <h3>summary</h3>
      <div className="single-results-container">
        {stats.map((result) => {
          return <SingleResult key={result.id} {...result} />;
        })}
      </div>

      <button type="button" onClick={handleClick}>
        Continue
      </button>
    </section>
  );
};

export default Summary;
