import React, { Component } from "react";
import { createDangerousMarkup } from "../helpers";

class Single extends Component {
  render() {
    const postData = this.props.location.state;
    return (
      <article className="post">
        <h1
          className="post-title"
          dangerouslySetInnerHTML={createDangerousMarkup(postData.title)}
        />
        <div
          className="post-excerpt"
          dangerouslySetInnerHTML={createDangerousMarkup(postData.content)}
        />
      </article>
    );
  }
}

export default Single;
