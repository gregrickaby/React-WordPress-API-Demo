import React from "react";
import { hydrate, render } from "react-dom";
import Router from "./router";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("page");
if (rootElement.hasChildNodes()) {
  hydrate(<Router />, rootElement);
} else {
  render(<Router />, rootElement);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
