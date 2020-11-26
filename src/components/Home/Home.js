import React from "react";
import CarouselDiv from "./CarouselDiv";
import CategoriesGroup from "./CategoriesGroup";
import IngredientsGroup from "./IngredientsGroup";

function Home() {
  return (
    <div>
      <h2 className="text-center mt-4 pt-3">
        You got time? We got the recipe!
      </h2>
      <h5 className="text-center  pt-3">
        Start a new adventure today with almost 300 different meals for you to
        experience
      </h5>
      <CarouselDiv />
      <br />
      <br />
      <div class="dropdown-divider"></div>
      <CategoriesGroup />
      <br />
      <div class="dropdown-divider"></div>

      <IngredientsGroup />
    </div>
  );
}

export default Home;
