const post = (state, action) => {
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

const posts = (state = [], action) => {
  switch (action.type) {
      case '[Posts] ADD_POST':
          return [
              ...state,
              post(undefined, action)
          ];
      case '[Posts] REMOVE_POST':
          return state.filter(p => 
            post(p, action)
          );
      default:
          return state;
  }
};

export default posts;