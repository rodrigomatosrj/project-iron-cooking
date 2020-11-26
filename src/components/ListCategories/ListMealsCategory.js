import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import ImageLink from "../../components/Home/ImageLink";
import { Container, Row } from "react-bootstrap";

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
			<h3 className="ml-3 mt-3 pt-4">{props.match.params.id}</h3>
			<Container className="" fluid>
				<Row className="d-flex justify-content-around ">
					{catList.length === 0 ? (
						<Loading />
					) : (
						catList.map((el) => (
							<ImageLink
								key={el.idMeal}
								id={el.idMeal}
								type="meal"
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

export default ListMealsCategory;
