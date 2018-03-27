import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { createDangerousMarkup } from "../helpers";

class Card extends Component {
  render() {
    return (
      <article className="card">
        <h1
          className="post-title"
          dangerouslySetInnerHTML={createDangerousMarkup(this.props.title)}
        />
        <div
          className="post-excerpt"
          dangerouslySetInnerHTML={createDangerousMarkup(this.props.content)}
        />
      </article>
    );
  }
}

export default Card;
