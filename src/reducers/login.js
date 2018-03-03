import { LOGIN, LOGIN_SUCCESS } from '../actions/constants';

export const login = (state = { }, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isFetching: false
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user
      });
    default:
      return state;
  }
};
