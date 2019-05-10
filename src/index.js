import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TwitchApp from "./reducers/TwitchApp";
import "./App.css";
import Stream from "./components/Stream";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Stream store={store} />
      </div>
    );
  }
}
export default App;
let store = createStore(TwitchApp);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
