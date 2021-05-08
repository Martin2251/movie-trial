import Nav from "./components/Nav";
import "./App.css";
import Header from "./components/Header";
import Contact from "./Contact";
import MovieDisplay from "./MovieDisplay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/Contact" exact component={Contact} />
          <Route path="/MovieDisplay" exact component={MovieDisplay} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
