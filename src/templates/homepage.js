import React, { Component } from "react";
import { config } from "../config";
import Layout from "../components/Layout";
import Card from "../components/Card";
import styled from "styled-components";

const HomeLayout = styled.section`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 48px;
  max-width: 1140px;
`;

class Homepage extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    try {
      // Fetch WordPress posts.
      const response = await fetch(`${config.options.wordPressUrl}`);

      // If there's an error with the response, bail.
      if (!response.ok) {
        throw Error(response.statusText);
      }

      // Grab the response and set JSON data.
      const json = await response.json();

      // Place the JSON into state.
      this.setState({ data: json });

      // Remove the "not ready" body class.
      document.body.classList.remove("not-ready");
    } catch (error) {
      console.error(error);
      document.body.classList.add("error");
    }
  }

  render() {
    return (
      <>
        <Layout>
          <HomeLayout className="home-container">
            {
              // Loop through our posts and return <Card> components.
              this.state.data.map((post) => (
                <Card
                  key={post.id}
                  id={post.id}
                  title={post.title.rendered}
                  excerpt={post.excerpt.rendered}
                  content={post.content.rendered}
                  slug={post.slug}
                />
              ))
            }
          </HomeLayout>
        </Layout>
      </>
    );
  }
}

export default Homepage;
