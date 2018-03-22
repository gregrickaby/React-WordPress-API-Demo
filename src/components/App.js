import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header } from "./Header";
import Article from "./Article";
import { Footer } from "./Footer";
import "../css/styles.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header title="Hello World" />
        <Article title="Post Title" content="Post content and stuff and all" />
        <Footer />
      </div>
    );
  }
}

export default App;
