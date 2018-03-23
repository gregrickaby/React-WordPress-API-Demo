import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { About } from "../pages/About";

export const Menu = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Route exact path="/" />
      <Route path="/about" component={About} />
    </div>
  </Router>
);
