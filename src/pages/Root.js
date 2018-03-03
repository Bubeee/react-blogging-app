import React from 'react';
import PostsList from './posts';
import Login from './login';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import Post from './post';
import history from './history';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history = {history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/posts" component={PostsList} />
        <Route path="/new" component={Post} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
