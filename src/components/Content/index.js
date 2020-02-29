import React, { Component } from "react";
import { createDangerousMarkup } from "../../helpers";
import { PostLayout } from "./styles";

class Content extends Component {
  render() {
    return (
      <PostLayout className="post">
        <h1
          className="post-title"
          dangerouslySetInnerHTML={createDangerousMarkup(this.props.title)}
        />
        <div
          className="post-content"
          dangerouslySetInnerHTML={createDangerousMarkup(this.props.content)}
        />
      </PostLayout>
    );
  }
}

export default Content;
