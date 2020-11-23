import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarouselImage from "./CarouselImage";

function CarouselDiv() {
	const [image, setImage] = useState([
		{
			idMeal: "52796",
			strMeal: "Chicken Alfredo Primavera",
			strDrinkAlternate: null,
			strCategory: "Chicken",
			strArea: "Italian",
			strInstructions:
				"Heat 1 tablespoon of butter and 2 tablespoons of olive oil in a large skillet over medium-high heat. Season both sides of each chicken breast with seasoned salt and a pinch of pepper. Add the chicken to the skillet and cook for 5-7 minutes on each side, or until cooked through. While the chicken is cooking, bring a large pot of water to a boil. Season the boiling water with a few generous pinches of kosher salt. Add the pasta and give it a stir. Cook, stirring occasionally, until al dente, about 12 minutes. Reserve 1/2 cup of pasta water before draining the pasta. Remove the chicken from the pan and transfer it to a cutting board; allow it to rest. Turn the heat down to medium and dd the remaining 1 tablespoon of butter and olive oil to the same pan you used to cook the chicken. Add the veggies (minus the garlic) and red pepper flakes to the pan and stir to coat with the oil and butter (refrain from seasoning with salt until the veggies are finished browning). Cook, stirring often, until the veggies are tender, about 5 minutes. Add the garlic and a generous pinch of salt and pepper to the pan and cook for 1 minute. Deglaze the pan with the white wine. Continue to cook until the wine has reduced by half, about 3 minutes. Stir in the milk, heavy cream, and reserved pasta water. Bring the mixture to a gentle boil and allow to simmer and reduce for 2-3 minutes. Turn off the heat and add the Parmesan cheese and cooked pasta. Season with salt and pepper to taste. Garnish with Parmesan cheese and chopped parsley, if desired. ",
			strMealThumb:
				"https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
			strTags: "Pasta,Meat,Dairy",
			strYoutube: "https://www.youtube.com/watch?v=qCIbq8HywpQ",
			strIngredient1: "Butter",
			strIngredient2: "Olive Oil",
			strIngredient3: "Chicken",
			strIngredient4: "Salt",
			strIngredient5: "Squash",
			strIngredient6: "Broccoli",
			strIngredient7: "mushrooms",
			strIngredient8: "Pepper",
			strIngredient9: "onion",
			strIngredient10: "garlic",
			strIngredient11: "red pepper flakes",
			strIngredient12: "white wine",
			strIngredient13: "milk",
			strIngredient14: "heavy cream",
			strIngredient15: "Parmesan cheese",
			strIngredient16: "bowtie pasta",
			strIngredient17: "Salt",
			strIngredient18: "Pepper",
			strIngredient19: "Parsley",
			strIngredient20: "",
			strMeasure1: "2 tablespoons",
			strMeasure2: "3 tablespoons",
			strMeasure3: "5 boneless",
			strMeasure4: "1 teaspoon",
			strMeasure5: "1 cut into 1/2-inch cubes",
			strMeasure6: "1 Head chopped",
			strMeasure7: "8-ounce sliced",
			strMeasure8: "1 red",
			strMeasure9: "1 chopped",
			strMeasure10: "3 cloves",
			strMeasure11: "1/2 teaspoon",
			strMeasure12: "1/2 cup",
			strMeasure13: "1/2 cup",
			strMeasure14: "1/2 cup",
			strMeasure15: "1 cup grated",
			strMeasure16: "16 ounces",
			strMeasure17: "pinch",
			strMeasure18: "pinch ",
			strMeasure19: "chopped",
			strMeasure20: "",
			strSource: "",
			dateModified: null,
		},
		{
			idMeal: "52927",
			strMeal: "Montreal Smoked Meat",
			strDrinkAlternate: null,
			strCategory: "Beef",
			strArea: "Canadian",
			strInstructions:
				"To make the cure, in a small bowl mix together salt, pink salt, black pepper, coriander, sugar, bay leaf, and cloves. Coat entire brisket with the cure and place in an extra-large resealable plastic bag. Place in the coldest part of the refrigerator and cure for 4 days, flipping brisket twice a day. Remove brisket from bag and wash as much cure off as possible under cold running water. Place brisket in a large container and fill with water and let soak for 2 hours, replacing water every 30 minutes. Remove from water and pat dry with paper towels. To make the rub, mix together black pepper, coriander, paprika, garlic powder, onion powder, dill weed, mustard, celery seed, and crushed red papper in a small bowl. Coat entire brisket with the rub. Fire up smoker or grill to 225 degrees, adding chunks of smoking wood chunks when at temperature. When wood is ignited and producing smoke, place brisket in, fat side up, and smoke until an instant read thermometer registers 165 degrees when inserted into thickest part of the brisket, about 6 hours. Transfer brisket to large roasting pan with V-rack. Place roasting pan over two burners on stovetop and fill with 1-inch of water. Bring water to a boil over high heat, reduce heat to medium, cover roasting pan with aluminum foil, and steam brisket until an instant read thermometer registers 180 degrees when inserted into thickest part of the meat, 1 to 2 hours, adding more hot water as needed. Transfer brisket to cutting board and let cool slightly. Slice and serve, preferably on rye with mustard.",
			strMealThumb:
				"https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg",
			strTags: "Speciality,Snack,StrongFlavor",
			strYoutube: "https://www.youtube.com/watch?v=g5oCDoyxbBk",
			strIngredient1: "Beef Brisket",
			strIngredient2: "Salt",
			strIngredient3: "Black Pepper",
			strIngredient4: "Coriander",
			strIngredient5: "Sugar",
			strIngredient6: "Bay Leaf",
			strIngredient7: "Cloves",
			strIngredient8: "Black Pepper",
			strIngredient9: "Coriander",
			strIngredient10: "Paprika",
			strIngredient11: "Garlic",
			strIngredient12: "Onion",
			strIngredient13: "Dill",
			strIngredient14: "English Mustard",
			strIngredient15: "Celery Salt",
			strIngredient16: "Red Pepper Flakes",
			strIngredient17: "",
			strIngredient18: "",
			strIngredient19: "",
			strIngredient20: "",
			strMeasure1: "1",
			strMeasure2: "3 tbs",
			strMeasure3: "3 tbs",
			strMeasure4: "1 tbs",
			strMeasure5: "1 tbs",
			strMeasure6: "1 tsp ",
			strMeasure7: "1 tsp ",
			strMeasure8: "3 tbs",
			strMeasure9: "1 tbs",
			strMeasure10: "1 tbs",
			strMeasure11: "1 tbs",
			strMeasure12: "1 tbs",
			strMeasure13: "1 tbs",
			strMeasure14: "1 tsp ",
			strMeasure15: "1 tbs",
			strMeasure16: "1 tsp ",
			strMeasure17: "",
			strMeasure18: "",
			strMeasure19: "",
			strMeasure20: "",
			strSource: "http://www.meatwave.com/blog/montreal-smoked-meat-recipe",
			dateModified: null,
		},
	]);
	console.log(image);

	return (
		<>
			<CarouselImage state={[image, setImage]} />
			<CarouselImage state={[image, setImage]} />
			<CarouselImage state={[image, setImage]} />
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
