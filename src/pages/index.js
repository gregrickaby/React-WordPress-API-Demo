import React, { Component } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import Card from "../components/Card";
import "../css/styles.css";

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };

    // Set the API Url.
    this.apiUrl = "https://gregrickaby.com/wp-json/wp/v2/posts";

    // Set request args.
    this.apiArgs = {
      method: "GET",
      mode: "cors",
      cache: "default",
      header: new Headers({
        "Content-Type": "application/json"
      })
    };

    // Set the request.
    this.apiRequest = new Request(this.apiUrl, this.apiArgs);
  }

  /**
   * Kick off a promise to fetch data from remote API.
   */
  fetchData() {
    // Return the promise.
    return (
      fetch(this.apiRequest)
        // If we have data...convert and return as JSON.
        .then(response => response.json())

        // Returning the results of the response.
        .then(data => data)

        // Catch any errors and bail!
        .catch(error => {
          console.error(error);
        })
    );
  }

  /**
   * Since we're loading data from a remote endpoint,
   * this is a good place to instantiate the network request.
   */
  componentDidMount() {
    // Get the WP data.
    const posts = this.fetchData();

    // When the promise is resolved, set the data as state.
    posts.then(post => {
      this.setState({ posts: post });

      // Toggle the body class.
      document.body.classList.remove("not-ready");
    });
  }

  render() {
    return (
      <>
        <Header />
        <Menu />
        <section className="home-container">
          {// Loop through our posts and return <Card> components.
          this.state.posts.map(post => (
            <Card
              key={post.id}
              id={post.id}
              title={post.title.rendered}
              excerpt={post.excerpt.rendered}
              content={post.content.rendered}
              slug={post.slug}
            />
          ))}
        </section>
        <Footer />
      </>
    );
  }
}

export default IndexPage;
