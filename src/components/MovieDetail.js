import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";

//match?
function MovieDetail(props) {
  const { searchValue } = useParams();

  const [movieInfo, setMovieInfo] = useState({});

  useEffect(function () {
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=24885019`)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setMovieInfo(data);
      });
  }, []);

  return <h4>Movie: {movieInfo.title}</h4>;
}

export default MovieDetail;
