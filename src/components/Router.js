import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import MovieInfo from "./MovieInfo";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={MovieInfo} />
    </Switch>
  </BrowserRouter>
);

export default Router;
