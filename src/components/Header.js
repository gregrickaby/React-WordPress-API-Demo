import React from "react";
import logo from "../img/logo.svg";

export const Header = ({ title }) => (
  <header className="site-header">
    <img src={logo} className="app-logo" alt="logo" />
    <h1 className="site-name">{`${title}`}</h1>
  </header>
);
