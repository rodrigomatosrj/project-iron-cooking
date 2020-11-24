import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarouselImage from "./CarouselImage";
import "./carousel.css";

function CarouselDiv() {
	const [image, setImage] = useState([]);

	return (
		<>
			<CarouselImage state={[image, setImage]} />

			<Carousel>
				{image.map((el) => {
					return (
						<Carousel.Item key={el.idMeal}>
							<Link to={`/meal/${el.idMeal}`}>
								<img
									className="carouselImg"
									src={el.strMealThumb}
									alt="Meal slide"
								/>
								<Carousel.Caption>
									<h3>{el.strMeal}</h3>
								</Carousel.Caption>
							</Link>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</>
	);
}

export default CarouselDiv;
