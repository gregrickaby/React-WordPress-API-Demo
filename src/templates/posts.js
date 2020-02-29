import React, { Component } from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";

class Posts extends Component {
  render() {
    const postData = this.props.location.state;
    return (
      <>
        <Layout>
          <Post title={postData.title} content={postData.content} />
        </Layout>
      </>
    );
  }
}

export default Posts;
