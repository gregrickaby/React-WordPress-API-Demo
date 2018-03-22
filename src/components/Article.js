import React, { Component } from "react";

class Article extends Component {
  render() {
    return (
      <article>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </article>
    );
  }
}

export default Article;
