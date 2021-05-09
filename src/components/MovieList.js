import React from "react";
import { Link } from "react-router-dom";
import MovieButton from "./MovieButton";

//map over the list of movies with.map and return the poster

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container">
          <p>{movie.Title}</p>
          <img src={movie.Poster} alt="movie"></img>
          <button className="Movie-button">
            <Link
              to={{
                pathname: `/movie/${movie.movie_id}`,
                state: { movie: movie.title },
              }}
            >
              View Movie
            </Link>
          </button>
        </div>
      ))}
    </>
  );
};

export default MovieList;
