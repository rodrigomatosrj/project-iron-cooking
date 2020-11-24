import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import RowList from "./RowList";

function ListCuisines() {
	const [cuisineList, setCuisineList] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`https://www.themealdb.com/api/json/v1/1/list.php?a=list`
				);
				setCuisineList([...response.data.meals]);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
	}, []);
	return (
		<div>
			<h3>All Cuisines</h3>
			{cuisineList.length === 0 ? (
				<Loading />
			) : (
				cuisineList.filter(el=>el.strArea !== 'Unknown').map((el) => (
					<RowList
						key={el.strArea}
						title={el.strArea}
					/>
				))
			)}
		</div>
	);
}

export default ListCuisines;
