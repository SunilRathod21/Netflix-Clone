import React from "react";
import "./SubscriptionRow.css";

function SubscriptionRow({ type, quality }) {
  return (
    <div className="subscriptionRow">
      <div className="subscriptionRow__info">
        <h2>{type}</h2>
        <p>{quality}</p>
      </div>
      <button>Subscribe</button>
    </div>
  );
}

export default SubscriptionRow;
