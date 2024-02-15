import React, { useState } from "react";
import arr from "./Data";
import "../styles/App.css";
const App = () => {
  const [next, setNext] = useState(0);

  return (
    <div className="review container">
      <h2 id="review-heading">Our Reviews</h2>
      <div className="review">
        <div className="author" id={"author-" + arr[next].id}>
          <h2>{arr[next].name}</h2>
          <h2 className="job" id="job">
            {arr[next].job}
          </h2>
          <h3 className="info" id="info">
            {arr[next].text}
          </h3>
          <img
            className="person-img"
            id="person-img"
            src={arr[next].image}
            alt={arr[next].name}
          />
        </div>

        <div className="buttons">
          <button
            className="prev-btn"
            id="prev-btn"
            onClick={() => (next === 0 ? setNext(0) : setNext(next - 1))}
          >
            Previous
          </button>
          <button
            id="next-btn"
            className="next-btn"
            onClick={() =>
              next === arr.length - 1 ? setNext(next) : setNext(next + 1)
            }
          >
            Next
          </button>
        </div>
        <button
          id="random-btn"
          className="random-btn"
          onClick={() => setNext(Math.floor(Math.random() * arr.length))}
        >
          surprise me
        </button>
      </div>
    </div>
  );
};

export default App;
