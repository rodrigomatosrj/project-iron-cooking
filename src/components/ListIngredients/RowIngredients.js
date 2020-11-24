import React from "react";
import { Link } from "react-router-dom";

function RowIngredients(props) {
  return (
    <div>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              className="card-img"
              alt="food img"
              src={`https://www.themealdb.com/images/ingredients/${props.title}.png`}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>

              <Link
                className="btn btn-primary"
                to={`/ingredients/${props.title}`}
              >
                See meals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowIngredients;
