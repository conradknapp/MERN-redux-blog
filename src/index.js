import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";

import PostsIndex from "./components/PostsIndex";
import NewPost from "./components/NewPost";
import rootReducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={PostsIndex} />
      <Route exact path="/posts/new" component={NewPost} />
    </Switch>
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
