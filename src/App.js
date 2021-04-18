import React from "react";
import Movie from "./components/Movie";

import "./App.css";

function App() {
  const movies = ["movie1", "movie2"];
  return (
    <div>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
}

export default App;
