export const post = (state = {}, action) => {
  switch (action.type) {
    case '[Post] ADD_POST':
      return {
        id: action.id,
        title: action.title,
        content: action.content
      };
    default:
      return state;
  }
};
