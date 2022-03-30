import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../shared/api/MovieApiKey";
import axios from "axios";

const baseURL = "https://www.omdbapi.com";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (term) => {
    const response = await axios.get(
      `${baseURL}/?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchShows = createAsyncThunk(
  "movies/fetchShows",
  async (term) => {
    const response = await axios.get(
      `${baseURL}/?apiKey=${APIKey}&s=${term}&type=series`
    );

    return response.data;
  }
);

export const fetchMovieOrShowDetails = createAsyncThunk(
  "movies/fetchMovieOrShowDetails",
  async (id) => {
    const response = await axios.get(
      `${baseURL}/?apiKey=${APIKey}&i=${id}&plot=full`
    );

    return response.data;
  }
);

const initialState = {
  movies: [],
  shows: [],
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchMovies.pending]: () => {
      console.log("pending");
    },
    [fetchMovies.fulfilled]: (state, action) => {
      console.log("Fetched successfully");
      return { ...state, movies: action.payload };
    },
    [fetchMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchShows.fulfilled]: (state, action) => {
      console.log("Shows Fetched successfully");
      return { ...state, shows: action.payload };
    },
    [fetchMovieOrShowDetails.fulfilled]: (state, action) => {
      console.log("Shows Fetched successfully");
      return { ...state, selectedMovieOrShow: action.payload };
    },
  },
});

export const { removeMovieOrShow } = movieSlice.actions;
export const getAllShows = (state) => state.movies.shows;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
