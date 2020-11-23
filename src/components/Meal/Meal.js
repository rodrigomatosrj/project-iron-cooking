import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Meal(props) {
	const [meal, setMeal] = useState({
		strMeal: "",
		strCategory: "",
		strArea: "",
		strInstructions: "",
		strMealThumb: "",
		strTags: "",
		strYoutube: "",
	});

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`
				);
				setMeal({ ...response.data.meals[0] });
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
	}, [props]);

	return (
		<div>
			<h1>{meal.strMeal}</h1>
			<p>
				<Link to={`/categories/${meal.strCategory}`}>{meal.strCategory}</Link>
			</p>
			<p>
				<Link to={`/areas/${meal.strArea}`}>{meal.strArea}</Link>
			</p>
		</div>
	);
}

export default Meal;
