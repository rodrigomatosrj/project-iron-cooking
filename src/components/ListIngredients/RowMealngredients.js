import React from "react";
import { Link } from "react-router-dom";

function RowMealIngredients(props) {
  return (
    <div>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Link to={`/:title/${props.idMeal}`}>
              <img className="card-img" src={props.image} alt="img food" />
            </Link>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>

              <Link className="btn btn-primary" to={`/:title/${props.idMeal}`}>
                See meal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowMealIngredients;
