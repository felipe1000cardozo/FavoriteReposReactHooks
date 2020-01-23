import React, { Fragment } from "react";
import "./styles.css";

import GlobalStyle from "./styles/global";

import Routes from "./routes";

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
}
