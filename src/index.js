import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";

import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import Leaves from "./components/leaves";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
    <Leaves />
  </Provider>,
  rootElement
);
