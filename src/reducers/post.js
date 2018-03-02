import { ADD_POST, REMOVE_POST } from '../actions/constants';

export const post = (state = {}, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        id: action.id,
        title: action.title,
        content: action.content
      };
    default:
      return state;
  }
};
