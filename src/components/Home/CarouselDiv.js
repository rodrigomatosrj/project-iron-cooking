import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Carousel} from "react-bootstrap";
import Loading from "../Loading";

function CarouselDiv() {
	const [state, setState] = useState([
		{
			idMeal: "52974",
			strMeal: "Keleya Zaara",
			strDrinkAlternate: null,
			strCategory: "Lamb",
			strArea: "Tunisian",
			strInstructions:
				"Heat the vegetable oil in a large frying pan over medium-high heat. Add the lamb and cook until browned on all sides, about 5 minutes. Season with saffron, salt and pepper to taste; stir in all but 4 tablespoons of the onion, and pour in the water. Bring to the boil, then cover, reduce heat to medium-low, and simmer until the lamb is tender, about 15 minutes. Uncover the pan, stir in the butter and allow the sauce reduce 5 to 10 minutes to desired consistency. Season to taste with salt and pepper, then pour into a serving dish. Sprinkle with the remaining chopped onions and parsley. Garnish with lemon wedges to serve. ",
			strMealThumb:
				"https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg",
			strTags: null,
			strYoutube: "https://www.youtube.com/watch?v=u_OSIChzuL0",
			strIngredient1: "Olive Oil",
			strIngredient2: "Lamb",
			strIngredient3: "Saffron",
			strIngredient4: "Onion",
			strIngredient5: "Water",
			strIngredient6: "Parsley",
			strIngredient7: "Butter",
			strIngredient8: "Lemon",
			strIngredient9: "",
			strIngredient10: "",
			strIngredient11: "",
			strIngredient12: "",
			strIngredient13: "",
			strIngredient14: "",
			strIngredient15: "",
			strIngredient16: "",
			strIngredient17: "",
			strIngredient18: "",
			strIngredient19: "",
			strIngredient20: "",
			strMeasure1: "4 tbs",
			strMeasure2: "750g",
			strMeasure3: "1 1/2 tsp ",
			strMeasure4: "1 Large Chopped",
			strMeasure5: "25 ml",
			strMeasure6: "30g",
			strMeasure7: "1 tbs",
			strMeasure8: "1",
			strMeasure9: " ",
			strMeasure10: " ",
			strMeasure11: " ",
			strMeasure12: " ",
			strMeasure13: " ",
			strMeasure14: " ",
			strMeasure15: " ",
			strMeasure16: " ",
			strMeasure17: " ",
			strMeasure18: " ",
			strMeasure19: " ",
			strMeasure20: " ",
			strSource:
				"http://allrecipes.co.uk/recipe/43723/keleya-zaara-tunisian-lamb-with-saffron.aspx",
			dateModified: null,
		},
	]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`https://www.themealdb.com/api/json/v1/1/random.php`
				);
				setState([...state,response.data.meals[0]]);
				//  if(state.length < 2){
				//  	fetchData();
				//  }
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
