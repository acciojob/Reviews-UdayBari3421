import React, { useState } from "react";
import "../styles/App.css";
import arr from "./Data";

const App = () => {
  let [next, setnext] = useState(0);

  function handlePreviousClick() {
    if (next == 0) {
      setnext(3);
    } else {
      setnext(next - 1);
    }
  }

  function hangleNextClick() {
    if (next == 3) {
      setnext(0);
    } else {
      setnext(next + 1);
    }
  }

  function handleRandomClick() {
    let randomnext;

    do {
      randomnext = Math.floor(Math.random() * arr.length); // Generate a random number between 0 and 3
    } while (randomnext === next); // Loop until the random next is different from the current value

    setnext(randomnext);
    console.log(randomnext);
  }

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
