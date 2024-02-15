import React, { useState } from "react";
import "../styles/App.css";
import arr from "./Data";

const App = () => {
  let [next, setnext] = useState(0);

  function handlePreviousClick() {
    if (next === 0) {
      setnext(arr.length - 1);
    } else {
      setnext(next - 1);
    }
  }

  function hangleNextClick() {
    if (next === arr.length - 1) {
      setnext(0);
    } else {
      setnext(next + 1);
    }
  }

  function handleRandomClick() {
    setnext(Math.floor(Math.random() * arr.length));
  }

  return (
    <div className="container">
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
          <button className="prev-btn" onClick={handlePreviousClick}>
            Previous
          </button>
          <button className="next-btn" onClick={hangleNextClick}>
            Next
          </button>
          <button className="random-btn" onClick={handleRandomClick}>
            surprise me
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
