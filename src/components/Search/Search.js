import React, { useState, useEffect } from "react";
import RowMeal from "../../components/ListCategories/RowMeal";
import Loading from "../../components/Loading";
import axios from "axios";
import "./searchbar.css";

function Search(props) {
  const [searchResult, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${props.match.params.querystring}`
        );
        response.data.meals
          ? setSearch([...response.data.meals])
          : setSearch(null);

        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [props]);

  return (
    <div >
      <h3>Search Result</h3>

      {loading ? <Loading /> : <></>}

      {!searchResult ? (
        <p>Not found!</p>
      ) : (
        searchResult.map((el) => (
          <RowMeal
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

export default Search;
