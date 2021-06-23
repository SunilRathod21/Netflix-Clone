import React from "react";
import "./Jumbotron.css";
function Jumbotron({ heading, text, imgUrl, isReverse = false }) {
  return (
    <div className={`jumbotron ${isReverse && "reverse__"}`}>
      <div className="jumbotron__info">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
      <img src={imgUrl} alt="" />
    </div>
  );
}

export default Jumbotron;
