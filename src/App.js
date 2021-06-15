import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDisplay from "./MovieDisplay";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/movieDetail/:movieId" component={MovieDetail} />
        <Route path="/">
          <MovieDisplay></MovieDisplay>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
