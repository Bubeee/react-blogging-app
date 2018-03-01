export const posts = (state = [], action) => {
  switch (action.type) {
    case '[Posts] ADD_POST':
      return [...state, post(undefined, action)];
    case '[Posts] REMOVE_POST':
      return state.filter(p => post(p, action));
    default:
      return state;
  }
};
