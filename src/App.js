import { useState } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Button from "./components/Button";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // will trigger only ONCE when user lands on the page

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=24885019`;

    const response = await fetch(url);
    const responseJson = await response.json();

    // update the state
    setMovies(responseJson.Search);

    console.log(responseJson);
  };
  const resetAll = () => {
    setMovies([]);
    setSearchValue("");
  };
  return (
    <div>
      <div className="search-cont">
        <MovieListHeading heading=" Martin React Movie API" />
        <SearchBox value={searchValue} onChange={setSearchValue} />
        <Button onClickHandler={getMovieRequest} label="Search"></Button>
      </div>

      <div className="movie-show">
        <MovieList movies={movies} />
      </div>
      <Button onClickHandler={resetAll} label="Clear All"></Button>
    </div>
  );
};

export default App;
