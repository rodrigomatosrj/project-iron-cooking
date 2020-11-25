import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import RowLetters from "./RowLetters";
import { Link } from "react-router-dom";

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

  /*   function handleClick(event) {
    setLetter(event.currentTarget.value);
    console.log(event.currentTarget.letter);
  } */
  return (
    <div>
      <h3 className="mb-3 mt-3 pt-4">Choose a letter </h3>
      <nav aria-label="breadcrumb ">
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

      {azList.length === 0 ? (
        <Loading />
      ) : (
        azList.map((el) => (
          <RowLetters
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

export default ListLetters;
