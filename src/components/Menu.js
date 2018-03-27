import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { About } from "../pages/About";

export const Menu = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>

      <Route exact path="/" />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);
