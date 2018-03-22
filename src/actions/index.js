import {
  ADD_POST,
  ADD_POST_SUCCESS,
  REMOVE_POST,
  REQUEST_POSTS,
  REQUEST_POSTS_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_SUCCESS,
  LOGOUT,
  REQUEST_POSTS_FAILURE
} from './constants';

import history from '../pages/history';
import { config } from '../../app.config';

export const addPost = () => {
  return {
    type: ADD_POST,
    isAdding: true
  };
};

export const addPostSuccess = (post) => {
  debugger;
  return {
    type: ADD_POST_SUCCESS,
    post: post
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

export const requestPostsFailure = error => {
  return {
    type: REQUEST_POSTS_FAILURE,
    error
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
      response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      },
      error => console.log('An error occurred.', error)
    )
    .then(json => dispatch(requestPostsSuccess(json, searchText)))
    .catch(error => dispatch(requestPostsFailure(error, searchText)));
};

export const loginRedirect = _ => {
  history.push(`/login`);
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

export const logoutRequest = () => {
  return {
    type: LOGOUT
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
      response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      },
      error => console.log('An error occurred.', error)
    )
    .then(json => {
      debugger;
      localStorage.setItem('token', json.user.token);

      return dispatch(loginRequestSuccess(json.user));
    })
    .catch(error => dispatch(requestPostsFailure(error)));
};

export const addPostRequest = post => dispatch => {
  dispatch(addPost());
  let headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  });

  return fetch(`${config.blogsApiBaseAddress}/blogs`, {
    method: 'POST',
    body: JSON.stringify({ title: post.title, content: post.content }),
    headers: headers
  })
    .then(
      response => {
      if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      },
      error => console.log('An error occurred.', error)
    )
    .then(json => {
      return dispatch(addPostSuccess(json));
    })
    .catch(error => dispatch(requestPostsFailure(error)));
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
      response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      },
      error => console.log('An error occurred.', error)
    )
    .then(json => {
      localStorage.setItem('token', json.user.token);

      return dispatch(registerRequestSuccess(json.user));
    })
    .catch(error => dispatch(requestPostsFailure(error)));
};

export const logout = () => dispatch => {
  localStorage.setItem('token', '');
  dispatch(logoutRequest());
};
