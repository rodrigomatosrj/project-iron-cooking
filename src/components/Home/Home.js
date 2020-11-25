import React from "react";
import { Container } from "react-bootstrap";
import CarouselDiv from "./CarouselDiv";
import CategoriesGroup from "./CategoriesGroup";
import IngredientsGroup from "./IngredientsGroup";

function Home() {
	return (
		<div>
			<CarouselDiv />
			<CategoriesGroup />
			<IngredientsGroup />
		</div>
	);
}

export default Home;
