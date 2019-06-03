import React from "react";
import { config } from "../../config";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import { HeaderLayout } from "./styles";

export const Header = () => (
  <HeaderLayout className="site-header">
    <Link to="/">
      <img src={logo} className="app-logo" alt="logo" />
    </Link>
    <h1 className="site-name">{config.siteMetadata.title}</h1>
    <p className="site-description">{config.siteMetadata.description}</p>
  </HeaderLayout>
);
