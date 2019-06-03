import React from "react";
import { NavLink } from "react-router-dom";

export const Menu = () => (
  <nav className="site-navigation">
    <ul className="menu">
      <li className="menu-item menu-item-home">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="menu-item menu-item-about">
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  </nav>
);
