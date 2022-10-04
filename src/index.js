import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
