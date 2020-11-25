/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import axios from "axios";

function CarouselImage(props) {
  const [image, setImage] = props.state;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/random.php`
        );
        const response1 = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/random.php`
        );
        const response2 = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/random.php`
        );
        setImage([
          ...image,
          response.data.meals[0],
          response1.data.meals[0],
          response2.data.meals[0],
        ]);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return <></>;
}

export default CarouselImage;
