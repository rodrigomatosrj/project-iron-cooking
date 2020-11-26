import React, { useState, useEffect } from "react";
import ImageLink from "../../components/Home/ImageLink";
import { Container, Row } from "react-bootstrap";
import Loading from "../../components/Loading";
import axios from "axios";
import "./searchbar.css";

function Search(props) {
	const [searchResult, setSearch] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			try {
				const response = await axios.get(
					`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.match.params.querystring}`
				);
				response.data.meals
					? setSearch([...response.data.meals])
					: setSearch(null);

				setLoading(false);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
	}, [props]);

	return (
		<div>
			<h3 className="ml-3 mt-3 pt-4">Search Result</h3>
			<Container className="" fluid>
				<Row className="d-flex justify-content-around ">
					{loading ? <Loading /> : <></>}

					{!searchResult ? (
						<p>Not found!</p>
					) : (
						searchResult.map((el) => (
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

export default Search;
