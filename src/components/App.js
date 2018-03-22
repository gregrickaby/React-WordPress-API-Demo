import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header } from "./Header";
import Article from "./Article";
import { Footer } from "./Footer";
import "../css/styles.css";

class App extends Component {
  /**
   * Setting context and default state.
   *
   * TO DO:
   * - Create a "modal" component which will display the full blog post after clicking on the article title.
   * - Control the modal via state (modalOpen = true/false)
   */
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
      <React.Fragment>
        <Header title="My latest blog posts" />
        <main className="site-main">
          {// Loop through our posts and return <Article> components.
          this.state.posts.map(post => (
            <Article
              key={post.id}
              title={post.title.rendered}
              content={post.excerpt.rendered}
            />
          ))}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;