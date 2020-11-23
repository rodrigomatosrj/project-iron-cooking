import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import RowIngredients from "./RowIngredients";

function ListIngredients() {
  const [ingList, setIngList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          ` https://www.themealdb.com/api/json/v1/1/list.php?i=list`
        );
        setIngList([...response.data.meals]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h3>All Categories</h3>
      {ingList.length === 0 ? (
        <Loading />
      ) : (
        ingList.map((el) => (
          <RowIngredients
            key={el.idIngredient}
            id={el.idIngredient}
            description={el.strDescription}
            title={el.strIngredient}
          />
        ))
      )}
    </div>
  );
}

export default ListIngredients;
