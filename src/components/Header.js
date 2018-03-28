import React from "react";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => (
  <header className="site-header">
    <Link to="/">
      <img src={logo} className="app-logo" alt="logo" />
    </Link>
    <h1 className="site-name">React WordPress REST API Demo</h1>
  </header>
);
