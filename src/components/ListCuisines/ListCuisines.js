import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import ImageLink from "../../components/Home/ImageLink";
import { Container, Row } from "react-bootstrap";
import "./cuisines.css";

function ListCuisines() {
  const [cuisineList, setCuisineList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
        );
        setCuisineList([...response.data.meals]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h3 className="ml-3 mt-3 pt-4">All Cuisines</h3>
      <Container className="" fluid>
        <Row className="d-flex justify-content-around   ">
          {cuisineList.length === 0 ? (
            <Loading />
          ) : (
            cuisineList
              .filter((el) => el.strArea !== "Unknown")
              .map((el) => (
                <ImageLink
                  key={el.strArea}
                  id={el.strArea}
                  type="cuisines"
                  title={el.strArea}
                  image={`images/countries/${el.strArea.toLowerCase()}.png`}
                />
              ))
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ListCuisines;
