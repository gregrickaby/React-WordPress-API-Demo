import React, { Component } from "react";
import { createDangerousMarkup } from "../helpers";

class Article extends Component {
  render() {
    return (
      <article className="card">
        <h1
          className="post-title"
          dangerouslySetInnerHTML={createDangerousMarkup(this.props.title)}
        />
        <div
          className="post-excerpt"
          dangerouslySetInnerHTML={createDangerousMarkup(this.props.excerpt)}
        />
      </article>
    );
  }
}

export default Article;
