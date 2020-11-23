import React, { useState, useEffect } from "react";
import ImageLink from "./ImageLink";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Loading from "../Loading";

function IngredientsGroup() {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
        );
        setCatList([...response.data.meals]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h3 className="ml-5 mt-4 ">Ingredients </h3>
      <Container className="" fluid>
        <Row className="d-flex justify-content-around ">
          {console.log(catList)}
          {catList.length === 0 ? (
            <Loading />
          ) : (
            catList
              .filter((el, idx) => idx < 6)
              .map((el) => (
                <ImageLink
                  key={el.idIngredient}
                  id={el.idIngredient}
                  type="ingredients"
                  title={el.strIngredient}
                  image={`https://www.themealdb.com/images/ingredients/${el.strIngredient}.png`}
                />
              ))
          )}
        </Row>
        <Row className="d-flex justify-content-end mt-4 mr-4">
          <Link className="btn btn-primary" to="/ingredients">
            See all categories
          </Link>
        </Row>
      </Container>
    </div>
  );
}

export default IngredientsGroup;
