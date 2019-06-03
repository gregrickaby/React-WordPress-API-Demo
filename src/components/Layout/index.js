import React from "react";
import PropTypes from "prop-types";
import { Header } from "../Header";
import { Menu } from "../Menu";
import { Footer } from "../Footer";
import { GlobalStyle, SiteLayout } from "./styles";

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
