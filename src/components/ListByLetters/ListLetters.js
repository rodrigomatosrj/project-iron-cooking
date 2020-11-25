import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import ImageLink from "../../components/Home/ImageLink";
import { Container, Row } from "react-bootstrap";

const alphabet = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

function ListLetters(props) {
	const [azList, setazList] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					` https://www.themealdb.com/api/json/v1/1/search.php?f=${props.match.params.letter}`
				);
				setazList([...response.data.meals]);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
	}, [props.match.params.letter]);

	return (
		<div>
			<h3>Choose a letter </h3>
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb bg-secondary">
					{alphabet.map((alphabetLetter, idx) => (
						<li
							key={idx}
							className="breadcrumb-item active "
							aria-current="page"
						>
							<Link to={`/searchbyletter/${alphabetLetter}`}>
								{alphabetLetter}
							</Link>
						</li>
					))}
				</ol>
			</nav>

			<Container className="" fluid>
				<Row className="d-flex justify-content-around ">
					{azList.length === 0 ? (
						<Loading />
					) : (
						azList.map((el) => (
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

export default ListLetters;
