import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";

class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title="My latest blog posts" />
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
            <Link to="/React-WordPress-API-Demo/">Return to the homepage</Link>
          </p>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default NotFound;
