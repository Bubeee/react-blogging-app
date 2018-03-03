import { ADD_POST, REMOVE_POST, REQUEST_POSTS, REQUEST_POSTS_SUCCESS } from '../actions/constants';
import { post } from './post';

export const posts = (state = { isFetching: false, items: [] }, action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, post(undefined, action)];
    case REMOVE_POST:
      return state.filter(p => p.id !== action.id);
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REQUEST_POSTS_SUCCESS:
  return Object.assign({}, state, {
        isFetching: false,
        items: action.items.filter(
          p => p.title ? p.title.indexOf(action.searchText) !== -1 : false
        ),
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};
