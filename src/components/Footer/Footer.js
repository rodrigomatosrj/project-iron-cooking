/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import  "./footer.css";

function Footer() {
  return (
		<footer className="bg-dark mt-5 p-1 d-flex justify-content-between align-items-center">
			<div className="col-lg-2 col-md-4 col-xs-12 d-flex flex-column justify-content-start">
				<small className="text-muted">Powered by</small>
				<img src="https://www.themealdb.com/images/logo-small.png" />
			</div>
			<div className="col-lg-2 col-md-4 col-xs-12">
				<img
					className="footer"
					src="https://media4.giphy.com/media/h8HgkqabhYyq8iRSp0/giphy.gif?cid=6c09b952c13f4f329e6b75650e03d12ad9c5ddb0813ae242&rid=giphy.gif"
				/>
			</div>
		</footer>
	);
}

export default Footer;
