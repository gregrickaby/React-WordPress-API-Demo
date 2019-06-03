import React from "react";
import { NavLink } from "react-router-dom";
import { MenuLayout } from "./styles";

export const Menu = () => (
  <MenuLayout className="site-navigation">
    <ul className="menu">
      <li className="menu-item menu-item-home">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="menu-item menu-item-about">
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  </MenuLayout>
);
