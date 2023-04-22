function handleClick() {
  console.log("clicked");
}

const Summary = () => {
  return (
    <section className="summary-container">
      <h3>summary</h3>
      <button type="button" onClick={handleClick}>
        Continue
      </button>
    </section>
  );
};

export default Summary;
