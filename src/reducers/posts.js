import {
  ADD_POST,
  REMOVE_POST_SUCCESS,
  REQUEST_POSTS,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILURE,
  ADD_POST_SUCCESS
} from '../actions/constants';
import { post } from './post';

export const posts = (
  state = { isFetching: false, items: [], error: {} },
  action
) => {
  switch (action.type) {
    case ADD_POST_SUCCESS:
      return Object.assign({}, state, {
        items: [...state.items, action.post]
      });
    case REMOVE_POST_SUCCESS:
      return Object.assign({}, state, {
        items: state.items.filter(p => p._id !== action.id)
      });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REQUEST_POSTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items.filter(
          p => (p.title ? p.title.indexOf(action.searchText) !== -1 : false)
        ),
        lastUpdated: action.receivedAt
      });
    case REQUEST_POSTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
};
