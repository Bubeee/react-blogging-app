import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PostsList from './pages/posts';
import reducers from './reducers';
import { ErrorBoundary } from './components/shared';

const initialData = [
  { id: '01', title: 'Jason', content: 'Buy milk' },
  { id: '02', title: 'Sam', content: 'Meeting with a client' },
  { id: '03', title: 'Kate', content: 'Create new project' },
  { id: '04', title: 'All', content: 'Update site' },
  { id: '05', title: 'Sam', content: 'Write new posts' },
  { id: '06', title: 'Jason', content: 'Fix my phone' }
];

const store = createStore(reducers, { posts: initialData, post: { } });

render(
  <Provider store={store}>
    <PostsList />
  </Provider>,
  document.getElementById('app')
);
