import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TwitchApp from "./reducers/TwitchApp";
import App from "./components/App";

let store = createStore(TwitchApp);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
