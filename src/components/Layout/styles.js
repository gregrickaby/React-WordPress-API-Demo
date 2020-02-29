import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f7f7f7;
    color: #231f20;
    font-family: sans-serif;
  }

  a {
    color: #05a2d3;

    &:visited,
    &:active {
      color: #05a2d3;
    }
  }

  .site-inner {
    margin: 24px auto;
  }

  .post {
    margin: 0 auto;
    max-width: 700px;
    padding: 48px;
  }

  .left {
    float: left;
    margin-right: 24px;
  }

  .right {
    float: right;
    margin-left: 24px;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  embed,
  iframe,
  object {
    max-width: 100%;
  }

  .fluid-embed {
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;

    embed,
    object,
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
`;

export const SiteLayout = styled.div`
  color: #231f20;
  font-family: sans-serif;
`;
