import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Button from "./components/Button";
import ClearButton from "./components/ClearButton";
import Pagination from "./components/Pagination";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MovieDisplay = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [moviesPerPage, setMoviesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [moreInfo, setMoreInfo] = useState();
  // create logic for pagination
  /*const moviesPerPage = 10;
  const pagesVisited = pageNumber * moviesPerPage;
  const displayMovies = movies
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((movies) => {
      return (
      );
    });
*/
  // will trigger only ONCE when user lands on the page

  useEffect(async () => {
    const url = "http://www.omdbapi.com/?s=godfather&apikey=24885019";

    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.Search);
  }, []);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=24885019`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (!responseJson.Error) {
      // update the state
      setMovies(responseJson.Search);
    } else {
      alert(responseJson.Error);
    }
  };
  const resetAll = () => {
    setMovies([]);
    setSearchValue("");
  };

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=24885019&page=${page}`;

  return (
    <div>
      <div></div>
      <div className="search-cont">
        <MovieListHeading heading=" Martin React Movie API" />

        <div className="search-container">
          <SearchBox
            id="search-bar"
            value={searchValue}
            onChange={setSearchValue}
          />
        </div>
        <Button
          className="search-btn"
          onClickHandler={getMovieRequest}
          label="Search"
        ></Button>
      </div>

      <div className="movie-show">
        <MovieList movies={movies} />
      </div>
      <ClearButton onClickHandler={resetAll} label="Clear All"></ClearButton>
      <Pagination
        MoviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MovieDisplay;
