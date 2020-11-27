/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./footer.css";

function Footer() {
	return (
		<footer className="bg-dark mt-5 p-3 d-flex justify-content-between align-items-center">
			<div className="col-lg-2 col-md-3 col-8 d-flex flex-column justify-content-start">
				<small className="text-muted">Powered by</small>
				<img img-fluid src="https://www.themealdb.com/images/logo-small.png" />
			</div>
			<div className="col-lg-1 col-md-1 col-4">
				<img
					className="img-fluid"
					src="https://coursereport-production.imgix.net/uploads/school/logo/84/original/logo-ironhack-blue.png"
				/>
			</div>
		</footer>
	);
}

export default Footer;
