const SingleResult = ({ category, score, icon, bgColor, txtColor }) => {
  return (
    <article className="result-wrapper" style={{ background: bgColor }}>
      <div className="flex-wrapper">
        <img src={icon} alt={category} />
        <h4 style={{ color: txtColor }}>{category}</h4>
      </div>
      <div className="score-wrapper">
        <p className="score">
          <span>{score}</span> / 100
        </p>
      </div>
    </article>
  );
};

export default SingleResult;
