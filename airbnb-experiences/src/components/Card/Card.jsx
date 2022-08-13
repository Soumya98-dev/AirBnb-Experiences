import React from "react";
import "./Card.css";
// import data from "../../Data";

function Card(props) {
  let badgeText;
  if (props.item.location == "Online") {
    badgeText = "Online";
  } else if (props.item.openSpots > 0) {
    badgeText = `No. of tickets: ${props.item.openSpots}`;
  } else if (props.item.openSpots == 0) {
    badgeText = "Sold Out";
  }

  return (
    <div className="card">
      <div className="card-image">
        <span className="sold-out">
          {/* {(props.openSpots && <strong>{props.openSpots}</strong>) || (
            <strong>Sold Out</strong>
          )} */}
          {badgeText}
        </span>
        <img src={props.item.coverImg} alt="" />
      </div>
      <div className="card-rating">
        <img src="public/star.png"></img>
        <span>
          {props.item.stats.rating}{" "}
          <span>
            ({props.item.stats.reviewCount}) . {props.item.location}
          </span>
        </span>
      </div>
      <div className="card-title">
        <p>{props.item.title}</p>
      </div>
      <div className="card-pricing">
        <p>
          <strong>From ${props.item.price}</strong> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
