export const post = (state = {}, action) => {
  switch (action.type) {
    case '[Post] ADD_POST':
      return {
        id: action.id,
        text: action.text,
        executor: action.executor,
        status: 'TODO'
      };
    case '[Post] REMOVE_POST':
      if (state.id === action.id) {
        return false;
      }
      return true;
    default:
      return state;
  }
};
