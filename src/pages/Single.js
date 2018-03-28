import React, { Component } from "react";
import { createDangerousMarkup } from "../helpers";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";

class Single extends Component {
  render() {
    const postData = this.props.location.state;
    return (
      <React.Fragment>
        <Header title="My latest blog posts" />
        <Menu />
        <section className="single-container">
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
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Single;
