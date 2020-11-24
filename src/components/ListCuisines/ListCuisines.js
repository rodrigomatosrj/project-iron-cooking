import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import RowCategory from "./RowCategory";

function ListCuisines() {
	const [catList, setCatList] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`https://www.themealdb.com/api/json/v1/1/categories.php`
				);
				setCatList([...response.data.categories]);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
	}, []);
	return (
		<div>
			<h3>All Categories</h3>
			{catList.length === 0 ? (
				<Loading />
			) : (
				catList.map((el) => (
					<RowCategory
						key={el.idCategory}
						id={el.idCategory}
						description={el.strCategoryDescription}
						title={el.strCategory}
						image={el.strCategoryThumb}
					/>
				))
			)}
		</div>
	);
}

export default ListCuisines;
