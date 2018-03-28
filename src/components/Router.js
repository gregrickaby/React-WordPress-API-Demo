import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../components/App";
import Single from "../pages/Single";
import NotFound from "../pages/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/single/:id/:slug/" component={Single} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
