import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import MovieList from "../movie-list/MovieList";
//import movieApi from "../../shared/api/movieApi";
// import { APIKey } from "../../shared/api/MovieApiKey";
import { fetchMovies, fetchShows } from "../../redux/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Bond";
  const showText = "Friends";

  useEffect(() => {
    dispatch(fetchMovies(movieText));
    dispatch(fetchShows(showText));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieList />
    </div>
  );
};

export default Home;
