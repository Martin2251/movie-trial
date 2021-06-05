import React from "react";
import { Link } from "react-router-dom";
import "../styles/MovieList.css";

//map over the list of movies with.map and return the poster

function MovieList(props) {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container">
          <p>{movie.Title}</p>
          <img src={movie.Poster} alt="movie"></img>
          <Link to={`/movieDetail/${movie.imdbID}`}>
            <button className="more-info">See more info</button>
          </Link>
        </div>
      ))}
    </>
  );
}

export default MovieList;
