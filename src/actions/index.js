import { ADD_POST, REMOVE_POST, SEARCH_POSTS } from './constants';

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

export const searchPosts = searchText => {
    return {
      type: SEARCH_POSTS,
      searchText
    };
  };
  