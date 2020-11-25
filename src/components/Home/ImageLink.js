import React from "react";
import { Link } from "react-router-dom";
import "./ImageLink.css";

function ImageLink(props) {
	return (
		// <div
		// 	role="radio"
		// 	aria-checked="false"
		// 	tabindex="-1"
		// 	className="foodbox radio-btns__btn shadow-lg bg-secondary mt-5 border border-dark"
		// >
		// 	<Link to={`/${props.type}/${props.id}`}>
		// 		<img className="foodImg" src={props.image} alt={props.title} />

		// 		<div className="middle">
		// 			<div className="text">{props.title}</div>
		// 		</div>
		// 	</Link>
		// </div>

		<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-5">
			<div className="hovereffect">
				<img className="image" src={props.image} alt={props.title} />
				<div className="overlay">
					<Link className="info" to={`/${props.type}/${props.id}`}>
						{props.title}
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ImageLink;
