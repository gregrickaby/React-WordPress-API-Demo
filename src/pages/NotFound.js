import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";

class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Menu />
        <section className="single-container not-found">
          <h1>
            404 Not Found!!{" "}
            <span role="img" aria-label="Wow">
              😳
            </span>
          </h1>
          <p>Sorry about that. It looks like there's nothing here.</p>
          <p>
            <Link to="/">Return to the homepage</Link>
          </p>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default NotFound;
