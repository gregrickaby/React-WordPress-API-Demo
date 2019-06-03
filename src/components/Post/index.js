import React, { Component } from "react";
import { PostLayout } from "./styles";
import { createDangerousMarkup } from "../../helpers";

class Post extends Component {
  render() {
    return (
      <PostLayout className="post">
        <section className="single-container">
          <article className="post">
            <h1
              className="post-title"
              dangerouslySetInnerHTML={createDangerousMarkup(this.props.title)}
            />
            <div
              className="post-content"
              dangerouslySetInnerHTML={createDangerousMarkup(
                this.props.content
              )}
            />
          </article>
        </section>
      </PostLayout>
    );
  }
}

export default Post;
