import { ADD_POST, REMOVE_POST } from '../actions/constants';

export const post = (state = {}, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        post: action.post
      };
    default:
      return state;
  }
};
