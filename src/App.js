import { useState } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";

import "./App.css";

function App()
  const [movies, setMovies] = useState(initalState);


  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=24885019";
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
  };
  return (
    <div>
      <div>
       <MovieListHeading heading="Movies"/>
        <input value={inputValue} onChange={}></input>
        <button>Search Movie</button>
      </div>

      <div className="movie-show">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
