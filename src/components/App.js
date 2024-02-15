import React, { useState } from "react";
import "../styles/App.css";
import arr from "./Data";

const App = () => {
  let [next, setnext] = useState(0);

  return (
    <div>
      <h1 id="review-heading">Our Reviews</h1>
      <div className="review">
        <div>
          <img className="person-img" src={arr[next].image}></img>
        </div>
        <div>
          <span className="author" id={"author-" + (next + 1)}>
            Name: {arr[next].name}
          </span>
          <p className="job">Job: {arr[next].job}</p>
          <p className="info">Text: {arr[next].text}</p>
        </div>
        <div>
          <button
            className="prev-btn"
            onClick={() => (next == 0 ? setnext(0) : setnext(next - 1))}
          >
            Previous
          </button>
          <button
            className="next-btn"
            onClick={() =>
              arr.length - 1 == next ? setnext(next) : setnext(next + 1)
            }
          >
            Next
          </button>
          <button
            className="random-btn"
            onClick={() => setnext(Math.floor(Math.random() * arr.length))}
          >
            surprise me
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
