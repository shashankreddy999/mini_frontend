import React from "react";
import "../styles/ResultPage.scss";
import modelloss from "../assets/images/model loss.png";
import modelacc from "../assets/images/model accuracy.png";
function Result(props) {
  return props.prob ? (
    <div className="ResultPage">
      <div className="results">
        <h1>Results</h1>

        <h2 className="Result">Result:</h2>
        {parseFloat(props.prob) > 0.5 ? (
          <p>Signs of Tumor are visible</p>
        ) : (
          <p>No Signs of Tumor</p>
        )}
        <h2 className="prob">Probability of Tumor:</h2>
        <p>{props.prob}</p>
      </div>
      <div className="graph">
        <h1>Accuracy of the Model Used</h1>
        <img src={modelloss} alt="model loss"></img>
        <img src={modelacc} alt="model accuracy"></img>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default Result;
