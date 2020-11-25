import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import ImageLink from "../../components/Home/ImageLink";
import { Container, Row } from "react-bootstrap";

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
			<Container className="" fluid>
				<Row className="d-flex justify-content-around ">
					{catCuisine.length === 0 ? (
						<Loading />
					) : (
						catCuisine.map((el) => (
							<ImageLink
								key={el.idMeal}
								id={el.idMeal}
								type="Meal"
								title={el.strMeal}
								image={el.strMealThumb}
							/>
						))
					)}
				</Row>
			</Container>
		</div>
	);
}

export default ListMealCuisines;
