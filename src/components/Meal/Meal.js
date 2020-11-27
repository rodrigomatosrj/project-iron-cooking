import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Meal.css";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

function Meal(props) {
	let fav = [];

	if (localStorage.hasOwnProperty("favorites")) {
		fav = JSON.parse(localStorage.getItem("favorites"));
	}

	const [favorites, setFavorites] = useState(fav);

	console.log(favorites);

	const [meal, setMeal] = useState({
		idMeal: 0,
		strMeal: "",
		strCategory: "",
		strArea: "",
		strInstructions: "",
		strMealThumb: "",
		strTags: "",
		strYoutube: "",
	});

	const [favorite, setFavorite] = useState(false);

	function handleChange(event) {
		if (!favorite) {
			setFavorites([
				...favorites,
				{
					idMeal: meal.idMeal,
					strMeal: meal.strMeal,
					strMealThumb: meal.strMealThumb,
				},
			]);
		} else {
			let fav = [...favorites];
			fav.splice(
				fav.findIndex((x) => x.idMeal === meal.idMeal),
				1
			);
			setFavorites([...fav]);
		}
		setFavorite(!favorite);
	}

	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`
				);
				setMeal({ ...response.data.meals[0] });
				setFavorite(
					favorites.map((el) => el.idMeal).includes(props.match.params.id)
				);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props]);

	const ingredients = [...new Array(20)];

	return (
		<div>
			<br />
			<img
				className="headerImg border border-dark"
				src={meal.strMealThumb}
				alt="headimg"
			/>

			<h1>{meal.strMeal}</h1>

			<h3>Instructions</h3>

			<p>{meal.strInstructions}</p>

			<h3>Ingredients</h3>
			<div className="row">
				<div className="col-lg-6">
					<ul>
						{ingredients.map((el, idx) =>
							meal[`strIngredient${idx}`] ? (
								<li>
									{meal[`strIngredient${idx}`]} - {meal[`strMeasure${idx}`]}
								</li>
							) : (
								<></>
							)
						)}
					</ul>
				</div>
				<div className="col-lg-6">
					{favorite ? (
						<button
							onClick={handleChange}
							type="submit"
							className="btn  mb-2 btn-outline-secondary"
						>
							<Favorite />
							Remove from favorites
						</button>
					) : (
						<button
							onClick={handleChange}
							type="submit"
							className="btn  mb-2 btn-outline-secondary"
						>
							<FavoriteBorder />
							Add to favorites
						</button>
					)}

					<h3>
						<Link to={`/categories/${meal.strCategory}`}>
							See more {meal.strCategory}'s meals
						</Link>
					</h3>
					<h3>
						<Link to={`/cuisines/${meal.strArea}`}>
							See more from {meal.strArea} cuisine
						</Link>
					</h3>
				</div>
			</div>
		</div>
	);
}

export default Meal;
