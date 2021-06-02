import React from "react";
import { Link } from "react-router-dom";

//map over the list of movies with.map and return the poster

function MovieList(props) {
  return (
    <>
      {props.movies.map((movie, index) => (
        <Link to={`/movieDetail/${movie.imdbID}`}>
          <div className="image-container">
            <p>{movie.Title}</p>
            <img src={movie.Poster} alt="movie"></img>
          </div>
        </Link>
      ))}
    </>
  );
}

export default MovieList;
