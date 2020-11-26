import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import ImageLink from "../../components/Home/ImageLink";
import {Container, Row} from "react-bootstrap";

function ListMealIngredients(props) {
  const [ingList, setIngList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
					`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURI(props.match.params.title)}`
				);
        setIngList([...response.data.meals]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [props]);
  console.log(ingList);
  return (
		<div>
			<h3 className="ml-3 mt-3 pt-4">{props.match.params.title}</h3>
			<Container className="" fluid>
				<Row className="d-flex justify-content-around ">
					{ingList.length === 0 ? (
						<Loading />
					) : (
						ingList.map((food) => (
							<ImageLink
								key={food.idMeal}
								id={food.idMeal}
								type="meal"
								title={food.strMeal}
								image={food.strMealThumb}
							/>
						))
					)}
				</Row>
			</Container>
		</div>
	);
}

export default ListMealIngredients;
