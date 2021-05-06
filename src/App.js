import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Button from "./components/Button";
import ClearButton from "./components/ClearButton";
import ReactPaginate from "react-paginate";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
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
  return (
    /*<div>
      <Router>
        <div>
          <Switch>
            <Route path='/card/:id'>
              <Card />
            </Route>
            <Route exact path='/'>
              <Catalog />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
*/

    <div>
      <div className="search-cont">
        <MovieListHeading heading=" Martin React Movie API" />
        <div className="search-container">
          <SearchBox value={searchValue} onChange={setSearchValue} />
          <Button onClickHandler={getMovieRequest} label="Search"></Button>
        </div>
      </div>

      <div className="movie-show">
        <MovieList movies={movies} />
      </div>
      <ClearButton onClickHandler={resetAll} label="Clear All"></ClearButton>
    </div>
  );
};

export default App;
