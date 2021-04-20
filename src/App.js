import { useState } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";

import "./App.css";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=24885019";

    const response = await fetch(url);
    const responseJson = await response.json();
  };
  return (
    <div>
      <div>
        <MovieListHeading heading="Movies" />
        <SearchBox />
      </div>

      <div className="movie-show">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
