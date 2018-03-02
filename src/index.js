import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { ErrorBoundary } from './components/shared';
import Root from './pages/Root';

const initialData = [
  { id: '01', title: 'post #21', content: 'Buy milk' },
  { id: '02', title: 'post #211121', content: 'Meeting with a client' },
  { id: '03', title: 'post #1267', content: 'Create new project' },
  { id: '04', title: '#1267', content: 'Update site' },
  { id: '05', title: 's6722', content: 'Write new posts' },
  { id: '06', title: '#1267du', content: 'Fix my phone' }
];

const store = createStore(reducers, { posts: initialData, post: { } });

render(
  <Root store={store} />,
  document.getElementById('root')
);
