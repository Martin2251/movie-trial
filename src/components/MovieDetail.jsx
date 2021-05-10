import React, { useState, useEffect } from "react";
import "./App.css";

function MovieDetail() {
  useEffect(() => {}, []);

  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    const fetchMovie = await fetch(
      `http://www.omdbapi.com/?s=${searchValue}&apikey=24885019`
    );
    const movie = await fetchMovie.json();
  };
  return (
    <div>
      <p>Movie</p>
    </div>
  );
}

export default MovieDetail;
