import { ADD_POST, REMOVE_POST, SEARCH_POSTS } from '../actions/constants';
import { post } from './post';

export const posts = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, post(undefined, action)];
    case REMOVE_POST:
      return state.filter(p => p.id !== action.id);
    case SEARCH_POSTS:
      return state.filter(p => p.title.indexOf(action.searchText) !== -1) ;
    default:
      return state;
  }
};
