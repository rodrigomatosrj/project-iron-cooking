import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import ImageLink from "../../components/Home/ImageLink";
import { Container, Row } from "react-bootstrap";

function ListCategories() {
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
			<h3 className="ml-3 mt-3 pt-4">All Categories</h3>
			<Container className="" fluid>
				<Row className="d-flex justify-content-around ">
					{catList.length === 0 ? (
						<Loading />
					) : (
						catList.map((el) => (
							<ImageLink
								key={el.idCategory}
								id={el.idCategory}
								type="categories"
								title={el.strCategory}
								image={el.strCategoryThumb}
							/>
						))
					)}
				</Row>
			</Container>
		</div>
	);
}

export default ListCategories;
