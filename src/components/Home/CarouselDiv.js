import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Carousel} from "react-bootstrap";
import Loading from "../Loading";

function CarouselDiv() {
	const [state, setState] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`https://www.themealdb.com/api/json/v1/1/random.php`
				);
				setState([...state,response.data.meals[0]]);
				// if(state.length < 2){
				// 	fetchData();
				// }
			} catch (err) {
				console.error(err);
			}
		}
	fetchData();

	
	}, []);

	return (
		state.length === 0 ? <Loading /> : (<Carousel>
			{
				state.map((item) => {
					return (
						<Carousel.Item key={item.idMeal}>
							<Link to={`/meal/${item.idMeal}`}>
								<img
									className="d-block w-100"
									src={item.strMealThumb}
									alt="First slide"
								/>
								<Carousel.Caption>
									<h3>{item.strMeal}</h3>
								</Carousel.Caption>
							</Link>
						</Carousel.Item>
					);
					})
			}
		</Carousel>)
	)
}

export default CarouselDiv;
