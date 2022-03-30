import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = (props) => {
  console.log("props:", props);
  // console.log("id:", props.imdbID);
  return (
    <div className="card-item">
      <Link to={`/movie/${props.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={props.Poster} alt={props.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{props.Title}</h4>
              <p>{props.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
