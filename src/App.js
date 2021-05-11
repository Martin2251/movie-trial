import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Button from "./components/Button";
import ClearButton from "./components/ClearButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDisplay from "./MovieDisplay";
import MovieDetail from "./components/MovieDetail";
import Nav from "./components/Nav";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <MovieDisplay />
          <Route
            path="./components/MovieDetail/:TitleMovieDetail/:Title"
            component={MovieDetail}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
