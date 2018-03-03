import {
  ADD_POST,
  REMOVE_POST,
  REQUEST_POSTS,
  REQUEST_POSTS_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_SUCCESS
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

export const requestPostsSuccess = (json, searchText) => {
  return {
    type: REQUEST_POSTS_SUCCESS,
    items: json.blogs,
    receivedAt: Date.now(),
    searchText
  };
};

export const getPosts = searchText => dispatch => {
  dispatch(requestPosts(searchText));
  let headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  });

  return fetch(`${config.blogsApiBaseAddress}/blogs`, { headers })
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    )
    .then(json => dispatch(requestPostsSuccess(json, searchText)));
};

export const loginRequest = email => {
  return {
    type: LOGIN,
    email
  };
};

export const loginRequestSuccess = user => {
  history.push(`/posts`);
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

export const registerRequest = email => {
  return {
    type: REGISTER,
    email
  };
};

export const registerRequestSuccess = user => {
  history.push(`/posts`);
  return {
    type: REGISTER_SUCCESS,
    user
  };
};

export const register = user => dispatch => {
  dispatch(registerRequest(user.username, user.email, user.password));
  let headers = new Headers({
    'Content-Type': 'application/json'
  });

  return fetch(`${config.blogsApiBaseAddress}/users`, {
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

      return dispatch(registerRequestSuccess(json.user));
    });
};
