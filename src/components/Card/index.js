import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardLayout } from "./styles";
import { createDangerousMarkup } from "../../helpers";

class Card extends Component {
  render() {
    return (
      <CardLayout className="card">
        <h1
          className="card-title"
          dangerouslySetInnerHTML={createDangerousMarkup(this.props.title)}
        />
        <div
          className="card-excerpt"
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
      </CardLayout>
    );
  }
}

export default Card;
