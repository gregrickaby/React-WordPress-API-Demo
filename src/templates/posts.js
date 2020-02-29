import React, { Component } from "react";
import Layout from "../components/Layout";
import Content from "../components/Content";

class Posts extends Component {
  render() {
    const postData = this.props.location.state;
    return (
      <>
        <Layout>
          <Content title={postData.title} content={postData.content} />
        </Layout>
      </>
    );
  }
}

export default Posts;
