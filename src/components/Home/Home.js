import React from "react";
import CarouselDiv from "./CarouselDiv";
import CategoriesGroup from "./CategoriesGroup";
import IngredientsGroup from "./IngredientsGroup";

function Home() {
	return (
		<div>
			Home
			<CarouselDiv />
			<CategoriesGroup />
			<IngredientsGroup />
		</div>
	);
}

export default Home;