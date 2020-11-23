import React, { useState, useEffect } from "react";
import axios from "axios";
import RowMeal from "./RowMeal";
import Loading from "../Loading";

function ListMealsCategory(props) {
	const [catList, setCatList] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.match.params.id}`
				);
				console.log(response.data.meals);
				setCatList([...response.data.meals]);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
	}, [props]);

	return (
		<div>
			<h3>{props.match.params.id}</h3>
			{catList.length === 0 ? (
				<Loading />
			) : (
				catList.map((el) => (
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

export default ListMealsCategory;
