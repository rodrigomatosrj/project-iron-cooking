import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import ImageLink from "../../components/Home/ImageLink";
import { Container, Row } from "react-bootstrap";

function ListIngredients() {
	const [ingList, setIngList] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					` https://www.themealdb.com/api/json/v1/1/list.php?i=list`
				);
				setIngList([...response.data.meals]);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
	}, []);
	return (
		<div>
			<h3 className="ml-3 mt-3 pt-4">Choose your ingredient</h3>
			<Container className="" fluid>
				<Row className="d-flex justify-content-around ">
					{ingList.length === 0 ? (
						<Loading />
					) : (
						ingList.map((el) => (
							<ImageLink
								key={el.idIngredient}
								id={encodeURI(el.strIngredient)}
								type="ingredients"
								title={el.strIngredient}
								image={`https://www.themealdb.com/images/ingredients/${el.strIngredient}.png`}
							/>
						))
					)}
				</Row>
			</Container>
		</div>
	);
}

export default ListIngredients;
