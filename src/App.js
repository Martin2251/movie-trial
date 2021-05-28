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

function App() {
  return (
    <Router>
      <Route>
        <Switch>
          <Route path="/movieDetail/:id">
            <MovieDetail></MovieDetail>
          </Route>
          <MovieDisplay></MovieDisplay>
        </Switch>
      </Route>
    </Router>
  );
}
export default App;
