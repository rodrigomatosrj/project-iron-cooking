import React from "react";
import { Link } from "react-router-dom";

function ImageLink(props) {
  return (
    <div style={{ width: "18rem" }} className="shadow-lg mt-5">
      <Link to={`/${props.type}/${props.title}`}>
        <img className="img-thumbnail" src={props.image} alt="food img" />
      </Link>
    </div>
  );
}

export default ImageLink;
