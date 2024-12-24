import "./index.css"

function GreetingCard() {
    return (
      <div className="cards-wrapper">
        <div className="card">
          <h2>Congratulations</h2>
          <p className="card-desc">
            I'm so thrilled to hear that you reached your goal. You inspire by
            having such ambitious dreams, then putting in the hard work to
            achieve them
          </p>
          <span className="card-emoji">🎉</span>
        </div>
      </div>
    );
}

export default GreetingCard;