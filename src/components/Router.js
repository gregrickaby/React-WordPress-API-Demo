import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Single from "../pages/Single";
import NotFound from "../pages/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/blog/:id" component={Single} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
