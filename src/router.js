import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "./pages/index";
import About from "./pages/about";
import Posts from "./pages/posts";
import NotFound from "./pages/not-found";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/about" component={About} />
      <Route path="/single/:id/:slug/" component={Posts} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
