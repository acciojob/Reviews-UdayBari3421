import React, { useState } from "react";
import "../styles/App.css";
import arr from "./Data";

const App = () => {
  let [next, setNext] = useState(0);

  return (
    <div className="container">
      <h1 id="review-heading">Our Reviews</h1>
      <div className="review">
        <div>
          <img className="person-img" src={arr[next].image}></img>
        </div>
        <div>
          <span className="author" id={`author-${next + 1}`}>
            <h2>Name: {arr[next].name}</h2>
          </span>
          <h3 className="job">Job: {arr[next].job}</h3>
          <p className="info">Text: {arr[next].text}</p>
        </div>
        <div>
          <button
            className="prev-btn"
            onClick={() => (next == 0 ? setNext(0) : setNext(next - 1))}
          >
            Previous
          </button>
          <button
            className="next-btn"
            onClick={() =>
              next == arr.length - 1 ? setNext(next) : setNext(next + 1)
            }
          >
            Next
          </button>
          <button
            className="random-btn"
            onClick={() => setNext(Math.floor(Math.random() * arr.length))}
          >
            surprise me
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
