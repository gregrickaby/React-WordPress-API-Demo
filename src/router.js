import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./templates/homepage";
import Pages from "./templates/pages";
import Posts from "./templates/posts";
import NotFound from "./templates/404";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/:slug" component={Pages} />
      <Route path="/blog/:id/:slug/" component={Posts} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
