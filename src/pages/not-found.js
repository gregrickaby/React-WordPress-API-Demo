import React, { Component } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

class NotFound extends Component {
  render() {
    return (
      <>
        <Layout>
          <article className="post">
            <h1>
              404 Not Found!!{" "}
              <span role="img" aria-label="Wow">
                😳
              </span>
            </h1>
            <p>Sorry about that. It looks like nothing is here.</p>
            <p>
              <Link to="/">Return to the homepage</Link>
            </p>
          </article>
        </Layout>
      </>
    );
  }
}

export default NotFound;
