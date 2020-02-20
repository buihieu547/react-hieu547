import "./styles.css";
import App from "./src/app/App.jsx";
import rootReducer from "./src/reducers.js";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// redux-logger is a middleware that lets you log every state change
import logger from "redux-logger";
// redux-thunk is a middleware that lets you dispatch async actions
import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
