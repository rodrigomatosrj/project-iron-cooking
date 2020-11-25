import React from "react";
import { Link } from "react-router-dom";

function RowLetters(props) {
  return (
    <div>
      <div className="card mb-3 bg-secondary">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img className="card-img" alt="food img" src={props.image} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>

              <p>{props.description}</p>
              <Link
                className="btn btn-primary"
                to={`/ingredients/${props.title}`}
              >
                See meal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowLetters;
