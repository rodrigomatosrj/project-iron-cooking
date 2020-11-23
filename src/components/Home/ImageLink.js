import React from "react";
import {Link} from "react-router-dom";


function ImageLink(props) {
	return (
		<div style={{ width: "18rem" }} className="shadow-lg mt-5">
			<Link to={`/${props.type}/${props.title}`}>
				<img src={props.image} />
			</Link>
		</div>
	);
}

export default ImageLink;
