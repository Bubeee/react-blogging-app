import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Posts } from './pages/posts';
import posts from './reducers';
import { ErrorBoundary } from './components/shared';

const initialData = [
  { id: '01', executor: 'Jason', text: 'Buy milk', status: 'TODO' },
  { id: '02', executor: 'Sam', text: 'Meeting with a client', status: 'TODO' },
  { id: '03', executor: 'Kate', text: 'Create new project', status: 'TODO' },
  { id: '04', executor: 'All', text: 'Update site', status: 'DOING' },
  { id: '05', executor: 'Sam', text: 'Write new posts', status: 'DONE' },
  { id: '06', executor: 'Jason', text: 'Fix my phone', status: 'DONE' }
];

const store = createStore(posts, initialData);

render(
  <Provider store={store}>
    <Posts />
  </Provider>,
  document.getElementById('app')
);
