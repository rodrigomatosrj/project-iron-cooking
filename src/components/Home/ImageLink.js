import React from "react";
import { Link } from "react-router-dom";
import "./carousel.css";

function ImageLink(props) {
  return (
    <div
      role="radio"
      aria-checked="false"
      tabindex="-1"
      className="foodbox radio-btns__btn shadow-lg bg-secondary mt-5 border border-dark"
    >
      <Link to={`/${props.type}/${encodeURI(props.title)}`}>
        <img className="foodImg" src={props.image} alt={props.title} />
      </Link>
    </div>
  );
}

export default ImageLink;
