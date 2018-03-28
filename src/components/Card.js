import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          dangerouslySetInnerHTML={createDangerousMarkup(this.props.excerpt)}
        />
        <Link
          className="read-more"
          to={{
            pathname: `/single/${this.props.id}/${this.props.slug}/`,
            state: {
              id: this.props.id,
              title: this.props.title,
              content: this.props.content
            }
          }}
        >
          Read More
        </Link>
      </article>
    );
  }
}

export default Card;
