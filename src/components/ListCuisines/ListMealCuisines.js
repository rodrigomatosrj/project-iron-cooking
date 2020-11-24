import React, { useState, useEffect } from "react";
import axios from "axios";
import RowMeal from "../ListCategories/RowMeal";
import Loading from "../Loading";

function ListMealCuisines(props) {
	const [catCuisine, setCatCuisine] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`https://www.themealdb.com/api/json/v1/1/filter.php?a=${props.match.params.area}`
				);
				setCatCuisine([...response.data.meals]);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
	}, [props]);

	return (
		<div>
			<h3>{props.match.params.id}</h3>
			{catCuisine.length === 0 ? (
				<Loading />
			) : (
				catCuisine.map((el) => (
					<RowMeal
						key={el.idMeal}
						id={el.idMeal}
						title={el.strMeal}
						image={el.strMealThumb}
					/>
				))
			)}
		</div>
	);
}

export default ListMealCuisines;
