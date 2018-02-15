import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";

import PostsIndex from "./components/PostsIndex";
import rootReducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const Root = () => (
  <Router>
    <div>
      <Route path="/" component={PostsIndex} />
    </div>
  </Router>
);

render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Root />
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
