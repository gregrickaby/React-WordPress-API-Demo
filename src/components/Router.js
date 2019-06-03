import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "../pages/index";
import About from "../pages/about";
import Single from "../pages/single";
import NotFound from "../pages/not-found";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/about" component={About} />
      <Route path="/single/:id/:slug/" component={Single} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
