import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import RowMealIngredients from "./RowMealngredients";

function ListMealIngredients(props) {
  const [ingList, setIngList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${props.match.params.title}`
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
      <h3>Meals</h3>
      {ingList.length === 0 ? (
        <Loading />
      ) : (
        ingList.map((food) => (
          <RowMealIngredients
            key={food.idMeal}
            id={food.idMeal}
            title={food.strMeal}
            image={food.strMealThumb}
          />
        ))
      )}
    </div>
  );
}

export default ListMealIngredients;
