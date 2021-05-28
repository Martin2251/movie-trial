import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";

//match?
function MovieDetail() {
  let { id } = useParams();

  const [movieInfo, setMovieInfo] = useState({});

  useEffect(function () {
    fetch(`http://www.omdbapi.com/&apikey=24885019/` + id)
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
      <h4>Movie Name: {movieInfo.Title}</h4>
      <p>Year{movieInfo.Year}</p>
    </div>
  );
}

export default MovieDetail;
