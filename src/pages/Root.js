import React from 'react';
import PostsList from './posts';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './post';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={PostsList} />
        <Route path="/posts" component={PostsList} />
        <Route path="/new" component={Post} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
