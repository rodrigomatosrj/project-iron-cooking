import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarouselImage from "./CarouselImage";

function CarouselDiv() {
	const [image, setImage] = useState([]);
	console.log(image);

	return (
		<>
			<CarouselImage state={[image, setImage]} />
			{/* <CarouselImage state={[image, setImage]} />
			<CarouselImage state={[image, setImage]} /> */}
			<Carousel>
				{image.map((el) => {
					return (
						<Carousel.Item key={el.idMeal}>
							<Link to={`/meal/${el.idMeal}`}>
								<img
									className="d-block w-100"
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
