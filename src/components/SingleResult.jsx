import reaction from "../assets/icon-reaction.svg";

const SingleResult = () => {
  return (
    <article className="result-wrapper">
      <div className="flex-wrapper">
        <img src={reaction} alt="" />
        <h4>reaction</h4>
      </div>
      <div className="score-wrapper">
        <p className="score">
          <span>80</span> / 100
        </p>
      </div>
    </article>
  );
};

export default SingleResult;
