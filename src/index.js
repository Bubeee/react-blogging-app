import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { ErrorBoundary } from './components/shared';
import Root from './pages/Root';
import thunkMiddleware from 'redux-thunk';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(
  reducers,
  { posts: { isFetching: false, items: [] }, post: {} },
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
  )
)

render(<Root store={store} />, document.getElementById('root'));
