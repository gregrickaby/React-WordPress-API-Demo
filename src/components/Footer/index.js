import React from "react";
import { FooterLayout } from "./styles";

export const Footer = () => (
  <FooterLayout className="site-footer">
    <p className="site-info">
      &copy; {new Date().getFullYear()} Greg Rickaby{" "}
      <span role="img" aria-label="coffee">
        ☕
      </span>
    </p>
    <p>
      <a href="https://github.com/gregrickaby/React-WordPress-API-Demo">
        View this on Github
      </a>
    </p>
  </FooterLayout>
);
