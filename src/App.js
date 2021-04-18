import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

import "./App.css";

function App() {
  const movies = ["1", "2", "3"];
  return (
    <div>
      {movies.map((movie) => (
        <Movie />
      ))}
    </div>
  );
}

export default App;
