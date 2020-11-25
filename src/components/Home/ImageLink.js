import React from "react";
import { Link } from "react-router-dom";
import "./carousel.css";

function ImageLink(props) {
	return (
		<div className="foodbox shadow-lg bg-secondary mt-5">
			<Link to={`/${props.type}/${encodeURI(props.title)}`}>
				<img className="foodImg" src={props.image} alt={props.title} />
			</Link>
		</div>
	);
}

export default ImageLink;
