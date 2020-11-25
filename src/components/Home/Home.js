import React from "react";
import CarouselDiv from "./CarouselDiv";
import CategoriesGroup from "./CategoriesGroup";
import IngredientsGroup from "./IngredientsGroup";
import HighLights from "./Highlights";
import { Container } from "react-bootstrap";

function Home() {
	return (
		<div>
			<Container>
				<h2 className="text-center mt-4 pt-3">
					You got time? We got the recipe!
				</h2>
				<h5 className="text-center  pt-3">
					Start a new adventure today with more than 200 different meals for you
					to experience
				</h5>
				<CarouselDiv />
				<CategoriesGroup />
			</Container>
			<HighLights />
			<Container>
				<IngredientsGroup />
			</Container>
		</div>
	);
}

export default Home;
