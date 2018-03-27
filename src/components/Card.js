import React, { Component } from "react";
import { Router, Link } from "react-router-dom";
import { createDangerousMarkup } from "../helpers";

class Card extends Component {
  render() {
    return (
      <Router>
        <article className="card">
          <h1
            className="post-title"
            dangerouslySetInnerHTML={createDangerousMarkup(this.props.title)}
          />
          <div
            className="post-excerpt"
            dangerouslySetInnerHTML={createDangerousMarkup(this.props.content)}
          />
          <Link to="" />
        </article>
      </Router>
    );
  }
}

export default Card;
