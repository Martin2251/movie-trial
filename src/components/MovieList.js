import React from "react";
import { Link, Router } from "react-router-dom";

//map over the list of movies with.map and return the poster

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container">
          <p>{movie.Title}</p>
          <img src={movie.Poster} alt="movie"></img>
          <button className="Movie-button">View Movie</button>
        </div>
      ))}
    </>
  );
};

export default MovieList;
