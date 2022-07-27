import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import bgImage from "./img/bg.jpg";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(180deg, #3A176B 0%, #2D1253 100%);
    border: 1px solid #54229A;
    border-radius: 6px;
    /* background-size: cover;
    background-position: center; */
  }
`;

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
