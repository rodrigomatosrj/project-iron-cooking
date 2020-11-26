import React from "react";
import "./Loading.css";

function Loading() {
	return (
		// <div className="spinner-border" role="status">
		// 	<span class="sr-only">Loading...</span>
		// </div>
		<div className="pan-loader">
			<div className="loader"></div>
			<div className="pan-container">
				<div className="pan"></div>
				<div className="handle"></div>
			</div>
			<div className="shadow"></div>
		</div>
	);
}

export default Loading;
