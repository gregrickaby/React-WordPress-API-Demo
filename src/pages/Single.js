import React, { Component } from "react";
import { createDangerousMarkup } from "../helpers";

class Single extends Component {
  render() {
    return (
      <article className="post">
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

export default Single;
