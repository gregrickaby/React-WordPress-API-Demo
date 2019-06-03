import React, { Component } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import Post from "../components/Post";
import { Footer } from "../components/Footer";

class Single extends Component {
  render() {
    const postData = this.props.location.state;
    return (
      <>
        <Header />
        <Menu />
        <Post title={postData.title} content={postData.content} />
        <Footer />
      </>
    );
  }
}

export default Single;
