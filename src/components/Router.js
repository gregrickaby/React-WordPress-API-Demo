import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "../pages/index";
import About from "../pages/About";
import Single from "../pages/Single";
import NotFound from "../pages/NotFound";

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
