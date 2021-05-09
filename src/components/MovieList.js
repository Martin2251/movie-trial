import React from "react";
import { Link } from "react-router-dom";

//map over the list of movies with.map and return the poster

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container">
          <p>{movie.Title}</p>
          <img src={movie.Poster} alt="movie"></img>
          <Link>
            <button className="Movie-button">View Full Movie</button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MovieList;
