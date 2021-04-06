import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";

import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import empReducer from "./store/reducers";

const store = createStore(empReducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
