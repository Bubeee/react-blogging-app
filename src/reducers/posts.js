import { ADD_POST, REMOVE_POST } from '../actions/constants';

export const posts = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, post(undefined, action)];
    case REMOVE_POST:
      return state.filter(p => p.id !== action.id);
    default:
      return state;
  }
};
