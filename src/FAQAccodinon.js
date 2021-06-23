import React, { useState } from "react";
import { data } from "./FAQData";
import "./FAQAccordion.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
function FAQAccodinon() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked questions is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <div className="accordion">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion__container">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div className="accordion__wrap" onClick={() => toggle(index)}>
                <h1>{item.question}</h1>
                {clicked === index ? <RemoveIcon /> : <AddIcon />}
              </div>
              {clicked === index ? (
                <div className="accordion__dropDown">
                  <p>{item.ans}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQAccodinon;
