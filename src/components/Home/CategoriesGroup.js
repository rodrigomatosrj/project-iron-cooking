import React, { useState, useEffect } from "react";
import ImageLink from "./ImageLink";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Loading from "../Loading";

function CategoriesGroup() {
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
			<h3 className="text-center mt-4 ">Categories</h3>
			<p  className="text-center">Pasta? Vegan? Maybe some Dessert? You can find anything here.</p>
			<Container fluid>
				<Row className="d-flex justify-content-around ">
					{console.log(catList)}
					{catList.length === 0 ? (
						<Loading />
					) : (
						catList
							.filter((el, idx) => idx < 8)
							.map((el) => (
								<ImageLink
									key={el.idCategory}
									id={encodeURI(el.strCategory)}
									title={el.strCategory}
									type="categories"
									image={el.strCategoryThumb}
								/>
							))
					)}
				</Row>
				<Row className="d-flex justify-content-end mt-4 mr-5">
					<Link className="btn btn-primary mt-2 " to="/categories">
						See all categories
					</Link>
				</Row>
			</Container>
		</div>
	);
}

export default CategoriesGroup;
