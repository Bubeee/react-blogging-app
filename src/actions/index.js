import {
  ADD_POST,
  REMOVE_POST,
  REQUEST_POSTS,
  REQUEST_POSTS_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS
} from './constants';

import history from '../pages/history';
import { config } from '../../app.config';

export const addPost = ({ title, content }) => {
  return {
    type: ADD_POST,
    title,
    content
  };
};

export const removePost = id => {
  return {
    type: REMOVE_POST,
    id
  };
};

export const requestPosts = searchText => {
  return {
    type: REQUEST_POSTS,
    searchText
  };
};

export const requestPostsSuccess = json => {
  debugger;
  return {
    type: REQUEST_POSTS_SUCCESS,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
};

export const getPosts = searchText => dispatch => {
  dispatch(requestPosts(searchText));

  let headers = new Headers({});

  return fetch(`${config.blogsApiBaseAddress}/blogs`, { headers })
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    )
    .then(json => dispatch(requestPostsSuccess(json)));
};

export const loginRequest = email => {
  return {
    type: LOGIN,
    email
  };
};

export const loginRequestSuccess = user => {
  debugger;
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

export const login = user => dispatch => {
  dispatch(loginRequest(user.email, user.password));
  let headers = new Headers({
    'Content-Type': 'application/json'
  });

  return fetch(`${config.blogsApiBaseAddress}/users/login`, {
    method: 'POST',
    body: JSON.stringify({ user }),
    headers: headers
  })
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    )
    .then(json => {
      localStorage.setItem('token', json.user.token);
      
      return dispatch(loginRequestSuccess(json.user));
    });
};
