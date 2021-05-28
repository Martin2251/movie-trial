import React from "react";
import { Link } from "react-router-dom";

//map over the list of movies with.map and return the poster

function MovieList(props) {
  const id = props.movie;
  return (
    <Link to={`MovieDetail/${id}`}>
      {props.movies.map((movie, index) => (
        <div className="image-container">
          <p>{movie.Title}</p>
          <p>{props.movie}</p>
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </Link>
  );
}

export default MovieList;
