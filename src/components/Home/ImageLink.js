import React from "react";
import { Link } from "react-router-dom";
import "./carousel.css";

function ImageLink(props) {
  return (
    <div className="foodbox shadow-lg mt-5 bg-secondary">
      <Link to={`/${props.type}/${props.title}`}>
        <img className="foodImg" src={props.image} alt="food img" />
      </Link>
    </div>
  );
}

export default ImageLink;
