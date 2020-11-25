/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ImageLink from "../../components/Home/ImageLink";
import { Container, Row } from "react-bootstrap";

function Favorites() {

let fav = [];    
	if (localStorage.hasOwnProperty("favorites")) {
		fav = JSON.parse(localStorage.getItem("favorites"));
    }
    
const [favorites, setFavorites] = useState(fav);



	return (
		<div >
			<h3>Favorites</h3>
			{favorites.length === 0 ? (
				<p>Not found!</p>
			) : (
				favorites.map((el) => (
					<ImageLink
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

export default Favorites;
