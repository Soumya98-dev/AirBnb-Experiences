import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <span className="sold-out">SOLD OUT</span>
        <img src="public/katie-zaferes.png" alt="" />
      </div>
      <div className="card-rating">
        <img src="public/star.png"></img>
        <span>
          5.0 <span>(6) .USA</span>
        </span>
      </div>
      <div className="card-title">
        <p>Life lessons with Katie Zaferes</p>
      </div>
      <div className="card-pricing">
        <p>
          <strong>From $136</strong> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
