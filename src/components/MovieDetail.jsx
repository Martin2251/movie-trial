import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function MovieDetail() {
  useEffect(() => {
    fetchMovie();
  }, []);

  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    const fetchMovie = await fetch(
      `http://www.omdbapi.com/?s=godfather&apikey=24885019"`
    );
    const movie = await fetchMovie.json();

    console.log(movie);
  };
  return (
    <div>
      <p>Movie</p>
    </div>
  );
}

export default MovieDetail;
