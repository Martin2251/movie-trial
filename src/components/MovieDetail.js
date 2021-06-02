import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";

//match?
function MovieDetail(props) {
  let { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState({});

  useEffect(function () {
    fetch(`http://www.omdbapi.com/?apikey=24885019&i=${movieId}`)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setMovieInfo(data);
      });
  }, []);

  return (
    //as it reads from the api.

    <div className="card">
      <div className="movie-poster">
        <img src={movieInfo.Poster}></img>
        />
      </div>
      <h4>Movie Name {movieInfo.Title}</h4>
      <p>{movieInfo.Plot}</p>
      <p>Actors {movieInfo.Actors}</p>
      <p>Year {movieInfo.Year}</p>
      <p>Country {movieInfo.Country}</p>
      <p>
        <span>Generes </span>
        {movieInfo.Genre}
      </p>
    </div>
  );
}

export default MovieDetail;
