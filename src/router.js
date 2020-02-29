import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "./templates/index";
import About from "./templates/about";
import Posts from "./templates/posts";
import NotFound from "./templates/not-found";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/about" component={About} />
      <Route path="/blog/:id/:slug/" component={Posts} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
