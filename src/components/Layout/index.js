import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import { Header } from "../Header";
import { Menu } from "../Menu";
import { Footer } from "../Footer";
import { SiteLayout } from "./styles";

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <SiteLayout className="site-inner">
      <Header />
      <Menu />
      <main className="site-content">{children}</main>
      <Footer />
    </SiteLayout>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f7f7f7;
    color: #231f20;
    font-family: sans-serif;
  }

  a {
    color: #05a2d3;

    &:visited,
    &:active {
      color: #05a2d3;
    }
  }

  .site-inner {
    margin: 24px auto;
  }

  .left {
    float: left;
    margin-right: 24px;
  }

  .right {
    float: right;
    margin-left: 24px;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  embed,
  iframe,
  object {
    max-width: 100%;
  }

  .fluid-embed {
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%; // For ratio 16:9. 75% if ratio is 4:3
    position: relative;

    embed,
    object,
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
`;
