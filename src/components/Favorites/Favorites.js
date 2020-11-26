
import React, { useState } from "react";
import ImageLink from "../../components/Home/ImageLink";
import { Container, Row } from "react-bootstrap";



function Favorites() {
  let fav = [];
  if (localStorage.hasOwnProperty("favorites")) {
    fav = JSON.parse(localStorage.getItem("favorites"));
  }

  const [favorites, setFavorites] = useState(fav);

  return (
		<div>
			<h3 className="mt-4 mb-2">Favorites</h3>
			<Container className="min-height90" fluid>
				<Row className="d-flex justify-content-around ">
					{favorites.length === 0 ? (
						<p>Not found!</p>
					) : (
						favorites.map((el) => (
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

export default Favorites;
