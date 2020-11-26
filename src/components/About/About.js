import React from "react";
import { Container, Row } from "react-bootstrap";

function About() {
	return (
		<Container className="bg-dark shadow-lg mt-5 mb-5">
			<Row className="d-flex justify-content-center">
				<h1 className="mt-5 text-danger mb-5">
					You got time? We got the recipe!
				</h1>

				<div classname="mt-5 w-75">
					<p className="text-muted text-center">
						WeFork! was created so you can have fun! Ever wondered about what
						people eat in Egypt? We got you.
					</p>
					<p className="text-muted text-center">
						Are you a fan of meals starting with "T"? Yap, we got you.
					</p>
					<p className="text-muted text-center">
						Told someone that you like, that you REEALY LOVE lentils and now you
						have to cook for that special someone?
					</p>
					<p className="text-muted text-center">
						You know the drill, we got you!
					</p>
				</div>
			</Row>

			<Row className="d-flex justify-content-around mt-5">
				<div className="col-lg-3">
					<h3 className="mb-0 text-muted">“WeFork! changed our lives”</h3>
					<footer className="blockquote-footer">
						Creators<cite title="Source Title"></cite>
					</footer>
				</div>

				<div className="col-lg-3">
					<h3 className="mb-0 text-muted">“Magnifique”</h3>
					<footer className="blockquote-footer">
						That weird Ratatouille mouse<cite title="Source Title"></cite>
					</footer>
				</div>
			</Row>
			<Row className="d-flex justify-content-around mt-5 mb-5">
				<div className="bottom contact text-center ">
					<h2 className="text-danger ">Contact the creators</h2>
					<p className="text-muted">guilherme.tretow@gmail.com</p>
					<p className="text-muted">rodrigomatosrj@gmail.com</p>
				</div>
			</Row>
		</Container>
	);
}

export default About;
