import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies, fetchShows } from "../../redux/movieSlice";
import movies from "../../images/movies.png";
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter a search term!");
    dispatch(fetchMovies(term));
    dispatch(fetchShows(term));

    setTerm("");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Top Movies</Link>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholer="Search for movies or shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={movies} alt="user" />
      </div>
    </div>
  );
};

export default Header;
