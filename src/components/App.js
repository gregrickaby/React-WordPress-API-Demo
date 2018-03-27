import React, { Component } from "react";
import { Header } from "./Header";
import { Menu } from "./Menu";
import Home from "../pages/Home";
import { Footer } from "./Footer";
import "../css/styles.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title="My latest blog posts" />
        <Menu />
        <Home />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
