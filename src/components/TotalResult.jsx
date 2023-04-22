import { stats } from "../data.js";

function calculateTotals() {
  let totalScore = 0;
  for (let i = 0; i < stats.length; i++) {
    totalScore += stats[i].score;
  }
  return Math.round(totalScore / stats.length);
}

const Totals = () => {
  return (
    <section className="totals-container">
      <h2>your result</h2>
      <div className="total-score-circle">
        <p className="total-score">{calculateTotals()}</p>
        <p className="sub-score">of 100</p>
      </div>
      <p className="motivator">Great</p>
      <p className="descr">
        Your performance exceed 65% <br /> of the people conducting the
        <br /> test here!
      </p>
    </section>
  );
};

export default Totals;
