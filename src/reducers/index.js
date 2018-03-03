import { post } from './post';
import { posts } from './posts';
import { login } from './login';
import { combineReducers } from 'redux';

export default combineReducers({
  posts,
  post,
  login
});
